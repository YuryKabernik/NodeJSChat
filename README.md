# NodeJSChat
NodeJS chat application by Yury Kabernik-Berazouski and Aleksandr Odinec

## Запуск сервера чата

1. Установить глобально на машину рекоммендуемую версию NodeJs: https://nodejs.org/en/ .
2. Запустите коммандную строку CMD или PowerShell и перейти в директорию(папку) где размещен сервер (файл app.js)
3. Ввести комманду npm start, должно быть виведено сообщение:
```
> node-jschat@0.0.0 start D:\Visual Studio Projects\NodeJS\JSChat\NodeJSChat\NodeJSChat
> node app
```
4. В браузере можно получить доступ к чату по адресу http://localhost:3000/ 
5. В CMD или PowerShell при каждом запросе к чату долен логгироваться путь и статус http запросов:
``` 
GET / 304 583.864 ms - -
GET /stylesheets/main.css 304 2.044 ms - -
GET / 304 17.568 ms - -
GET /stylesheets/main.css 304 0.654 ms - -
GET / 304 12.538 ms - -
GET /stylesheets/main.css 304 0.851 ms - -
```

### Наслаждайтесь!
