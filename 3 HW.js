function sum (FirstValue){
    return function(SecondValue){
        return FirstValue + SecondValue
    }
}

const sumValues = sum (10);

console.log (sumValues (23));