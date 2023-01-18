// complete the given function

function palindrome(str) {
  //convert the string in lower cases
  str = str.toLowerCase();
  //reverse the string
  let reversedStr = str.split("").reverse().join("");
  //check if the str is palindrome or not
  return str === reversedStr;
}
module.exports = palindrome;
