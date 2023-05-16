[![Tests](https://github.com/EliseyE/react-mesto-api-full-gha/actions/workflows/tests.yml/badge.svg)](https://github.com/EliseyE/react-mesto-api-full-gha/actions/workflows/tests.yml)

![Проект: Mesto Russia (Fullstack, Deploy)](./readme-full.png)
#
 
Адрес репозитория: https://github.com/EliseyE/react-mesto-api-full-gha

## Ссылки на проект

IP 158.160.21.72

Frontend https://mesto.elisey.students.nomoredomains.monster

Backend https://api.mesto.elisey.students.nomoredomains.monster
#

## О проекте
Проект  Mesto - это  одностраничное веб-приложение, в котором можно делиться своими фотографиями с другими пользователями.

Приложение состоит из клиентской и серверной части.

Сервер обработывает запросы со стороны клиентской части приложения, например, той, что была разработана в предыдущих модулях обучения.

Веб-клиент взаимодействует с пользователем, визуализирует данные, принимает и отправляет запросы.

Проект создавался в рамках учебной программы Яндекс Практикум Веб-разработчик. Приложение разрабатывалось в несколько этапов:
* Вёрстка на HTML и CSS;
* Добавление алгоритмов веб-клиента приложения;
* Рефакторинг веб-клиента приложения на ООП и использование Webpack;
* Рефакторинг веб-клиента приложения на React;
* Добавление веб-клиенту приложения регистрации, аутенфикации, авторизации;
* Создание сервера на NodeJS и express;
* Добавление серверу фунций регистрации, аутенфикации, авторизации;
* Согласование серверной и клинтской частей и деплой проекта с настройкой сервера. 

## Технологии

* Web-Client: HTML, CSS, JavaScript, JSX, React

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

* Server: NodeJS and express, DB: MongoDB

    ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
    ![NodeJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![NodeJS](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Функциональность
Пользователь веб-приложения может:
* Зарегистрироваться;
* Авторизоваться;
* Просматривать фотографии других пользователей;
* Лайкать фотографии;
* Добавлять и удалять свои фотографии;
* При закрытии страницы авторизация остаётся активной, можно вернуться без входа в аккаунт, а по неоходимости выйти;
* Предусмотрена валидация, обработка запросов и ошибок.


## Планы
Продолжить разработку: рефакторинг кода в целях улучшения масштабируемости.