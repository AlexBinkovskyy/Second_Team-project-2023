import axios from 'axios';
import references from './references';

let page = 1;
let limitPerPage = 6;

export async function getProdByParams() {
  // if (window.innerWidth >= 1440) {
  //   limitPerPage = 9;
  // } else if (window.innerWidth >= 768) {
  //   limitPerPage = 8;
  // } else {
  //   limitPerPage = 6;
  // }

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
