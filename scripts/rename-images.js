const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

async function findMdxFiles(dir) {
  const files = await fs.readdir(dir, { recursive: true });
  return files.filter(file => file.endsWith('.mdx'));
}

async function processFile(mdxPath) {
  // Read the MDX file
  const content = await fs.readFile(mdxPath, 'utf-8');
  const { data, content: mdxContent } = matter(content);

  if (!data.image) return;

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

async function main() {
  const mdxFiles = await findMdxFiles('pages');
  for (const file of mdxFiles) {
    await processFile(path.join('pages', file));
  }
}

main().catch(console.error); 