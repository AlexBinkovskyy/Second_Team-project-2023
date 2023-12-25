import axios from 'axios';
import references from './references';

// AxiosQuery
const params = {};

let page = 3;
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
  return await axios(
    `${references.MAIN_URL}/${references.popular}?limit=5`
  );

}

export async function getProdByDiscount() {
  return await axios(`${references.MAIN_URL}/${references.discount}`);
}

export async function getProdByID() {
  return await axios(`${references.MAIN_URL}/${Id}`);
}


export async function getProdByCategories() {
  return (await axios(`${references.MAIN_URL}/${references.categories}`));
}

export async function getProdByQuery(keyword, category, page=1, limit=6) {
  return (await axios(`${references.MAIN_URL}?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`));
}

