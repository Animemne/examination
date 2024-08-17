const sectionTitle__Index = document.querySelector('.section-second h2');
if(window.location.href === 'http://127.0.0.1:5500/catalog_Hot-dishes.html' || sectionTitle__Index.textContent === 'Популярные  блюда') {
  /* сортировка */  
  const cards = document.querySelectorAll('.card');  
  const sort_priceIncreasing = document.querySelector('.block__hot-dishes-subblock-text');  
  let isAscending = true; // Переменная для отслеживания направления сортировки  
  sort_priceIncreasing.addEventListener('click', function() {  
    // Преобразуем NodeList в массив  
    const cardsArray = Array.from(cards);  
    console.log(cardsArray)
    // Добавляем класс 'hidden' для каждой карточки, чтобы начать анимацию исчезновения  
    cardsArray.forEach(function(card) {  
      card.classList.add('hidden');  
      });  
      // Подождите, пока анимация исчезновения завершится, прежде чем продолжать  
      setTimeout(function() {  
        // Сортируем массив карточек по атрибуту data-price  
        cardsArray.sort(function(a, b) {  
          const priceA = a.getAttribute('data-price');  
          const priceB = b.getAttribute('data-price');  
          if (isAscending) {  
            return priceA.localeCompare(priceB);  
          } else {  
            return priceB.localeCompare(priceA);  
          }  
        });  
        // Получаем родительский элемент карточек  
        const parent = cardsArray[0].parentNode;  
        // Удаляем все карточки из DOM (или просто очищаем контейнер)  
        parent.innerHTML = '';  
        // Добавляем отсортированные карточки обратно в DOM  
        cardsArray.forEach(function(card) {  
          parent.appendChild(card);  
        });  
        // После того, как карточки добавлены обратно, убираем класс 'hidden', чтобы сделать их видимыми  
        setTimeout(function() {  
          cardsArray.forEach(function(card) {  
            card.classList.remove('hidden');  
          });  
        }, 10); // Немного задержки, чтобы заставить анимацию сработать  
        // Меняем направление сортировки для следующего клика  
        isAscending = !isAscending;   
        console.log(isAscending)
        if (isAscending) {
          sort_priceIncreasing.classList.add('block__hot-dishes-subblock-text--activ')
        }
        else {
          sort_priceIncreasing.classList.remove('block__hot-dishes-subblock-text--activ')
        }
      }, 500); // Это время должно совпадать с продолжительностью анимации исчезновения  
    });
  };
