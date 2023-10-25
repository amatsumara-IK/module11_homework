

function numOutput (num1, num2){
    let i = num1;

    let IntervalId = setInterval(function (){
        if (i <= num2){
            console.log (i);
            i++;
        } else {
            clearInterval(IntervalId);
        }
    }, 1000);

}

numOutput(5, 15);