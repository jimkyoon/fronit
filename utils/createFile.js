const fs = require('fs');
const path = require('path');

/**
 * Creates component files based off component data from process files
 * @param {String} cwd - the current directory the user is in
 * @param {String} name - name of the file
 * @param {String} extension - type of file that needs to be created
 * @param {String} template - string from component template generator
 * @returns {Promise} file
 */

const createFile = (cwd, name, extension, template) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(cwd, `${name}.${extension}`), template, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};

module.exports = createFile;
