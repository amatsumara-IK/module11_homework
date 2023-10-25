function PrimeNumber (num){
    if (num > 1000){
        return console.log('Число должно быть меньше 1000, повторите запрос');
    } else if (num <= 1){
        return console.log (`Число ${num} не является простым`)
        }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++ ){
        if (num % i === 0) {
            return console.log (`Число ${num} не является простым`)
        } else {
            return console.log (`Число ${num} является простым`)
        }
    }   

}

PrimeNumber(102);
