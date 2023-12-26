import { handleSubscriptionError } from './query.js';

const subscriptionForm = document.querySelector('.subscription-form');

subscriptionForm.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(subscriptionForm);
  const email = formData.get('email');

  try {
    const response = await fetch(
      'https://food-boutique.b.goit.study/api/subscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    const responseData = await response.json();

    if (response.ok) {
      // Ваш код на випадок успішної відповіді від сервера
      console.log('Subscription successful!');
    } else {
      // Обробка помилок при неуспішній відповіді від сервера
      handleSubscriptionError(response.status, responseData.message);
    }
  } catch (error) {
    console.error('Error occurred:', error);
    // Якщо виникає помилка під час взаємодії з сервером
    handleSubscriptionError(500, 'Server error');
  }
});

// Функція для показу/приховання модального вікна
export function toggleModal() {
  const modalBackdrop = document.querySelector('.backdrop');
  modalBackdrop.classList.toggle('is-hidden');
}
