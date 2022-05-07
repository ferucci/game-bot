'use strict';

let rightNumber = getRandomNumber(1, 100);
let counter = 10

function outputNumberBelowZero() {
  let numberbelowZero = confirm('Обязательно перечитайте книги по математики с 1 по 4 классы начальной школы.' +
    ' Повторить еще раз?');
  if (numberbelowZero === true) {
    getGuessNumber();
  } else {
    getGameOver();
  }
}

function outputHiddenNumberLess() {
  let hiddenNumberLess = confirm(`Загаданное число меньше, осталось попыток ${counter}`);
  if (hiddenNumberLess === true) {
    getGuessNumber();
  } else {
    getGameOver();
  }
}

function outputHiddenNumberMore() {
  let hiddenNumberGreater = confirm(`Загаданное число больше, осталось попыток ${counter}`);
  if (hiddenNumberGreater === true) {
    getGuessNumber();
  } else {
    getGameOver();
  }
}

const getGameOver = function () {
  let gameOver = confirm('Вы действительно хотите завершить эту прекрасную игру?');
  if (gameOver === true) {

  } else {
    getGuessNumber();
  }
};

const attemptsEnded = function () {

  let attemptsEnd = confirm(`Попытки закончились, хотите сыграть еще?`)
  if (attemptsEnd === true) {
    counter = 10
    console.log(counter)
    getGuessNumber()
  } else {
    alert('Игра окончена')
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const getGuessNumber = function () {

  const checkingNumber = function () {

    let guessNumber = +prompt('Угадай число от 1 до 100');

    if (guessNumber === rightNumber) {
      rightNumber = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

      if (rightNumber === true) {
        rightNumber = getRandomNumber(1, 100);
        counter = 10
        getGuessNumber()
      } else {
        alert('Спасибо за уделенное время')
      }

    } else if (guessNumber !== rightNumber && guessNumber < rightNumber && guessNumber > 0) {
      counter--
      outputHiddenNumberMore();

    } else if (guessNumber !== rightNumber && guessNumber > rightNumber) {
      counter--
      outputHiddenNumberLess();

    } else if (guessNumber < 0) {
      outputNumberBelowZero();
    } else if (guessNumber === 0) {
      getGameOver();
    }

    else if (isNaN()) {
      alert('Введите число');
      getGuessNumber();
    }

  };

  if (counter < 1) {
    attemptsEnded()
  } else {
    checkingNumber();
  }

};

window.addEventListener('DOMContentLoaded', getGuessNumber)
