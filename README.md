# Калькулятор

## Task
Проект представляет собой веб-приложение «Калькулятор» с поддержкой базовых арифметических операций, процентов, смены знака, квадрата, куба, x в степени y, 10 в степени x, 1 / x, корня квадратного, корня кубического, корня степени y, факториала; также реализованы MC, M+, M-, MR и переключения темы (светлая/тёмная).  

Ссылка на документ с заданием: 
https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view?usp=sharing

## How to run the app
1. Клонируйте или скачайте проект в удобную папку:

git clone https://github.com/kksushka/calculator-app.git

2. Перейдите в папку проекта:

cd Calculator

3. Установите зависимости:

npm install

4. Запустите сервер разработки:

npm run dev

5. Соберите production-версию:

npm run build

## Структура проекта 

1. src/js/ — исходный код приложения;

2. calculator/:

calculator/core.js — основная логика калькулятора.
calculator/evaluator.js — модуль для вычисления выражений.
calculator/functions.js — математические функции.
calculator/memory.js — работа с памятью калькулятора.

3. ui/ — интерфейсные компоненты:

   commands/ — обработка команд:

    base.js — базовый класс команд.
    commandFactory.js — фабрика команд.
    functionCommand.js, inputCommand.js, operationCommand.js, specialCommand.js — реализации различных типов команд.
    
    buttons.js — кнопки калькулятора.
    display.js — экран калькулятора.
    theme.js — настройка темы интерфейса.

4. utils/ — вспомогательные утилиты;

5. src/styles/ — стили приложения:

main.scss — основной SCSS-файл.
main.css — скомпилированный CSS.

6. src/index.html — главная HTML-страница.
7. dist/ — папка для собранного проекта (создаётся после npm run build).
8. webpack.config.cjs — конфигурация Webpack.
9. .eslintrc.json — конфигурация ESLint.
10. package.json — метаданные проекта, скрипты и зависимости.
11. core.test.js, evaluator.test.js, functions.test.js, format.test.js, helpers.test.js - тесты для основных модулей 