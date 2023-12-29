import axios from 'axios';
import references from './references';
import crossClose from '../images/sprite.svg';
import fotoModal1 from '../images/modal-sbscr@1x-min.png';
import fotoModal2 from '../images/modal-sbscr@2x-min.png';

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
// footer sbscr start

//для відправки даних з форми
export async function postData(email) {
  return axios.post(`${references.SECOND_URL}`, { email });
}

export async function postOrder(obj) {
  return await axios.post('https://food-boutique.b.goit.study/api/orders', obj);
}

//для відображення модального вікна з текстом
function showModal(title, text) {
  const modalBackdrop = document.querySelector('[data-modal]');

  modalBackdrop.classList.remove('is-hidden');
}
const modalDiv = document.querySelector('.modal');

// Функція для закриття модального вікна
function closeModal() {
  const modalBackdrop = document.querySelector('[data-modal]');
  modalBackdrop.classList.add('is-hidden');
}

// Отримання форми та додавання обробника подій для події submit
const form = document.getElementById('subscriptionForm');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  postData(email)
    .then(response => {
      const responseData = response.data;
      if (response.status === 201) {
        showModal(goodModal());
        modalDiv.innerHTML = goodModal();
        //закриття модального вікна
        const modalCloseBtn = document.querySelector('[data-modal-close]');
        modalCloseBtn.addEventListener('click', closeModal);
      }
    })
    .catch(error => {
      const errorMessage = error.response;
      if (error.response.status === 409) {
        showModal(errModal());
        modalDiv.innerHTML = errModal();
        //закриття модального вікна
        const modalCloseBtn = document.querySelector('[data-modal-close]');
        modalCloseBtn.addEventListener('click', closeModal);
      }
    });
});

function goodModal() {
  return `
    <button class="modal-btn" type="button" data-modal-close>
      <svg class="modal-btn-icon" width="8" height="8">
        <use href="${crossClose}#icon-Cross_close"></use>
      </svg>
    </button>
    <div class="modal-poshition-content">
      <h2 class="modal-title">Thanks for subscribing for <span class="modal-title-span">new</span> products</h2>
      <p class="modal-text">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
    </div>
    <img
      class="modal-form-img"
      srcset="
        ${fotoModal1},
        ${fotoModal2}
      "
      src="${fotoModal1}"
      alt="What are we doing"
      width="360"
      />
      </div>
  `;
}
function errModal() {
  return `
    <button class="modal-btn" type="button" data-modal-close>
      <svg class="modal-btn-icon" width="8" height="8">
        <use href="${crossClose}#icon-Cross_close"></use>
      </svg>
    </button>
    <div class="modal-poshition-content">
      <h2 class="modal-title">This <span class="modal-title-span">email address</span> has already been entered</h2>
       <p class="modal-text">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

      </div>
  `;
}
//закриття модального вікна при натисканні клавіші "Esc"
document.addEventListener('keydown', function (event) {
  const modalBackdrop = document.querySelector('[data-modal]');
  if (
    event.key === 'Escape' &&
    !modalBackdrop.classList.contains('is-hidden')
  ) {
    closeModal();
  }
});
//закриття модального вікна при кліку поза модальним вікном
const modalBackdrop = document.querySelector('[data-modal]');
modalBackdrop.addEventListener('click', function (event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});
// footer sbscr end
