let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

// Добавьте обработчик включения тёмной темы сюда
darkThemeButton.onclick = function() {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}

lightThemeButton.onclick = function () {
  // код переключения цвета темы
  document.body.classList.remove('dark');
  lightThemeButton.classList.add('active');
  darkThemeButton.classList.remove('active');
};

sansSerifFontButton.onclick = function () {
  // код переключения шрифта
  document.body.classList.remove('serif');
  sansSerifFontButton.classList.add('active');
  serifFontButton.classList.remove('active');
};

serifFontButton.onclick = function () {
  // код переключения шрифта
  document.body.classList.add('serif');
  serifFontButton.classList.add('active');
  sansSerifFontButton.classList.remove('active');
};


let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}


/* Элементы кнопок-переключателей раскладки */
let listViewButton = document.querySelector('.card-view-button-list');
let gridViewButton = document.querySelector('.card-view-button-grid');

/* Элемент списка карточек */
let cardsList = document.querySelector('.cards');

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  listViewButton.classList.add('active');
  gridViewButton.classList.remove('active');
};

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  listViewButton.classList.remove('active');
  gridViewButton.classList.add('active');
};



let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');



for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('..preview-list a .active');
  currentActive.classList.remove('active');
  activeImage.classList.add('active');
};
}