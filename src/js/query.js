import axios from 'axios';
import references from './references';

let page = 1;
let limitPerPage = 6;

export async function getProdByParams() {
  if (window.innerWidth >= 768) {
    limitPerPage = 8;
    if (window.innerWidth >= 1440) {
      limitPerPage = 9;
    }
  }

  return await axios(
    `${references.MAIN_URL}?page=${page}&limit=${limitPerPage}`
  );
}

export async function getProdByPopular() {
  return await axios(`${references.MAIN_URL}/${references.popular}?limit=5`);
}

export async function getProdByDiscount() {
  return await axios(`${references.MAIN_URL}/${references.discount}`);
}

export async function getProdByID(id) {
  return await axios(`${references.MAIN_URL}/${id}`);
}
export async function getProdByIDWithParams(id) {
  return await axios(`${references.MAIN_URL}/${id}`);
}

export async function getProdByCategories() {
  return await axios(`${references.MAIN_URL}/${references.categories}`);
}

export async function getProdByQuery({
  keyword = null,
  category = null,
  byABC = null,
  byPrice = null,
  byPopularity = null,
  page = 1,
  limitPerPage = 6,
}) {
  if (window.innerWidth >= 1440) {
    limitPerPage = 9;
  } else if (window.innerWidth >= 768) {
    limitPerPage = 8;
  }

  let query = `https://food-boutique.b.goit.study/api/products?`;
  if (keyword) {
    query += `keyword=${keyword}&`;
  }
  if (category) {
    query += `category=${category}&`;
  }
  if (byABC !== null) {
    query += `byABC=${byABC}&`;
  }
  if (byPrice !== null) {
    query += `byPrice=${byPrice}&`;
  }
  if (byPopularity !== null) {
    query += `byPopularity=${byPopularity}&`;
  }
  query += `page=${page}&limit=${limitPerPage}`;
  console.log(query);
  return await axios(query);
}

// export async function sendSubscription(data) {
//   return (await axios.post(`${references.SECOND_URL}`))
// }

// export async function sendSubscription(data) {
//   return (await axios.post(`${references.SECOND_URL}`))
// }

// export async function postOrder(order) {
//   console.log("--------------------");
//   console.log(order);
//   console.log(JSON.stringify(order));
//   return await axios.post(`https://food-boutique.b.goit.study/api/orders`, JSON.stringify(order), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
// }

// postOrder(JSON.stringify({
//   "email": "test@gmail.com",
//   "products": [
//     {
//       "productId": "640c2dd963a319ea671e383b",
//       "amount": 2
//     }
//   ]
// }));

// Функція для відправки даних з форми
export async function postData(email) {
  return axios.post(`${references.SECOND_URL}`, { email });
}

export async function postOrder(obj) {
  return await axios
  .post("https://food-boutique.b.goit.study/api/orders", obj)
  
}

// Функція для відображення модального вікна з текстом
function showModal(title, text) {
  const modalBackdrop = document.querySelector('[data-modal]');
  const modalTitle = modalBackdrop.querySelector('.modal-title');
  const modalText = modalBackdrop.querySelector('.modal-text');

  modalTitle.textContent = title;
  modalText.textContent = text;

  modalBackdrop.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal() {
  const modalBackdrop = document.querySelector('[data-modal]');
  modalBackdrop.classList.add('is-hidden');
}

// Отримання форми та додавання обробника подій для події submit
const form = document.getElementById('subscriptionForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Зупинити перезавантаження сторінки при натисканні кнопки

  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value; // Отримання значення поля email

  postData(email)
    .then(response => {
      const responseData = response.data;
      showModal(
        'Thanks for subscribing for new products',
        'We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.'
      );
    })
    .catch(error => {
      const errorMessage = error.response
        ? 'This email address has already been entered'
        : 'An error occurred';
      showModal(
        errorMessage,
        'You have already subscribed to our new products. Watch for offers at the mailing address.'
      );
    });
});

// Додавання обробника подій для закриття модального вікна при натисканні на кнопку закриття
const modalCloseBtn = document.querySelector('[data-modal-close]');
modalCloseBtn.addEventListener('click', closeModal);

// Додавання обробника подій для закриття модального вікна при натисканні клавіші "Esc"
document.addEventListener('keydown', function (event) {
  const modalBackdrop = document.querySelector('[data-modal]');
  if (
    event.key === 'Escape' &&
    !modalBackdrop.classList.contains('is-hidden')
  ) {
    closeModal();
  }
});
// Додавання обробника подій для закриття модального вікна при кліку поза модальним вікном
const modalBackdrop = document.querySelector('[data-modal]');
modalBackdrop.addEventListener('click', function (event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});
