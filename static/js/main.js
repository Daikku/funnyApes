//<==================Смена языка и свойство selected==================>

$(".item-lang").click(function() {
  $(".item-lang").removeClass("active")
  $(this).addClass("active")
})

//<===================================================================>

//<==============Скрытие и показ header`а при прокрутке===============>

$(document).ready(() => { // DOM готов к взаимодейтсвию

  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = $('.header') // находим header и записываем в константу

    let prevScroll = $(window).scrollTop() // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    $(window).scroll(() => { // при прокрутке страницы

      currentScroll = $(window).scrollTop() // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.hasClass('header_hidden') // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.addClass('header_hidden') // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.removeClass('header_hidden') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })

  }

  onScrollHeader() // вызываем основную функцию onScrollHeader

})

//<===================================================================>

//<==============Плавное появление элементов страницы=================>
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
// появление заголовка
let elements = document.querySelectorAll('.text-header');
for (let elm of elements) {
  observer.observe(elm);
}
// появление описания
let elements2 = document.querySelectorAll('.description__back');
for (let elm of elements2) {
  observer.observe(elm);
}
// появление ссылки на коллекцию
let elements3 = document.querySelectorAll('.collection__wrap');
for (let elm of elements3) {
  observer.observe(elm);
}
// появление кнопки со ссылкой
let elements4 = document.querySelectorAll('.collection__button');
for (let elm of elements4) {
  observer.observe(elm);
}
// поялвение области с вопросами
let elements5 = document.querySelectorAll('.questions__wrap');
for (let elm of elements5) {
  observer.observe(elm);
}
let elements6 = document.querySelectorAll('.spoiler__title');
for (let elm of elements6) {
  observer.observe(elm);
}
// появление области с целями
let elements7 = document.querySelectorAll('.objectives__wrap');
for (let elm of elements7) {
  observer.observe(elm);
}
// появление области со ссылками
let elements8 = document.querySelectorAll('.socials-link__wrap');
for (let elm of elements8) {
  observer.observe(elm);
}
// появление области с обратной связью
let elements9 = document.querySelectorAll('.callback__wrap');
for (let elm of elements9) {
  observer.observe(elm);
}
// появление таймера
let elements10 = document.querySelectorAll('.timer__square');
for (let elm of elements10) {
  observer.observe(elm);
}
// появление таймера
let elements11 = document.querySelectorAll('.users-table__square');
for (let elm of elements11) {
  observer.observe(elm);
}

//<===================================================================>

//<=================Добавление анимаций для кнопки====================>

$('.collection__button_link').addClass("diagonal_swipe_left");
$('.header__button_link').addClass("diagonal_swipe_left");

//<===================================================================>

//<================Добавление кнопки прокрутки наверх=================>

$(document).ready(function(){

$(window).scroll(function(){
if ($(this).scrollTop() > 200) {
$('.scroll_up').fadeIn();
} else {
$('.scroll_up').fadeOut();
}
});

$('.scroll_up').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

});

//<===================================================================>