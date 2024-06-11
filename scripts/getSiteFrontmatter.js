/**
 * Get the frontmatter of a site.
 * Get the frontmatter for all *.mdx from "pages" directory, also from any subdirectory. The frontmatter and path of the file will be returned and stored in a JSON file.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

const sitePath = path.join(__dirname, '../pages');
let siteFrontmatter = {};

function insertIntoNestedPath(obj, pathArray, value, filePath) {
  let current = obj;
  for (const element of pathArray) {
    if (!current[element]) {
      current[element] = {};
    }
    current = current[element];
  }
  Object.assign(current, { ...value, filePath });
}

try {
  const files = glob.sync(sitePath + '/**/*.mdx');
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const frontmatter = matter(content).data;
    const relativePath = path.relative(sitePath, file);
    let pathArray = relativePath.split(path.sep).map(part => part.replace('.mdx', ''));
    const fileName = pathArray[pathArray.length - 1];
    if (fileName.includes('.')) {
      const [name, locale] = fileName.split('.');
      pathArray[pathArray.length - 1] = name;
      pathArray.push(locale);
    }
    const filePath = `/${pathArray.slice(0, -1).join(path.sep)}`;
    insertIntoNestedPath(siteFrontmatter, pathArray, frontmatter, filePath);
  });

  fs.writeFileSync(
    path.join(__dirname, '../config/siteFrontmatter.json'),
    JSON.stringify(siteFrontmatter, null, 2)
  );
} catch (err) {
  console.error("Error occurred while globbing:", err);
}