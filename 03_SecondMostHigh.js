const arr = ["1", "2", "5", "3", "5", "4"]
const uniqueArr = [...new Set(arr)] // new arr with single occurance value
const sortedArr = uniqueArr.sort((a, b) => b - a) // will sort the arr in descending order

console.log("456789", sortedArr)
console.log("second highest", sortedArr[1])
