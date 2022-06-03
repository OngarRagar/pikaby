//Создаём переменную в которую положим кнопку меню.
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопки меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
    // Отменяяем стандартное поведение ссылки
    event.preventDefault();
    // Вешаем класс на меню когда кликнули по кнопки
    menu.classList.toggle('visible');
})