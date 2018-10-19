# NodeJSChat
NodeJS chat application by Yury Kabernik-Berazouski and Aleksandr Odinec

## Запуск сервера чата

1. Установить глобально на машину рекоммендуемую версию NodeJs: https://nodejs.org/en/ .
2. Запустите командную строку CMD или PowerShell и перейти в директорию(папку) где размещен сервер (файл app.js).
3. Выполните команду ```npm install``` для обновления необнодимых для работы чата библиотек.
4. Ввести команду ``` npm start ```, должно быть виведено сообщение:
```
> node-jschat@0.0.0 start D:\Visual Studio Projects\NodeJS\JSChat\NodeJSChat\NodeJSChat
> node app
```
5. В браузере можно получить доступ к чату по адресу http://localhost:3000/ 
6. В CMD или PowerShell при каждом запросе к чату долен логгироваться путь и статус http запросов:
``` 
GET / 304 583.864 ms - -
GET /stylesheets/main.css 304 2.044 ms - -
GET / 304 17.568 ms - -
GET /stylesheets/main.css 304 0.654 ms - -
GET / 304 12.538 ms - -
GET /stylesheets/main.css 304 0.851 ms - -
```
7. Для его отключения, воспользуйтесь в терминале сочетанием клавишь ```CTRL+C```
8. В появившемся сообщении выберите опцию ```y``` 
```Terminate batch job (Y/N)?```

### Наслаждайтесь!


## Запуск тестов

Предварительно, в дериктории с чатом, выполните комманду:
```
npm install
```

1. Запускаются тесты по команде ```npm test```.
2. После выполнения тестов, в консоли должны отображаться результаты тестов(их состояния и причина ошибки). Например так: 
```

> chat-server@0.0.0 test D:\Visual Studio Projects\NodeJS\NodeJsServer\ChatServer\ChatServer
> mocha tests --watch

  Basic Mocha String Test
    1) should return number of charachters in a string
    √ should return first charachter of the string

  1 passing (14ms)
  1 failing

  1) Basic Mocha String Test
       should return number of charachters in a string:

      AssertionError [ERR_ASSERTION]: 5 == 4
      + expected - actual

      -5
      +4

      at Context.<anonymous> (tests\firsttest-test.js:6:16)
```
3. Для выхода из режима тестирования, воспользуйтесь в терминале сочетанием клавишь ```CTRL+C```
4. В появившемся сообщении выберите опцию ```y``` 
```Terminate batch job (Y/N)?```

### Тестируйте на здоровье!

## Контактные данные
Email: kobernykbeljr@gmail.com
