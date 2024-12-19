const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

/**
 * Recursively finds all MDX files in the specified directory
 * @param {string} dir - The root directory to search in
 * @returns {Promise<string[]>} Array of paths to MDX files
 */
async function findMdxFiles(dir) {
  const files = await fs.readdir(dir, { recursive: true });
  return files.filter(file => file.endsWith('.mdx'));
}

/**
 * Processes a single MDX file by:
 * 1. Moving its associated image to the card-images directory
 * 2. Renaming the image based on the MDX filename and folder structure
 * 3. Updating the frontmatter to reflect the new image path
 * 
 * @param {string} mdxPath - Path to the MDX file
 * @returns {Promise<void>}
 * 
 * @example
 * // For a file at pages/topic/intro.en.mdx with image: '/images/old.jpg'
 * // - Copies /public/images/old.jpg to /public/images/card-images/intro.jpg
 * // - Updates frontmatter image path to /images/card-images/intro.jpg
 * // For introduction files, prefixes with folder name: topic-intro.jpg
 */
async function processFile(mdxPath) {
  // Read the MDX file
  const content = await fs.readFile(mdxPath, 'utf-8');
  const { data, content: mdxContent } = matter(content);

  if (!data.image) return;

  // Guard against already processed files
  if (data.image.includes('/images/card-images/')) {
    console.log(`Skipping ${mdxPath} - already processed`);
    return;
  }

  // Get folder name and base name
  const folderName = path.dirname(mdxPath).split(path.sep).pop();
  const mdxBaseName = path.basename(mdxPath).replace(/\.(no|en)\.mdx$/, '');
  const imageExt = path.extname(data.image);

  // If it's an "introduksjon" file, prefix with folder name
  const newImageName = mdxBaseName.includes('introduksjon')
    ? `${folderName}-${mdxBaseName}${imageExt}`
    : `${mdxBaseName}${imageExt}`;

  // Setup paths
  const oldImagePath = path.join(process.cwd(), 'public', data.image);
  const newImagePath = path.join(process.cwd(), 'public/images/card-images', newImageName);

  try {
    // Create directory if it doesn't exist
    await fs.mkdir(path.dirname(newImagePath), { recursive: true });

    // Copy the image
    await fs.copyFile(oldImagePath, newImagePath);

    // Update the frontmatter
    data.image = `/images/card-images/${newImageName}`;

    // Write back to MDX file
    const newContent = matter.stringify(mdxContent, data);
    await fs.writeFile(mdxPath, newContent);

    console.log(`Processed ${mdxPath}`);
    console.log(`  Copied ${oldImagePath} to ${newImagePath}`);
  } catch (error) {
    console.error(`Error processing ${mdxPath}:`, error);
  }
}

/**
 * Main execution function that:
 * 1. Finds all MDX files in the pages directory
 * 2. Processes each file to move and rename its associated images
 * 3. Updates the frontmatter in each MDX file
 * 
 * @throws {Error} If there are issues accessing files or directories
 * @returns {Promise<void>}
 */
async function main() {
  const mdxFiles = await findMdxFiles('pages');
  for (const file of mdxFiles) {
    await processFile(path.join('pages', file));
  }
}

main().catch(console.error); 