const obj = {
    name: "Ann",
    age: 19,
    city: "Kyiv"
};

function StrCount(obj) {
    let sum = 0;
    for (const key in obj) {
        typeof obj[key] === 'string' ? sum += obj[key].length : null;
    }
    return sum;
}

const totalStringLength = StrCount(obj);
console.log("Total string length:", totalStringLength);
