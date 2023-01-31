var isPalindrome = function(s) {


  // make the string into a new containing only lower case letters and no spaces

  // declare a variable set to an empty string, where we will put our new cleand string

  let str = s.replace(/[^\w\s\']|_/g, "")
       .replace(/\s+/g, "")
       .replace(/['"]+/g, '')
       .toLowerCase();

  // flip the lowercase, only letter word around
  let flipped = '';

  for (let i = str.length - 1; i >= 0; i--) {
      flipped += str[i];
  }

  // compare those two strings
  if (flipped === str) {
      return true;
  } else {
      return false;
  }

      // if they are equal return true

      // otherwise return false
};