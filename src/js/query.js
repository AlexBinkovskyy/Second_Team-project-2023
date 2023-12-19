import axios from 'axios';
import references from './references';

// AxiosQuery
const params = {};

let queryString = '';
let page = 1;
let limitPerPage = 6;
let Id = null;

export async function getProdByParams() {
  return (await axios(`${references.MAIN_URL}?page=${page}&limit=${limitPerPage}`));
}

export async function getProdByPopular() {
  return (await axios(`${references.MAIN_URL}/${references.popular}?limit=${limitPerPage}`));
}

export async function getProdByDiscount() {
  return (await axios(`${references.MAIN_URL}/${references.discount}`));
}

export async function getProdByID() {
  return (await axios(`${references.MAIN_URL}/${Id}`));
}

