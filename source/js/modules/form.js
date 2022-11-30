// **  tel validation **//
const initForma = function () {
  const formContactsInput = document.getElementById('telephone');
  const contactsForm = document.getElementById('contacts-form');

  const checkNumber = () => {
    const minTitleName = 11;
    const maxTitleName = 11;

    const phoneMask = IMask(
        document.querySelector('.js-phone'), {
          mask: '+{7}(000)000-00-00',
        });


    const valueLength = phoneMask._unmaskedValue.length;
    if (valueLength < minTitleName) {
      formContactsInput.setCustomValidity(`Ещё ${minTitleName - valueLength} симв.`);
    } else if (valueLength > maxTitleName) {
      formContactsInput.setCustomValidity(`Удалите лишние ${valueLength - maxTitleName} симв.`);
    } else {
      formContactsInput.setCustomValidity('');
    }

    formContactsInput.reportValidity();
  };

  if (formContactsInput !== null) {
    formContactsInput.addEventListener('input', checkNumber);
  }


  //* *  name validation **//
  const formContactsInputName = document.getElementById('name');

  const checkName = () => {

    const minTitleName = 1;
    const maxTitleName = 45;

    const valueLength = formContactsInputName.value.length;

    formContactsInputName.setCustomValidity('');

    if (valueLength > 0 && valueLength < minTitleName) {
      formContactsInputName.setCustomValidity(`Ещё ${minTitleName - valueLength} симв.`);

    } else if (valueLength > maxTitleName) {
      formContactsInputName.setCustomValidity(`Удалите лишние ${valueLength - maxTitleName} симв.`);
    }

    if (valueLength > 0 && !/^[ A-Za-zА-Яа-яЁё]+$/.test(formContactsInputName.value)) {
      formContactsInputName.setCustomValidity('В имени должны быть только буквы');
    }

    formContactsInputName.reportValidity();
  };

  if (formContactsInputName !== null) {
    formContactsInputName.addEventListener('input', checkName);
  }

  const formContactsInputName2 = document.getElementById('namie');
  const checkNameModal = () => {

    const minTitleName = 1;
    const maxTitleName = 45;

    const valueLength = formContactsInputName2.value.length;

    formContactsInputName2.setCustomValidity('');

    if (valueLength > 0 && valueLength < minTitleName) {
      formContactsInputName2.setCustomValidity(`Ещё ${minTitleName - valueLength} симв.`);

    } else if (valueLength > maxTitleName) {
      formContactsInputName2.setCustomValidity(`Удалите лишние ${valueLength - maxTitleName} симв.`);
    }

    if (valueLength > 0 && !/^[ A-Za-zА-Яа-яЁё]+$/.test(formContactsInputName2.value)) {
      formContactsInputName2.setCustomValidity('В имени должны быть только буквы');
    }

    formContactsInputName2.reportValidity();

  };

  if (formContactsInputName2 !== null) {
    formContactsInputName2.addEventListener('input', checkNameModal);

  }


  // Сохранениe данных в localStorage

  function setLocalArg(event) {
    let currArg = event.path[0];
    localStorage.setItem(currArg.id, currArg.value);
  }

  document.querySelectorAll('input').forEach((inputElement) => {

    inputElement.value = localStorage.getItem(inputElement.id);
    inputElement.addEventListener('change', setLocalArg);
  });


  //  Отправка формы

  if (contactsForm) {
    const btnSubmit = (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      fetch(
          'https://echo.htmlacademy.ru/',
          {
            method: 'POST',
            body: formData,
          }
      );
      evt.target.reset();
    };
    contactsForm.addEventListener('submit', btnSubmit);
  }


};

export default initForma;
