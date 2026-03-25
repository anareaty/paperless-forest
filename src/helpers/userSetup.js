const values = [
  // [' ', false],
  // ['\u00A0', false],// non-breaking space
  // ['x', true],
  ['/', true],
  ['-', true],
  ['>', true],
  ['<', true],
  ['?', true],
  ['!', true],
  ['*', true],
  ['"', true],
  ['i', true],
  ['l', true],
  ['b', true],
  ['S', true],
  ['I', true],
  ['p', true],
  ['c', true],
  ['f', true],
  ['k', true],
  ['w', true],
  ['u', true],
  ['d', true],
];
function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  const altCheckbox = require('./alt-markdown-it-task-checkbox.js');
  const options = {
		disabled: true,
		divWrap: true,
		divClass: 'checkbox',
		idPrefix: 'cbx_',
		ulClass: 'task-list',
		liClass: 'task-list-item',
    altCheckboxes: {
      regex: testRegEx(values),
      values: values
    }
	};
  // console.log(options.altCheckboxes.regex);
  altCheckbox(md, options);
  
}
/**
 * @param {string[][]} values Pair of checked marks and status (true = checked, false = unchecked)
 */
function testRegEx(values){
  const str = values.map(e =>
    ['/','-','?','*','+','^','.','$','^']
    .includes(e[0]) ? '\\' + e[0] : e[0])
    .join('');
  const regex = new RegExp(`^\\\[([${str}])\\\][ \u00A0]`);
  return regex;
}







function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
