export function showModalMessage(message) {
  const modalText = document.querySelector('.modal-text');
  modalText.innerText = message;

  const backdrop = document.querySelector('[data-modal]');
  backdrop.classList.remove('is-hidden');

  const closeButton = document.querySelector('[data-modal-close]');
  closeButton.onclick = function () {
    backdrop.classList.add('is-hidden');
  };

  window.onclick = function (event) {
    if (event.target === backdrop) {
      backdrop.classList.add('is-hidden');
    }
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.subscription-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.footer-form-input').value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showModalMessage(
        'Будь ласка, введіть коректну адресу електронної пошти.'
      );
      return;
    }

    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(response => {
        if (response.status === 201) {
          showModalMessage('Успішна підписка на розсилку нових продуктів!');
        } else if (response.status === 409) {
          showModalMessage('Підписка вже існує. Ви вже підписані на розсилку.');
        } else {
          showModalMessage(
            'Виникла помилка під час підписки. Спробуйте ще раз.'
          );
        }
      })
      .catch(error => {
        showModalMessage('Виникла помилка під час підписки. Спробуйте ще раз.');
      });
  });
});
