import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
import { setNewFilterParams } from './localStorage';
import { getProdByQuery } from './query';
const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#categories');
const optionSelect = document.querySelector('.js-option');

let filterParams = !getFilterParams()
  ? setDefaultFilterParams()
  : getFilterParams();

export function renderFilterSelect(data) {
  filterSelectCategories.insertAdjacentHTML('afterbegin', markup(data));
}

function markup(arr) {
  const selects = arr.map(
    categorie => `
    <option value="${categorie}" class="js-option">${categorie}</option>
    `
  );
  selects.unshift('<option value="" disabled selected>Categories</option>');
  return selects.join('');
}

function onSubmit(event) {
  event.preventDefault();
  const { filterInput, filterCategories, filterMethod } = event.target.elements;

  proceedInput(filterInput);

  proceedSelectCategorie(filterCategories);
}

function proceedInput(filterInput) {
  if (filterInput.value.trim()) {
    filterParams.keyword = `${filterInput.value.trim()}`;
    setNewFilterParams(filterParams);
  } else {
    setDefaultFilterParams();
  }
}

function proceedSelectCategorie(filterCategories) {
  if (filterCategories.value !== '') {
    filterParams.category = `${filterCategories.value}`;
}
setNewFilterParams(filterParams);
}

// some
