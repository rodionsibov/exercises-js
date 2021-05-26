function* idGenerator(){
    let id = 54
    while(true) {
        yield id++
    }
}

const myIdGenerator = idGenerator()
console.log(myIdGenerator.next().value);
console.log(myIdGenerator.next().value);