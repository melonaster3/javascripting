const nameInverter = function(name) {

  if (name === '' || checkforHonorificInput(name)) return '';
  if (name === undefined) return "Error";
  name = name.trim();
  if (checkForSpace(name)){

    name = name.split(" ");
    
    if (checkforHonorific(name)) {

      if (name.length === 2) {
        return name.join(" ")
      } else { 
        return name[0] + " " + name [2] + ', ' + name [1];
      }


    } else return name.reverse().join(", ")

  } else {
    return name;
  }
}

const checkForSpace = function(name) {
  for (char of name) {
    if (char === ' ') return true;
  }
  return false;
}

const checkforHonorificInput = function (name) {
  if (name === 'Dr.'|| name === "Mr." || name === "Mrs." || name === "Ms." ) return true;
  else return false;
}

const checkforHonorific = function (name) {
  for (words of name) {
    if (words === 'Dr.'|| words === "Mr." || words === "Mrs." || words === "Ms." ) return true;
  }
  return false;
}


module.exports = nameInverter;

