module.exports = function check(str, bracketsConfig) {
  const bracketsArray = bracketsConfig.map(item => item.join(''));

  let strLength = str.length;
  let oldStrLength = 0;

  while (strLength !== oldStrLength) {
    bracketsArray.forEach(item => str = str.replace(item, ''));
    oldStrLength = strLength;
    strLength = str.length;
  }

  return str.length === 0;
}
