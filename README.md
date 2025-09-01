# Калькулятор

## Task
Проект представляет собой веб-приложение «Калькулятор» с поддержкой базовых арифметических операций, процентов и переключения темы (светлая/тёмная).  

Ссылка на документ с заданием: 
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.cfna4so9wux2

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

1. src/js/ — JavaScript-модули:

index.js — точка входа, инициализация калькулятора и темы.
calculator.js — парсер и вычислитель выражений.
display.js — логика обновления дисплея калькулятора.
theme.js — переключение темы (светлая/тёмная).
utils.js — вспомогательные функции (форматирование чисел, математика).

2. src/styles/ — стили приложения:

main.scss — основной SCSS-файл.
main.css — скомпилированный CSS.

3. src/index.html — главная HTML-страница.
4. dist/ — папка для собранного проекта (создаётся после npm run build).
5. webpack.config.js — конфигурация Webpack.
6. .eslintrc.json — конфигурация ESLint.
7. package.json — метаданные проекта, скрипты и зависимости.