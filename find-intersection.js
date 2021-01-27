function FindIntersection(strArr) {
  //split string elements into arrays of numbers
  let arr1 = strArr[0].split(", ")
  let arr2 = strArr[1].split(", ")
  strArr = [];
  //iterate over arr1 and check whether arr2 includes the value 
  //at arr1[i] if it does, push arr1[i] to strArr
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      strArr.push(arr1[i])
    }
  }
  //join strArr with commas (defaut) to make it a string and return it
  return strArr.join();
}

// keep this function call here 
//Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Expected Output: 1,4,13
console.log(FindIntersection(readline()));
