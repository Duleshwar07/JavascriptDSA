const str = "ASDFGHJK"
const charcount = {}
for (const char of str) {
  charcount[char] = (charcount[char] || 0) + 1
}

console.log("char", charcount);