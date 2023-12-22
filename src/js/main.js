import { getProdByParams } from './query';
import { getProdByPopular } from './query';
import { getProdByDiscount } from './query';
import { getProdByID } from './query';


let filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};
localStorage.setItem(filterParams, JSON.stringify(filterParams));

// Product list
import { renderPoductList } from './product-list';
getProdByParams()
  .then(({ data }) => {
    renderPoductList(data);
  })
  .catch(error => console.log(error));
