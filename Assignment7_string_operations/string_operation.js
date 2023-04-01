/* 
Javascript Assignment 7

1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...

2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”

3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”

4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”

5. What string method can be used to convert string into array ?

6. What string method can be used to check the occurrence of a specified
text in a string?

7. How can you break a string to a newline in Javascript ?

8. Write a Javascript function to test whether the first character of a string
is lowercase.

9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?

10. Given a String S, achieve following tasks
    a) Convert the String into upper case.
    b) Convert only the first character to uppercase.
    c) Convert the String into lower case.
    d) Break the string into two halves and swap them.
    e) Count the repeating characters.
    f) Reverse the string
*/

// 1. String truncate to 4 character
const truncateString = (str) => {
  const trunctLength = 4;

  if (str.length > trunctLength) {
    return str.slice(0, trunctLength) + "...";
  }
  return str;
};

// 2. Remove Whitespace from string
const removeWhitespace = (str) => {
  return str.replace(" ", "");
};

// 3. Swap first and last words
const swapTwoWords = (str) => {
  const stringArray = str.split(" ");
  return stringArray.reverse().join(" ");
};

// 4. Replace a with x
const replaceAwithX = (str) => {
  return str.replaceAll("a", "x");
};

// 9. input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.
function handleCaseInsensitive(str) {
  if (str.toLowerCase() === "yes") {
    console.log("9. Handling yes|YES|Yes| - The user agrees");
    return;
  }
}

//10. String Operations
function strTasks(str) {
  // a) Convert the String into upper case.
  console.log("10. a) String to upper case :" + str.toUpperCase());

  // b) Convert only the first character to uppercase.
  console.log(
    "10. b) String to first upper :" +
      str.charAt(0).toUpperCase() +
      str.slice(1)
  );

  // c) Convert the String into lower case.
  console.log("10. c) String to lower case :" + str.toLowerCase());

  // d) Break the string into two halves and swap them.
  console.log(
    "10. d) Halve string and swap halves : " +
      str.substring(str.length / 2) +
      " " +
      str.substring(0, str.length / 2)
  );

  // e) Count the repeating characters.
  var obj = {};
  for (i = 0, length = str.length; i < length; i++) {
    var c = str.charAt(i);
    obj[c] = isNaN(obj[c]) ? 1 : obj[c] + 1;
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] === 1) {
      delete obj[key];
    }
  }
  console.log(
    "10. e) Count of repeating characters in a string " + JSON.stringify(obj)
  );

  // f) Reverse the string
  console.log("10. f) Reverse String " + str.split("").reverse().join(""));
}

const string = "Hello Shubham";
console.log("1. String truncate to 4 character : " + truncateString(string));
console.log("2. Removing whitespace from string : " + removeWhitespace(string));
console.log("3. Swapping 2 words : " + swapTwoWords(string));
console.log("4. Replace A with X : " + replaceAwithX(string));

console.log(
  "5. What string method can be used to convert string into array ? : string.split('')"
);

console.log(
  "6. What string method can be used to check the occurrence of a specified text in a string? : string.match(regaxExpression)"
);

console.log(
  "7. How can you break a string to a newline in Javascript ? string.split('').join('\n')"
);

console.log(
  "8. Write a Javascript function to test whether the first character of a string is lowercase? : (/^a-z/).test(string) "
);

handleCaseInsensitive("YES");
strTasks(string);
