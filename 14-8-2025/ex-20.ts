
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}


const numStrPair = pair<number, string>(1, "Hello");
console.log(numStrPair); // [1, "Hello"]

const boolObjPair = pair<boolean, { name: string }>(true, { name: "Praveen" });
console.log(boolObjPair); 
