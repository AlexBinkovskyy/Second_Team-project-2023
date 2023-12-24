import { getProdByParams } from './query';
import { getProdByPopular } from './query';
import { getProdByDiscount } from './query';
import { getProdByID } from './query';
import { getProdByCategories } from './query';
import { renderPopularProduct } from './popular-product';
import { renderProductDiscount } from './discount';
import { renderProductList } from './product-list';
import { renderFilterSelect } from './filter';
import { setupSubscriptionForm } from './footer.js';
import { pagination } from './pagination.js';

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

getProdByPopular()
  .then(({ data }) => {
    renderPopularProduct(data);
  })
  .catch(error => console.log(error));

getProdByCategories()
  .then(({ data }) => {
    renderFilterSelect((data.toString().replaceAll('_', ' ')).split(','));
  })
  .catch(error => console.log(error));

setupSubscriptionForm();
