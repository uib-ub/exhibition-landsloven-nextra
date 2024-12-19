const fs = require('fs');
const fsPromises = require('fs/promises');
const sharp = require('sharp');
const path = require('path');

/**
 * Retrieves paths of image files from the card-images directory.
 * 
 * @returns {Promise<string[]>} Array of image paths relative to the public directory.
 * Only returns images that:
 * - Have extensions .jpg, .jpeg, .png, or .webp (case insensitive)
 * - Don't include '_orig' in their filename (to exclude original copies)
 * 
 * @example
 * const paths = await getImagePaths();
 * // Returns: ['/images/card-images/image1.jpg', '/images/card-images/image2.png']
 */
async function getImagePaths() {
  try {
    const cardImagesDir = path.join(process.cwd(), 'public', 'images', 'card-images');
    const files = await fsPromises.readdir(cardImagesDir);
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .filter(file => !file.includes('_orig'))
      .map(file => path.join('/images/card-images', file));
  } catch (error) {
    console.error('Error reading card-images directory:', error);
    return [];
  }
}

/**
 * Processes an image to ensure it matches the target aspect ratio of 4:3.
 * The function:
 * 1. Creates a backup of the original image with '_orig' suffix
 * 2. Resizes the image maintaining aspect ratio
 * 3. Centers the image content
 * 
 * @param {string} inputPath - The path to the image relative to the public directory
 * @param {string} outputPath - The full system path where the processed image will be saved
 * 
 * @throws {Error} If image processing fails
 * 
 * @example
 * await processImage('/images/card-images/photo.jpg', '/full/path/to/public/images/card-images/photo.jpg');
 */
async function processImage(inputPath, outputPath) {
  const targetAspectRatio = 4 / 3;

  try {
    // Create paths
    const fullInputPath = path.join(process.cwd(), 'public', inputPath);
    const origPath = fullInputPath.replace('.jpg', '_orig.jpg');

    // Skip if _orig already exists (image was already processed)
    if (fs.existsSync(origPath)) {
      console.log(`Skipping ${fullInputPath} (already processed)`);
      return;
    }

    // Copy original file
    await fsPromises.copyFile(fullInputPath, origPath);

    // Process the image using the original as source
    const image = sharp(origPath);
    const metadata = await image.metadata();

    let width = metadata.width;
    let height = Math.round(width / targetAspectRatio);

    if (height > metadata.height) {
      height = metadata.height;
      width = Math.round(height * targetAspectRatio);
    }

    await image
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(fullInputPath);

    console.log(`Processed: ${fullInputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

/**
 * Main execution function that orchestrates the image processing workflow.
 * 
 * The function:
 * 1. Gets all valid image paths from the card-images directory
 * 2. Processes each image sequentially to match the target aspect ratio
 * 3. Logs progress and any errors that occur
 * 
 * @returns {Promise<void>}
 * 
 * @example
 * main().catch(console.error);
 */
async function main() {
  const imagePaths = await getImagePaths();
  console.log(`Found ${imagePaths.length} images to process`);

  for (const imagePath of imagePaths) {
    const inputPath = imagePath;
    const outputPath = path.join(process.cwd(), 'public', imagePath);
    await processImage(inputPath, outputPath);
  }
}

main().catch(console.error); 