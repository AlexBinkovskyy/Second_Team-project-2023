import { getFilterParams } from './localStorage';
import { setDefaultFilterParams } from './localStorage';
import { setNewFilterParams } from './localStorage';
import { getProdByQuery } from './query';
import { getProdByParams } from './query';
import { renderProductList } from './product-list';
import { createEmptyMarkup } from './product-list';
import { updateCartBtns } from './main';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, {});

export const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', onSubmit);
const filterSelectCategories = document.querySelector('#single');
filterForm.elements.filterCategories.addEventListener('change', proceedSelect);
filterForm.elements.filterMethod.addEventListener('change', proceedFilter);

let filterParams;

export function checkFilterParams() {
  if (!getFilterParams()) {
    setDefaultFilterParams();
  } else {
    filterParams = getFilterParams();
    if (filterParams.keyword !== null) {
      filterForm.filterInput.value = filterParams.keyword;
    }
  }
}

checkFilterParams();

getProdByQuery(getFilterParams()).then(
  ({ data, data: { perPage, totalPages } }) => {
    if (data.results.length) {
      renderProductList(data);
      updateCartBtns();
      const container = document.getElementById('tui-pagination-container');
      const instance = new Pagination(container, {
        totalItems: perPage * totalPages,
        itemsPerPage: perPage,
        visiblePages: 5,
        centerAlign: true,
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',

          moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
          moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
        },
      });

      instance.on('beforeMove', async event => {
        const newPage = event.page;
        try {
          const { data: newData } = await getProdByQuery({
            page: newPage,
            limitPerPage: perPage,
          });
          renderProductList(newData);
          updateCartBtns();
        } catch (err) {
          console.log(err);
        }
      });
    } else if (!Array.isArray(data.results) || !data.results.length) {
      createEmptyMarkup();
      return;
    }
  }
);

export function renderFilterSelect(data) {
  filterSelectCategories.innerHTML = markup(data);
  if (filterParams.category !== null) {
    const opt = filterForm.filterCategories.options;
    console.log('5', opt);
    for (const option of opt) {
      if (
        option.value.replaceAll(' ', '_').replaceAll('&', '%26') ===
        filterParams.category
      ) {
        option.selected = true;
        break;
      }
    }
  }
}

function markup(arr) {
  const selects = arr.map(
    categorie => `
    <option value="${categorie}" class="js-option">${categorie}</option>
    `
  );
  selects.unshift(
    '<option value="" class="js-option" disabled selected>Categories</option>'
  );
  selects.push('<option value="Show all" class="js-option">Show all</option>');
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
    getProdByParams()
      .then(({ data }) => {
        renderProductList(data);
      })
      .catch(error => console.log(error));
    filterForm.reset();
  } else if (filterInput.value.trim()) {
    filterParams.keyword = filterInput.value.trim();
    if (filterCategories.value !== '') {
      filterParams.category = filterCategories.value
        .replaceAll(' ', '_')
        .replaceAll('&', '%26');
    }
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        console.log(resp);
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
    setDefaultFilterParams();
    filterForm.reset();
    getProdByParams()
      .then(({ data }) => {
        renderProductList(data);
      })
      .catch(error => console.log(error));
    filterForm.reset();
  }
  filterParams.category = event.target.value
    .replaceAll(' ', '_')
    .replaceAll('&', '%26');
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
  if (event.target.value === 'Show_all') {
    setDefaultFilterParams();
    checkFilterParams();
    getProdByParams()
      .then(({ data }) => {
        renderProductList(data);
      })
      .catch(error => console.log(error));
    filterForm.reset();
  }
  if (event.target.value === 'A_to_Z' || event.target.value === 'Z_to_A') {
    event.target.value === 'A_to_Z'
      ? (filterParams.byABC = true)
      : (filterParams.byABC = false);
    filterParams.byPrice = null;
    filterParams.byPopularity = null;
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          createEmptyMarkup();
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
    filterParams.byABC = null;
    filterParams.byPopularity = null;
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          createEmptyMarkup();
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
    filterParams.byABC = null;
    filterParams.byPrice = null;
    setNewFilterParams(filterParams);
    getProdByQuery(getFilterParams())
      .then(resp => {
        if (resp.data.results.length) {
          renderProductList(resp.data);
        } else {
          createEmptyMarkup();
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
