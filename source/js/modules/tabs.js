const initTabs = function () {

  const tabs = document.querySelector('.abonements__tabs');
  const tabButton = document.querySelectorAll('.js-btn');
  const contents = document.querySelectorAll('.abonements__wrap');

  tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {

        btn.classList.remove('abonements__tabs-btn--current');
      });
      e.target.classList.add('abonements__tabs-btn--current');

      contents.forEach((content) => {
        content.classList.remove('abonements__item--current');
        content.classList.add('abonements__item-shown');

      });

      const element = document.getElementById(id);
      element.classList.add('abonements__item--current');
      element.classList.remove('abonements__item-shown');

    }
  };

};
export default initTabs;
