import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
import { setNewFilterParams } from './localStorage';
import { getProdByQuery } from './query';
const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#categories');
const optionSelect = document.querySelector('.js-option');
filterForm.elements.filterCategories.addEventListener('change', proceedSelect);

let filterParams;

function checkFilterParams() {
  filterParams = getFilterParams()
    ? getFilterParams()
    : setDefaultFilterParams();
}

checkFilterParams();

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
  const {
    filterInput,
    filterCategories,
    filterMethod = 'A-Z',
  } = event.target.elements;
  proceedInput(filterInput, filterCategories);
}

function proceedInput(filterInput, filterCategories) {
  if (!filterInput.value.trim().length) {
    filterForm.reset();
    setDefaultFilterParams();
    checkFilterParams();
  } else if (filterInput.value.trim()) {
    filterParams.keyword = filterInput.value.trim();
    if (filterCategories.value !== '') {
      filterParams.category = filterCategories.value;
    }
    setNewFilterParams(filterParams);
  } else if (filterCategories.value) {
    filterParams.category = filterCategories.value.trim();
    setNewFilterParams(filterParams);
  }
}

function proceedSelect(event) {
  event.preventDefault();
  console.log(event.target.value);
  filterParams.category = event.target.value;
  setNewFilterParams(filterParams);
}