const sectionTitle__HotDishes = document.querySelector('.block__hot-dishes-title');
if(window.location.href === 'http://127.0.0.1:5500/index.html' || sectionTitle__HotDishes.textContent === 'Горячие блюда') {
/* слайдер меню */
const windowWidth = window.innerWidth;
const swiper = new Swiper('.menu', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.heading__buttomNext',
      prevEl: '.heading__buttomPrev',
    },
    centeredSlides: false,
    watchOverflow: true,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoWidth: false,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      425: {
        slidesPerView: 2.25,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18.5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1300: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      }
    }
  });
  /* КНОПКА ПОКАЗАТЬ ЕЩЕ */
  const sectionSecond__button = document.querySelector('.section-second > button');
  const menu__PopularDishesCard = document.querySelectorAll('.menu__Popular-dishes .card');
  const menu__PopularDishes = document.querySelector('.menu__Popular-dishes');
  const container = document.querySelector('.container');
  windowHeight = window.innerHeight;
  windowHeight = (windowHeight + 100);
  if (windowHeight >= 800) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 750,
        behavior: 'smooth',
      });
    };
  }
  else if (windowHeight >= 700 && 800 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 650,
        behavior: 'smooth',
      });
    };
  }
  else if (windowHeight >= 600 && 700 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 550,
        behavior: 'smooth',
      });
  };
  }
  else if (windowHeight >= 500 && 600 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 450,
        behavior: 'smooth',
      });
    };
  }
  else if (windowHeight >= 400 && 500 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 350,
        behavior: 'smooth',
      });
    };
  }
  else if (windowHeight >= 300 && 400 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 250,
        behavior: 'smooth',
      });
    };
  }
  else if (windowHeight >= 200 && 300 <= windowHeight) {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 150,
        behavior: 'smooth',
      });
    };
  }
  else {
    function scrollToElement() {
      window.scroll({
        top: sectionSecond__button.offsetTop - 100,
        behavior: 'smooth',
      });
    };
  };
  sectionSecond__button.addEventListener('click', () => {
    if (!menu__PopularDishes.classList.contains('menu__PopularDishes--activ') ||
    menu__PopularDishes.style.height === '1261px' ||
    menu__PopularDishesCard[8].style.display === 'none' ||
    menu__PopularDishesCard[9].style.display === 'none' ||
    menu__PopularDishesCard[10].style.display === 'none' ||
    menu__PopularDishesCard[11].style.display === 'none' ||
    menu__PopularDishesCard[8].style.opacity === '0' ||
    menu__PopularDishesCard[9].style.opacity === '0' ||
    menu__PopularDishesCard[10].style.opacity === '0' ||
    menu__PopularDishesCard[11].style.opacity === '0' ) {
      sectionSecond__button.innerHTML = `Скрыть`
      menu__PopularDishes.classList.add('menu__PopularDishes--activ');
      menu__PopularDishesCard[8].style.display = 'flex'
      menu__PopularDishesCard[9].style.display = 'flex'
      menu__PopularDishesCard[10].style.display = 'flex'
      menu__PopularDishesCard[11].style.display = 'flex'
      setTimeout(() => {
        menu__PopularDishesCard[8].style.opacity = '1'
        menu__PopularDishesCard[9].style.opacity = '1'
        menu__PopularDishesCard[10].style.opacity = '1'
        menu__PopularDishesCard[11].style.opacity = '1'
      }, 250);
      setTimeout(() => {
        scrollToElement(sectionSecond__button);
      }, 750);
    }
    else {
      menu__PopularDishes.classList.remove('menu__PopularDishes--activ');
      setTimeout(() => {
        sectionSecond__button.innerHTML = `Показать еще`
        menu__PopularDishesCard[8].style.display = ''
        menu__PopularDishesCard[9].style.display = ''
        menu__PopularDishesCard[10].style.display = ''
        menu__PopularDishesCard[11].style.display = ''
      }, 500);
      setTimeout(() => {
        menu__PopularDishesCard[8].style.opacity = ''
        menu__PopularDishesCard[9].style.opacity = ''
        menu__PopularDishesCard[10].style.opacity = ''
        menu__PopularDishesCard[11].style.opacity = ''
      }, 250);
      setTimeout(() => {
        scrollToElement(sectionSecond__button);
      }, 750);
    }
  });
      
};
/* ИЗМЕНЕНИЕ ТЕКСТА В CARD #120 */
if (window.matchMedia('(max-width: 550px)').matches) {
const menu__gapHotDishes = document.querySelectorAll('.menu__gap-hot--dishes');
menu__gapHotDishes.forEach((menu__gapHotDishe)=>{
  const panel = menu__gapHotDishe.querySelectorAll('.card__title')
  panel[0].innerHTML = 'Котлета с <br> картофелем';
  });
};
/* аккардеон кнопки "горячее" */
const headers_div = document.querySelectorAll('.header > div:nth-of-type(1)');
const headerItemHot = document.querySelector('.header__item--hot');
const header_div = document.querySelector('.header > div:nth-of-type(1)')
const header = document.querySelector('.header');
const header__submenuPanel = header.querySelector('.header__submenu');
headers_div.forEach(function(header) {
  headerItemHot.addEventListener('click', function(event) {
    event.stopPropagation();
    if (headerItemHot.classList.contains('header__item--hot')) {
      headerItemHot.classList.toggle('header__item--hot--activ');
      header__submenuPanel.classList.toggle('header__submenu--activ');
      /*  */

    }
  });
  /* не рабочий фон при клике */
/*   header__submenuPanel.addEventListener('click', function(event) {
    event.preventDefault();
    if (headerItemHot.classList.contains('header__item--hot')) {
      headerItemHot.classList.toggle('header__item--hot--activ');
      header__submenuPanel.classList.toggle('header__submenu--activ');
    }
  });
  document.addEventListener('click', function(event) {
    if (!headerItemHot.contains(event.target) && headerItemHot.classList.contains('header__item--hot--activ')) {
      headerItemHot.classList.remove('header__item--hot--activ');
      header__submenuPanel.classList.remove('header__submenu--activ');
    }
  }); */
  /* ********************текст****************** */
  headerItemHot.addEventListener('click', function() {
    const panels = header.querySelectorAll('.header__submenu-link');
    panels.forEach(function(panel){
      setTimeout(function() {
        if (!panel.classList.contains('header__submenu-link--activ')) {
          panel.classList.add('header__submenu-link--activ');
        }
      }, 750);
      if (panel.classList.contains('header__submenu-link--activ')) {
        panel.classList.remove('header__submenu-link--activ');
      }
    });
  });
});
/* ТЕКСТ МЕНЮ ПОВОРОТ ФОТО */
const header__menuNavCategorys = document.querySelectorAll('.header__menuNav--category');
header__menuNavCategorys.forEach((header__menuNavCategory) => {
  header__menuNavCategory.addEventListener('mouseover', () => {
    const panel = header__menuNavCategory.querySelector('img');
    panel.style.transform = 'rotate(-45deg)'
  });
  header__menuNavCategory.addEventListener('mouseout', () => {
    const panel = header__menuNavCategory.querySelector('img');
    panel.style.transform = ''
  });
}); 
/* БУРГЕР МЕНЮ WIDTH < 1024PX */
const header__menuNavs = document.querySelectorAll('.header__menuNav');
const header__menuButton = document.querySelector('.header__menuButton');
header__menuNavs.forEach(function(header__menuNav){
  /* before */
  const header__menuBurger = document.querySelector('.header__menuBurger');
  header__menuButton.addEventListener('click', function(){
    header__menuBurger.classList.toggle('header__menuBurger--activ')
  });
  /* текст */
  const header__menuButtonText = document.querySelector('.header__menuButton--text')
  header__menuButton.addEventListener('click', function(){
    const main = document.querySelector('main')
    const headers = document.querySelector('.header');
    const headers_div = document.querySelector('.header > div:nth-of-type(1)');
    const container = document.querySelector('.container');
    header__menuButtonText.textContent;
    if (header__menuBurger.classList.contains('header__menuBurger--activ')){
      header__menuButtonText.innerHTML = `ЗАКРЫТЬ`;
      header__menuButtonText.style.color = '#FBD13E';
      main.style.filter = 'blur(10px)';
      headers.style.height = '100%'
      if(!headers.classList.contains('headers--activ')){
        headers.style.position = 'static';
        container.style.height = '824px';
        if(window.matchMedia("(max-width: 768px)").matches) {
          container.style.height = '1024px';
        }
      }
      if(headers.classList.contains('headers--activ')){
        document.body.style.overflowY = 'hidden';
        headers_div.style.top = '1%';
        if (window.matchMedia("(max-width: 768px)").matches){
          headers_div.style.top = '1%';
        }
      }
    }
    else {
      header__menuButtonText.innerHTML = `МЕНЮ`;
      header__menuButtonText.style.color = '#FFFFFF';
      headers.style.position = '';
      headers.style.height = '';
      main.style.filter = '';
      container.style.height = '';
      document.body.style.overflowY = 'scroll';
      headers_div.style.top = '';
    }
  });
  /* меню */
header__menuButton.addEventListener('click', function(){
  header__menuNav.classList.toggle('header__menuNav--activ')
});
  /* плавное появление */
  header__menuButton.addEventListener('click', function(){
    const panels = document.querySelectorAll('.header__menuNav > div');
    panels.forEach(function(panel){
      if (!header__menuBurger.classList.contains('header__menuBurger--activ')) {
        panel.classList.add('header__menuNav--peace');
      }
      setTimeout(function() { 
        if (header__menuBurger.classList.contains('header__menuBurger--activ')) {
          panel.classList.remove('header__menuNav--peace');
        }
      }, 750);
    });
  });
});
/* скролл меню навигации */
window.onscroll = function() {scrollFunction()};
const headers = document.querySelector('.header');
function scrollFunction() {
  const headers_div = document.querySelector('.header > div:nth-of-type(1)')
  const header__menuNav = document.querySelector('.header__menuNav');
  const imageUnion = document.querySelector('.section-first__block img:nth-of-type(1)')
  const header__submenuPanelActiv = header.querySelector('.header__submenu--activ');
  if (document.documentElement.scrollTop > 5 && !header__menuNav.classList.contains('header__menuNav--activ')) {
    headers.classList.add('headers--activ')
    headers_div.classList.add('headers_div--activ')
    headers_div.style.width = '95%';
    headers_div.style.height = '70px';
    headers_div.style.padding = '0px';
    if (window.location.href === 'https://66bf4c804e5489215b8ced09--jocular-hummingbird-7ee8d9.netlify.app/catalog_hot-dishes#' ||
       window.location.href === 'http://127.0.0.1:5500/index.html#') {
      imageUnion.style.top = '174px';
    }
    if(header__submenuPanel.classList.contains('.header__submenu--activ')) {
      header__submenuPanel.style.cssText = `
        position: fixed;
      `;
      header__submenuPanelActiv.style.cssText = `
        position: fixed;
        top: 90px;
        left: 495px;
      `;

    }
  } else {
    headers.classList.remove('headers--activ')
    headers_div.classList.remove('headers_div--activ')
    headers_div.style.width = '';
    headers_div.style.height = '';
    headers_div.style.padding = '';
    if (window.location.href === 'https://66bf4c804e5489215b8ced09--jocular-hummingbird-7ee8d9.netlify.app/catalog_hot-dishes#' ||
       window.location.href === 'http://127.0.0.1:5500/index.html#') {
      imageUnion.style.top = '';
    }
    if(header__submenuPanel.classList.contains('.header__submenu--activ')) {
      header__submenuPanel.style.cssText = ``;
      header__submenuPanelActiv.style.cssText = ``;

    }
  }
  setTimeout(()=>{
      const header__menuNav = document.querySelector('.header__menuNav');
      const headers_div = document.querySelector('.header > div:nth-of-type(1)')
      if (headers.classList.contains('headers--activ') || headers_div.classList.contains('headers_div--activ')){
        header__menuNav.classList.add('header__menuNav--activ-scroll')
      }else{
        header__menuNav.classList.remove('header__menuNav--activ-scroll')
      }
  },50);
};
setTimeout(()=>{
    const header__menuNav = document.querySelector('.header__menuNav');
    const headers_div = document.querySelector('.header > div:nth-of-type(1)')
    if (headers.classList.contains('headers--activ') || headers_div.classList.contains('headers_div--activ')){
      header__menuNav.classList.add('header__menuNav--activ-scroll')
    }else{
      header__menuNav.classList.remove('header__menuNav--activ-scroll')
    }
},50);
/* МЕНЮ СЛАЙД УДАЛЕНИЕ КАРТИНОК */
const backgroundSales = document.querySelectorAll('.background-saleSlaid');
if (window.matchMedia('(max-width: 550px)').matches) {
  backgroundSales.forEach((backgroundSale) => {
    const imgDeletfirst = backgroundSale.querySelector('.imgChangeFirst img:nth-of-type(2)')
    const imgDeletsecond = backgroundSale.querySelector('.imgChangeThird img:nth-of-type(2)')
    imgDeletfirst.remove();
    imgDeletsecond.remove();
    setTimeout(() => {
      const imgChangeFirst = backgroundSale.querySelector('.imgChangeFirst img:nth-of-type(1)')
      const imgChangeThird = backgroundSale.querySelector('.imgChangeThird img:nth-of-type(1)')
      imgChangeFirst.src = 'img/section1/main/Menu/30percent.svg';
      imgChangeThird.src = 'img/section1/main/Menu/20percent.svg';
    }, 250);
  }); 
};
