 
// let string = "Relax" //Строковый тип данных
// //let - Неявное обьявление переменной
// //sting - Имя переменной
// // = -Это присвоение значения переменной
// //"Relax" - Значение переменной
// alert(string)   //Всплывающее окно на сайте

// let integer = 10//Численный тип данных
// console.log(integer) //Вывод текста в консоль сайта
// let float  = 10.1//Число с плавающей точкой
// let boolean = true //= False
// ******************************************************************************
// let num = prompt("Введите число для возведения в квадрат")
//во внутрь переменной num мы передаём функцию prompt(),
//которая принимает значение числа, вводимое из клавиатуры из браузера,
//которое в дальнейшем мы будем возводить в квадрат
num = num ** 2
// + сложение(num = num + 1) - значение переменной увеличится на 1
// - вычитание (num = num - 1) - значение переменной уменьшится на 1
// * - умножение (num = num * 1) - значение переменной умножится на 1
// / - деление (num = num - 1) - значение переменной делится на 1
// % - взятие остатка от деления (num = num % 3) - ... остаток от деления на 3
//мы изменили переменную num и возвели её в квадрат(во вторую степень)
alert(num)
//выводит значение переменной num на экран
//**********************************************************

let num_First = Number(prompt("Введите первое число"))
let num_Second = Number(prompt("Введите второе число"))
sum = num_First + num_Second
alert(sum)
let mid = (num_First + num_Second) / 2
alert(mid)

let num = Number(prompt("Введите размер стороны квадрата"))
num = num ** 2
alert(num)