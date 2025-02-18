const arr = ["2", "4", "3", "5", "7", "2", "10"]
const charCount = {}
for (const char of arr) {
  charCount[char] = (charCount[char] || 0) + 1
}
console.log("char cout", charCount)
