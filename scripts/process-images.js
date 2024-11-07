const fs = require('fs');
const fsPromises = require('fs/promises');
const sharp = require('sharp');
const path = require('path');

async function getImagePaths() {
  try {
    const cardImagesDir = path.join(process.cwd(), 'public', 'images', 'card-images');
    const files = await fsPromises.readdir(cardImagesDir);
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => path.join('/images/card-images', file));
  } catch (error) {
    console.error('Error reading card-images directory:', error);
    return [];
  }
}

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