// caesar.js

const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
 
  if(plaintext.length === 1) {
    let ans = '';
    ans = changeCode(plaintext.charCodeAt(0), key);
    return String.fromCharCode(ans);
  }

  let arr = plaintext.split('');
  let newarr = [];
  let newarr2 = [];

  for (let words of arr) {
    for (let j = 0; j < words.length; j++) {
      newarr.push(changeCode(words[j].charCodeAt(0), key));
    }
}
for (let i = 0; i < newarr.length; i++) {
newarr2.push(String.fromCharCode(newarr[i]));
}

return newarr2.join('');

};

const changeCode = function (code, key) {

  if(code === 32) {
    return 32;
  }
  
  if (code + key > 122) {
    console.log ((((code + key) - 122) + 96));
    return (((code + key) - 122) + 96);
  } else if (code + key < 97) {
    return (123 - (97 - (code + key)));
  } else {
    return (code + key);
  }
}


module.exports = { encrypt };
