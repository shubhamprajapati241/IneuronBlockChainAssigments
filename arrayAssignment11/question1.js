let arr = [1, 2, 3, 4, 5];

let sumOfNumberAtOddPlace = arr
  .filter((num) => num % 2 !== 0)
  .reduce((sum, num) => sum + num);

let sumOfNumberAtEvenPlace = arr
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num);

console.log("sumOfNumberAtOddPlace :" + sumOfNumberAtOddPlace);
console.log("sumOfNumberAtEvenPlace : " + sumOfNumberAtEvenPlace);

// a) Print the difference between the two sums
let differenceBetweenTwoSum = sumOfNumberAtOddPlace - sumOfNumberAtEvenPlace;
console.log("differenceBetweenTwoSum :" + differenceBetweenTwoSum);

// b) Print the number of elements in odd places
let numberOfElementsAtOddPlace = arr.filter((num) => num % 2 !== 0).length;
console.log("numberOfElementsAtOddPlace : " + numberOfElementsAtOddPlace);

// c) Print the number of elements in even places
let numberOfElementsAtEvenPlace = arr.filter((num) => num % 2 === 0).length;
console.log("numberOfElementsAtEvenPlace : " + numberOfElementsAtEvenPlace);

// d) Print the average of all elements in the array
let sumOfAllElements = arr.reduce((sum, num) => sum + num);
let averageOfAllElements = sumOfAllElements / arr.length;
console.log("averageOfAllElements : " + averageOfAllElements);

// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
let gcd = 0;
const number1 = sumOfNumberAtOddPlace;
const number2 = sumOfNumberAtEvenPlace;
for (let i = 1; i <= number1 && i <= number2; i++) {
  // checking if is factor of both integers
  if (number1 % i == 0 && number2 % i == 0) {
    gcd = i;
  }
}

console.log(gcd);
