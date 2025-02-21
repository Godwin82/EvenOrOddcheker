function checkEvenOrOdd(num){
    if (typeof num !=='number'){
        return "invalid Input";
    }
    else if (num % 2 === 0){
        return"Even";
    }
    else {
        return "odd";
    }
}
console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(7));
console.log(checkEvenOrOdd("abc"));