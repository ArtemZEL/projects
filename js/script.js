"use strict";//современный режим
//1
// a=15;
// console.log(a);

// let number =5;//изменяемое значение
// const leftBorderWidth=1;//константа один раз вызвали и все

// number =10;
// console.log(number);
//2
// let numbere=4.6;
// console.log(-4/0);
// console.log('string'*9);
// const person="Alex";

// const bool=true;
//null-когда ничего просто не существует
//3
//alert('ДА');

// const result=confirm("Ты когда спать идешь?");
// console.log(result);
//confirm-как сообщение на true or false

// const answer =+prompt("Ты меня любишь?","Да");
//при использовании +prompt можно испробовать оперрацию сложения можно использовать др тип, при обычном просто под текс добавляется 
// console.log(typeof(answer));
//вся информация приходит от пользователя будет в ввиде строк вне зависимости от того как мы получили

const answers=[];
// answers[0]=prompt('Как тебя зовут','');
// answers[1]=prompt('Какая твоя фамимлия','');
// answers[2]=prompt('Возраст','');

console.log(typeof(answers));
console.log(typeof(null));
//4
//интерполяция-всталение в нутрь строки значения переменной
// const category='toys';
// console.log(`https://someurl.com/${category}/5`);
// const user="Ivan";
// alert(`Hello, ${user}`);

//5
console.log('arr'+"- object");


let incr =10,
    decr=10;

// ++incr;//инкремент
// --decr;//декремент    

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2+2*2===8);

const isChecked=true,
isClose=false;
console.log(isChecked||!isClose);