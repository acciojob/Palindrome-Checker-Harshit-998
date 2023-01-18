// complete the given function

function palindrome(str) {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  if (str === ans) {
    return true;
  }
  return false;
}
module.exports = palindrome;
