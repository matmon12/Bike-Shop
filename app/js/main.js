
var SwiperProduct = new Swiper('.swiper-container-1', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
    container: 'swiper-object',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1320: {
      slidesPerView: 4,
      pagination: false,
    },
    1260: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
    820: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    }
  }
})

document.addEventListener("DOMContentLoaded", function () {
  const SelectHeader = document.querySelector('.header__select');
  const choises = new Choices(SelectHeader, {
    maxItemCount: 1,
    searchResultLimit: 5,
    renderChoiceLimit: 4,
    editItems: true,
    placeholderValue: 'Искать велосипед',
    searchPlaceholderValue: '',
    itemSelectText: '',
    noResultsText: 'Ничего не найдено',
    classNames: {
      listItems: 'header__list--multiple',
    },
    maxItemText: (maxItemCount) => {
      return `<a href='#' class='choice-link'>Перейти к товару<a>`;
    },
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const FilterBtnMini = document.querySelector('.filter-btn');
  const Filter = document.querySelector('.filter');
  FilterBtnMini.addEventListener('click', function(){
    Filter.classList.toggle('filter--active');
  })
})


document.addEventListener("DOMContentLoaded", function () {
  const FooterTitle = document.querySelectorAll('.footer__list-title');
  const FooterList = document.querySelectorAll('.footer__list');
    FooterTitle.forEach((item, index) => {
      item.addEventListener('click', function(){
        item.classList.toggle('footer__list-title--active');
        FooterList[index].classList.toggle('footer__list--active')
      })
    })

})

document.addEventListener("DOMContentLoaded", function () {
  const Menu = document.querySelector('.menu');
  const MenuList = document.querySelector('.header__bottom');
  const OverlayMenu = document.querySelector('.overlay');
  Menu.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('menu--active');
    MenuList.classList.toggle('header__bottom--active');
    OverlayMenu.classList.toggle('overlay--active');
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const CheckInput = document.querySelector('.header__list--multiple');
  const InputPlaceholder = document.querySelector('.choices__input--cloned');
  const observer = new MutationObserver(mutationList => {
    if (CheckInput.childElementCount > 0) {
      InputPlaceholder.setAttribute('placeholder', ' ');
    }
    else {
      InputPlaceholder.setAttribute('placeholder', 'Искать велосипед');
    }
  });

  observer.observe(CheckInput, { childList: true });
})



var SliderProductThumbs = new Swiper(".product-card__slider-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
});
var SliderProduct = new Swiper(".product-card__slider", {
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: SliderProductThumbs,
  },
});

const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.getElementById('range'); // Ищем слайдер
  const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
  const inputMax = document.getElementById('max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, { // инициализируем слайдер
    start: [20000, 100000], // устанавливаем начальные значения
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: { // устанавливаем минимальное и максимальное значения
      'min': 0,
      'max': 200000
    },
    step: 1, // шаг изменения значений
  }
  )

  range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
    Array.from(inputs).forEach(input => { input.value = input.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); });
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });

}
const init = () => {
  rangeSliderInit() // запускаем функцию инициализации слайдера
}
document.addEventListener('DOMContentLoaded', init)

