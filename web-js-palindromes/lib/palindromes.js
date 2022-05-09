const isPalindrome = function(s) {
  let stringReverse = s.toLowerCase().split("").reverse().join("");
  s = s.replace(/\s+/g,'');
  stringReverse = stringReverse.replace(/\s+/g,'')
  console.log(s.toLowerCase());
  console.log(stringReverse);
  return s.toLowerCase() == stringReverse;
};
module.exports = isPalindrome;


