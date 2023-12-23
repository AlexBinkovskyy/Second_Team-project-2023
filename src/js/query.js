import axios from 'axios';
import references from './references';

// AxiosQuery
const params = {};

let queryString = '';
let page = 1;
let limitPerPage = 6;
let Id = null;

export async function getProdByParams() {
  if (window.innerWidth >= 1440) {
    console.log(1440);
    limitPerPage = 9;
  } else if (window.innerWidth >= 768) {
    console.log(768);
    limitPerPage = 8;
  } else {
    console.log(375);
    limitPerPage = 6;
  }
  return await axios(
    `${references.MAIN_URL}?page=${page}&limit=${limitPerPage}`
  );
}

export async function getProdByPopular() {
  return await axios(
    `${references.MAIN_URL}/${references.popular}?limit=${limitPerPage}`
  );
}

export async function getProdByDiscount() {
  return await axios(`${references.MAIN_URL}/${references.discount}`);
}

export async function getProdByID() {
  return await axios(`${references.MAIN_URL}/${Id}`);
}