const Pagination = document.querySelectorAll('.pagination__list-item');
const siblingsPagination = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
Pagination.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    siblingsPagination(item).forEach(function (el) {
      el.classList.remove('pagination__list-item--active');
    })
    this.classList.add('pagination__list-item--active');
  })
})
const FilterTitle = document.querySelectorAll('.filter__item-title');
FilterTitle.forEach(item => {
  item.addEventListener("click", function () {
    item.classList.toggle('filter__item-title--active');
    item.nextElementSibling.classList.toggle('filter__content--active');
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const Ratings = document.querySelectorAll('.rating__body');
  const ratingValue = document.querySelector('.rating__value');
  let value = Math.trunc(ratingValue.innerText);
  let mini = ratingValue.innerText % 1;

  for (let index = 0; index < value; index++) {
    Ratings[index].style.setProperty('--percent', '100%');
  }

  Ratings[value].style.setProperty('--percent', `${mini * 100}%`);
})

document.addEventListener("DOMContentLoaded", function () {
  const ProductBtn = document.querySelector('.product-card__btn');
  ProductBtn.addEventListener("click", function () {
    this.classList.toggle('product-card__btn--active');
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const FilterMore = document.querySelector('.filter__link');
  const FilterMoreList = document.querySelector('.filter__list-more');
  FilterMore.addEventListener("click", function () {
    FilterMoreList.classList.toggle('filter__list-more--active');
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const ModelBtn = document.querySelectorAll('.filter-more__btn');
  const ModelBox = document.querySelectorAll('.filter__more-box');
  const array2 = [];
  ModelBox.forEach((item, index) => {
    array2[index] = item.offsetHeight;
    item.style.height = 0;
  })
  ModelBtn.forEach((item, index) => {
    item.addEventListener("click", function () {
      if (ModelBox[index].offsetHeight === 0) {
        ModelBox[index].style.height = array2[index] + 'px';
        item.innerText = 'Скрыть';
      }
      else {
        array2[index] = ModelBox[index].offsetHeight;
        ModelBox[index].style.height = 0;
        item.innerText = 'Показать еще';
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const Promotion = document.querySelectorAll('.filter__checkbox-promotion');
  Promotion.forEach(item => {
    item.addEventListener("change", function () {
      if (item.checked) {
        item.parentNode.classList.toggle('filter__content-label--active');
      }
      else {
        item.parentNode.classList.toggle('filter__content-label--active');
      }
    })
    if (item.checked) {
      item.parentNode.classList.toggle('filter__content-label--active');
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const FilterBtn = document.querySelector('.filter__btn');
  FilterBtn.addEventListener("click", function (e) {
    e.preventDefault();
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const CatalogListBtn = document.querySelector('.catalog__btns-list');
  const CatalogItemBtn = document.querySelector('.catalog__btns-item');
  const CatalogInner = document.querySelector('.catalog__inner-list');
  const CatalogItem = CatalogInner.querySelectorAll('.product-slide');


  CatalogListBtn.addEventListener("click", function () {
    this.classList.add('catalog__btns--active');
    CatalogItemBtn.classList.remove('catalog__btns--active');
    CatalogItem.forEach(item => {
      item.classList.remove('product-slide__item');
    });
  })
  CatalogItemBtn.addEventListener("click", function () {
    this.classList.add('catalog__btns--active');
    CatalogListBtn.classList.remove('catalog__btns--active');
    CatalogItem.forEach(item => {
      item.classList.add('product-slide__item');
    });
  })
})

document.addEventListener("DOMContentLoaded", function () {
  var CategoryMore = document.querySelector('.category__btn');
  var CategoryBox = document.querySelectorAll('.category__list-item__more');
  CategoryMore.addEventListener("click", function (e) {
    e.preventDefault();
    CategoryBox.forEach(item => {
      item.classList.toggle('category__item-more--active');
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const SelectCatalog = document.querySelector('.select');
  const choises = new Choices(SelectCatalog, {
    searchEnabled: false,
    itemSelectText: ''
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const SelectFilter = new Choices('.filter__content-multi', {
    placeholder: true,
    placeholderValue: 'Ведите модель',
    itemSelectText: '',
    noResultsText: 'Ничего не найдено',
    noChoicesText: 'Ничего нет',
    position: 'bottom',
    classNames: {
      listItems: 'choices__list--new',
      list: 'choices__filter',
      containerOuter: 'model',
      containerInner: 'model__inner',
      input: 'model__input',
    },
  })

  const SelectFilterItem = document.querySelectorAll('#model');
  const array = [];
  SelectFilterItem.forEach((item, index) => {
    array[index] = item.children[1].innerText;
  })

  var List1 = document.querySelector('.choices__list--new');
  let prevNumberOfChildren = List1.children.length;

  const observer = new MutationObserver(mutationList => {
    const numberOfChildren = List1.children.length;

    if (numberOfChildren > prevNumberOfChildren) {
      count = List1.childElementCount;
      SelectFilterItem[count - 1].children[1].innerText = List1.children[count - 1].innerText;
      SelectFilterItem[count - 1].children[0].checked = true;
    }

    else if (numberOfChildren <= prevNumberOfChildren) {
      count = List1.childElementCount;
      SelectFilterItem[count].children[1].innerText = array[count];
      SelectFilterItem[count].children[0].checked = false;
    }

    prevNumberOfChildren = numberOfChildren;
  });

  observer.observe(List1, { childList: true });

})


var SwiperPicture = new Swiper('.swiper-container-2', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.picture-button-next',
    prevEl: '.picture-button-prev',
    container: 'swiper-container-2',
  },
})

const Tab = document.querySelectorAll('.tab');
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
Tab.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    siblings(item).forEach(function (el) {
      el.classList.remove('tab--active');
      document.querySelector(el.getAttribute('href')).classList.remove('tabs-content--active');
    })
    item.classList.add('tab--active');
    document.querySelector(item.getAttribute('href')).classList.add('tabs-content--active');
  })
})

const Heart = document.querySelectorAll('.product-slide__heart');
Heart.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle('product-slide__heart--active');
  })
})

const Check = document.querySelectorAll('.product-slide__not-available');
const CheckBtn = document.querySelectorAll('.product-slide__btn');
Check.forEach((item, index) => {
  item.querySelector('.product-slide__btn').disabled = true;
  item.querySelector('.product-slide__link').addEventListener("click", function (e) {
    e.preventDefault();
  })
})

var ListTitle = document.querySelectorAll('.answer__list-title');
ListTitle.forEach(item => {
  item.addEventListener("click", function () {
    item.classList.toggle('answer__list-title--active');
    item.nextElementSibling.classList.toggle('answer__list-text--active');
  })
})

const validation = new JustValidate('#form', {
  validateBeforeSubmitting: true,
  errorLabelStyle: {
    color: '#ee3022',
    lineHeight: '18px',
  },
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать больше 3 символов',

    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать меньше 15 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Email не правильный!',
    },
  ]);




  









