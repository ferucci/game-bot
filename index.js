'use strict';


function outputNumberBelowZero() {
  let numberbelowZero = confirm('Обязательно перечитайте книги по математики с 1 по 4 классы начальной школы?' +
    ' Повторить еще раз?');
  if (numberbelowZero === true) {
    getGuessNumber();
  } else {
    getGameOver();
  }
}

function outputHiddenNumberLess() {
  let hiddenNumberLess = confirm('Загаданное число меньше, испытать удачу еще раз?');
  if (hiddenNumberLess === true) {
    getGuessNumber();
  }
}

function outputHiddenNumberMore() {
  let hiddenNumberGreater = confirm('Загаданное число больше, испытать удачу еще раз?');
  if (hiddenNumberGreater === true) {
    getGuessNumber();
  } else {
    getGameOver();
  }
}

const getGameOver = function () {
  let gameOver = confirm('Вы хотите завершить игру?');
  if (gameOver === true) {

  } else {
    getGuessNumber();
  }
};

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getGuessNumber = function () {
  let rightNumber = getRandomNumber(1, 100);
  const checkingNumber = function () {

    let guessNumber = +prompt('Угадай число от 1 до 100');

    if (guessNumber === rightNumber) {
      rightNumber = alert('Поздравляю, Вы угадали!!!');
    } else if (guessNumber !== rightNumber && guessNumber < rightNumber && guessNumber > 0) {
      outputHiddenNumberMore();

    } else if (guessNumber !== rightNumber && guessNumber > rightNumber) {
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

  checkingNumber();


};

getGuessNumber();
