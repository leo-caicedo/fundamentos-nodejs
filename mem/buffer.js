let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());
