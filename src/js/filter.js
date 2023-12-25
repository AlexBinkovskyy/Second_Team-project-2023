import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
import { setNewFilterParams } from './localStorage';
import { getProdByQuery } from './query';
import { getProdByParams } from './query';
import { renderProductList } from './product-list';
import { createEmptyMarkup } from './product-list';

const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#categories');
filterForm.elements.filterCategories.addEventListener('change', proceedSelect);
filterForm.elements.filterMethod.addEventListener('change', proceedFilter);

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
  const { filterInput, filterCategories } = event.target.elements;
  proceedInput(filterInput, filterCategories);
}

function proceedInput(filterInput, filterCategories) {
  if (!filterInput.value.trim().length) {
    setDefaultFilterParams();
    checkFilterParams();
    getProdByParams();
    filterForm.reset();
  } else if (filterInput.value.trim()) {
    filterParams.keyword = filterInput.value.trim();
    if (filterCategories.value !== '') {
      filterParams.category = filterCategories.value;
    }
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        console.log(resp);
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err));
  } else if (filterCategories.value) {
    filterParams.category = filterCategories.value.trim();
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err));
  }
}

function proceedSelect(event) {
  event.preventDefault();
  if (event.target.value === 'Show all') {
    getProdByParams();
    filterForm.reset();
  }
  filterParams.category = event.target.value.replaceAll(' ', '_');
  setNewFilterParams(filterParams);
  getProdByQuery(getFilterParams())
    .then(resp => {
      if (resp.data.results.length) {
        renderProductList(resp.data);
      } else if (
        !Array.isArray(resp.data.results) ||
        !resp.data.results.length
      ) {
        createEmptyMarkup();
        return;
      }
    })
    .catch(err => console.log(err));
}

function proceedFilter(event) {
  event.preventDefault();
  if (event.target.value === 'A_to_Z' || event.target.value === 'Z_to_A') {
    event.target.value === 'A_to_Z'
      ? (filterParams.byABC = true)
      : (filterParams.byABC = false);
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err));
    return;
  } else if (
    event.target.value === 'Cheap' ||
    event.target.value === 'Expensive'
  ) {
    event.target.value === 'Cheap'
      ? (filterParams.byPrice = true)
      : (filterParams.byPrice = false);
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err));
    return;
  } else if (
    event.target.value === 'Popular' ||
    event.target.value === 'Not_popular'
  ) {
    event.target.value === 'Not_popular'
      ? (filterParams.byPopularity = true)
      : (filterParams.byPopularity = false);
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err));
    return;
  } else if (event.target.value === 'Show_all') {
    setDefaultFilterParams();
    return;
  }
}
