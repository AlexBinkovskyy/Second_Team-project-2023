import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#categories');

export let filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};
setDefaultFilterParams();

export function renderFilterSelect(data) {
  filterSelectCategories.insertAdjacentHTML('beforeend', markup(data));
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
  
  const inputValue = filterInput.value.trim();
  inputValue !== '' ? (filterParams.keyword = `${inputValue}`) : setDefaultFilterParams();
  
  const categoriesValue = filterCategories.value;
  categoriesValue !== '' ? (filterParams.category = `${categoriesValue}`) : categoriesValue;
  console.log(filterParams);
}
