export function handleSubscriptionError(statusCode, errorMessage) {
  const modalText = document.querySelector('.modal-text');
  modalText.textContent = `Error ${statusCode}: ${errorMessage}`;
  toggleModal();
}

export function toggleModal() {
  const modalBackdrop = document.querySelector('.backdrop');
  modalBackdrop.classList.toggle('is-hidden');
}

export function setupSubscriptionForm() {
  const subscriptionForm = document.querySelector('.subscription-form');

  subscriptionForm.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(subscriptionForm);
    const email = formData.get('email');

    try {
      const queryString = `https://food-boutique.b.goit.study/api/subscription?email=${email}`;
      const getDataResponse = await fetch(queryString, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (getDataResponse.ok) {
        const responseData = await getDataResponse.json();
        console.log('Data retrieved successfully:', responseData);
        processSubscriptionData(responseData);
      } else {
        const errorData = await getDataResponse.json();
        handleSubscriptionError(getDataResponse.status, errorData.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      handleSubscriptionError(500, 'Server error');
    }
  });
}
function processSubscriptionData(data) {
  // Ваші додаткові дії з отриманими даними
  // Наприклад, оновлення вмісту сторінки, виведення інформації тощо
  // Наприклад:
  const subscriptionInfoElement = document.querySelector('.subscription-info');
  if (subscriptionInfoElement) {
    subscriptionInfoElement.textContent = data.message;
  }
}
// async function post() {
//   return await axios.post(`${MAIN_URL}subscription`, {
//     email: 'email@gmail.com',
//   });
// }

// console.log(post());
