const pow = function (n, p) {
    const initialNumber = n;
    if (p === 0) return 1;
    for (let i = 1; i < p; i++) {
        n *= initialNumber;
    } 
    return n;
}

console.log(pow(2, 5));


let randomNumber = Math.floor(Math.random() * 10);
let guess = prompt('Я загадал число от 1 до 10! Попробуй отгадай. Какое число я загадал?');
let numberOfGuess = 1;

function random() {
    console.log(randomNumber);
    while (true) {
        if (guess < randomNumber) {
            guess = prompt('Мало. Попробуй еще раз!');
            numberOfGuess = numberOfGuess + 1;   
        } else if (guess > randomNumber) {
            guess = prompt('Много. Попробуй еще раз!');
            numberOfGuess = numberOfGuess + 1;
        } else {
            alert('Ты угадал! Поздравляю! Это число '+ randomNumber +'. Тебе понадобилось '+ numberOfGuess +' попыток.');
            break;
        }  
    }  
}


random();

// попыталась разбить на 2 функции, не работает 2я, где нужно угадывать и alert выводиться странный, не число. Где ошибка?
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// console.log(randomNumber(1, 10));

// let guess = prompt('Я загадал число от 1 до 10! Попробуй отгадай. Какое число я загадал?');
// let numberOfGuess = 1;

// function random() {
//      while (true) {
//         if (guess < randomNumber) {
//             guess = prompt('Мало. Попробуй еще раз!');
//             numberOfGuess = numberOfGuess + 1;   
//         } else if (guess > randomNumber) {
//             guess = prompt('Много. Попробуй еще раз!');
//             numberOfGuess = numberOfGuess + 1;
//         } else {
//             alert('Ты угадал! Поздравляю! Это число '+ randomNumber +'. Тебе понадобилось '+ numberOfGuess +' попыток.');
//             break;
//         }  
//     }  
// }
    
//     random();