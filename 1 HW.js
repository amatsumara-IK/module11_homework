/* 1 задание */

let array = [2,15,8,75,34, NaN, false, 80, 0, 0];
let even = 0;
let odd = 0;
let zero = 0;


function getTypeOfNum (){
    const number = array.filter((num) => num > 0);
    array.forEach (function(item) {
        if (item === 0){
            zero++
        }else if (item % 2 === 0){
            even++
        } else {
            odd++}
    });

    console.log (`В массиве:
    Кол-во четных чисел = ${even}
    Кол-во нечетных чисел = ${odd}
    Кол-во нулевых чисел = ${zero}`);
}

getTypeOfNum();


/* const number = array.filter (function (num){
	return num > 0;
})

console.log (number); */