import { getProdByParams } from './query';
import { getProdByPopular } from './query';
import { getProdByDiscount } from './query';
import { getProdByID } from './query';
import { getProdByCategories } from './query';
import { renderProductDiscount } from './discount';
import { renderProductList } from './product-list';
import { renderFilterSelect } from './filter';



getProdByDiscount()
  .then(({ data }) => {
    renderProductDiscount(data);
  })
  .catch(error => console.log(error));

getProdByParams()
  .then(({ data }) => {
    renderProductList(data);
  })
  .catch(error => console.log(error));

getProdByCategories()
  .then(({ data }) => {
    renderFilterSelect(data);
  })
  .catch(error => console.log(error));
