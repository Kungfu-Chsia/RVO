
// ** burger **//

const burgerToggle = document.querySelector('.page-header__toggle');

const changeToggle = () => {
  const burgerMenu = document.querySelector('.page-header');

  if (burgerMenu !== null && burgerMenu.classList.contains('page-header--closed')) {
    burgerMenu.classList.add('page-header--opened');
    burgerMenu.classList.remove('page-header--closed');
  } else {
    burgerMenu.classList.remove('page-header--opened');
    burgerMenu.classList.add('page-header--closed');
  }
};

burgerToggle.addEventListener('click', changeToggle);

// *menu *//
const burgerMenuItemList = document.querySelectorAll('.page-header__item');
const burgerMenu = document.querySelector('.page-header');

const burgerMenuItemClick = () => {

  if (burgerMenu !== null && !burgerMenu.classList.contains('page-header--opened')) {
    burgerMenu.classList.remove('page-header--closed');
    burgerMenu.classList.add('page-header--opened');
  }

};

burgerMenuItemList.forEach((btn) => {
  btn.addEventListener('click', burgerMenuItemClick);
});
