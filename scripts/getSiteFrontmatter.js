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

function insertIntoNestedPath(obj, pathArray, value) {
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    if (!current[pathArray[i]]) {
      current[pathArray[i]] = {};
    }
    current = current[pathArray[i]];
  }
  const filenameParts = pathArray[pathArray.length - 1].split('.');
  if (filenameParts.length === 2) {
    if (!current[filenameParts[0]]) {
      current[filenameParts[0]] = {};
    }
    current[filenameParts[0]][filenameParts[1]] = value;
  } else {
    current[pathArray[pathArray.length - 1]] = value;
  }
}

try {
  const files = glob.sync(sitePath + '/**/*.mdx');
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const frontmatter = matter(content).data;
    const relativePath = path.relative(sitePath, file);
    const pathArray = relativePath.split(path.sep).map(part => part.replace('.mdx', ''));
    insertIntoNestedPath(siteFrontmatter, pathArray, frontmatter);
  });

  fs.writeFileSync(
    path.join(__dirname, '../config/siteFrontmatter.json'),
    JSON.stringify(siteFrontmatter, null, 2)
  );
} catch (err) {
  console.error("Error occurred while globbing:", err);
}