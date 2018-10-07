React-router.

Сегодня поговорим про роутер. Это такая штука, которая позволит нам по определенному адресу отобразить нужную нам страницу. А создадим мы трехстраничное приложение на реакте. Страницы будут такие - главная, контакты и блог. Создадим новое приложение, как мы делали в позапрошлом уроке и перейдем в нужную директорию:
```
create-react-app blog
cd blog
```
Тут можете почитать про роутер на русском - https://habr.com/post/329996/. А пока - устанавливаем npm-пакеты:
```
npm install --save react-router-dom
```
Флаг --save означает, что пакет надо не только скачать, но и добавить ссылку на него в package.json. Проверьте файлик package.json до и после установки - должна появиться новая строчка в засисимостях. Роутер должен где-то сохранять историю - чтобы можно было переходить по страницам туда-сюда и новые странички рисовались. Для этого используется такая штука как BrowserRouter. Но сначала немного отвлечемся...
В приложениях на reactjs вся отрисовка начинается с определенного файла. В нашем конкретном случае это /src/index.js. То есть мы будем смотреть как и что работает начиная с определенного файла и продвигаясь вглубь. То есть открываем index.js и смотрим, что там есть(я удалил serviceWorker, потому что он нам сейчас не нужен)
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
Тут мы вначале подтягиваем библиотеку с реактом. Для понимания процесса можно представить, что мы физически ищем файл по пути 'react' и копируем его вместо всей строки `import React from 'react';` (но это очень грубое приближение). То же самое для остальных строчек с импортом. Но тут опять же, мы просто импорты добавили, но пока мы из них явно что-то не вызовем - то ничего не отобразится. Именно для этого служит строчка `ReactDOM.render(<App />, document.getElementById('root'));`. Тут мы явно вызываем функцию ReactDOM.render (примерно как мы в стандартном джаваскрипте вызывали root.appendChild(elem) - и только после этого элемент отображался на странице).

Итак, нам надо добавить роутер - для этого оборачиваем наш тег `<App/>` в этот самый роутер. Получится так - 

```
// здесь старые импорты, не меняем, они нужны.
// А потом идет такое:
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```
Запускаем приложение командой `npm start`. Все должно работать как раньше, но используя роутер. В следующем уроке мы добавим несколько страниц и навигацию между ними.

Задание - повторить все пункты статьи и выложить исходники на гитхаб. Этим приложением мы будем ближайшее время заниматься, на практике получая новые знания.