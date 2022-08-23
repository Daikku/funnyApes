//<==================Смена языка и свойство selected==================>

var url = window.location.href;
var urlsplit = url.split("/");
var lang = urlsplit[3]; // выбираем последнюю часть url
if (lang === 'en')
{
    document.querySelector("#lang__selector > option[selected]").removeAttribute("selected"); // снимаем selected с value=" "
    document.querySelector("#lang__selector > option[value='en/']").setAttribute("selected", "selected"); // ставим selected на value="en/"
}

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
//<===================================================================>

//<=================Добавление анимаций для кнопки====================>

$('.collection__button_link').addClass("light");
$('.header__button_link').addClass("light");

//<===================================================================>