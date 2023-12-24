import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
import { setNewFilterParams } from './localStorage';
import { getProdByQuery } from './query';
const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#categories');
const optionSelect = document.querySelector('.js-option');
// optionSelect.addEventListener('change', onSubmit);

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

async function onSubmit(event) {
  event.preventDefault();
  const {
    filterInput,
    filterCategories,
    filterMethod = 'A-Z',
  } = event.target.elements;
  proceedInput(filterInput, filterCategories);
  await proceedSelectCategorie(filterCategories)
}

function proceedInput(filterInput, filterCategories) {
  if (filterInput.value.trim()) {
    filterParams.keyword = filterInput.value.trim();
    setNewFilterParams(filterParams);
  } else if (filterCategories.value) {
    filterParams.category = filterCategories.value.trim();
    setNewFilterParams(filterParams);
  } else if (!filterInput.value.trim().length) {
    console.log('kdjshfdhfjs', filterInput.value.trim().length);
    filterForm.reset();
    setDefaultFilterParams();
    checkFilterParams();
  }
}


function proceedSelectCategorie(filterCategories) {
  filterParams.category = filterCategories.value;
  setNewFilterParams(filterParams);
}

// function onSelect(event) {

//   console.log(event.target);
// }
