const obj2 = {
	0: "H",
    1: "e",
    2: "l",
    3: "l",
    4: "o"
}

let word = ""
for (const key in obj2) {
    word += obj2[key]
}

console.log(word)

