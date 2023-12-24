export function setupSubscriptionForm() {
  const form = document.querySelector('.subscription-form');
  const emailInput = document.querySelector('.footer-form-input');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Будь ласка, введіть коректну адресу електронної пошти.');
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
          return response.json();
        } else if (response.status === 409) {
          throw new Error('Підписка вже існує');
        } else {
          throw new Error('Щось пішло не так. Спробуйте пізніше.');
        }
      })
      .then(data => {
        alert(data.message);
        emailInput.value = '';
      })
      .catch(error => {
        alert(error.message);
      });
  });
}
