import axios from 'axios';
import references from './references';

// AxiosQuery
const params = {};

let page = 1;
let limitPerPage = 6;
let Id = null;

export async function getProdByParams() {
  if (window.innerWidth >= 1440) {
    limitPerPage = 9;
  } else if (window.innerWidth >= 768) {
    limitPerPage = 8;
  } else {
    limitPerPage = 6;
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
  keyword,
  category,
  byABC,
  byPrice,
  byPopularity,
  page = 1,
  limit = 6,
}) {
  let query = `https://food-boutique.b.goit.study/api/products?`;
  if (keyword) {
    query += `keyword=${keyword}&`;
  }
  if (category) {
    query += `category=${category}&`;
  }
  if (!!~byABC) {
    const temp = query.indexOf('by')
    query= query.replace(temp)
    query +=`&byABC=${byABC}`;
  }
  if (!!~byPrice) {
    query += `byPrice=${byPrice}&`;
  }
  if (!!~byPopularity) {
    query += `byPopularity=${byPopularity}&`;
  }
  query += `page=${page}&limit=${limit}`;
  console.log(query);
  return await axios(query);
}

// export async function sendSubscription(data) {
//   return (await axios.post(`${references.SECOND_URL}`))
// }
