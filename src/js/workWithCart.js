import { getCartItems } from "./localStorage";

/* 
Додавання продукту до корзинки по ID
  Параметри:
    idProduct - Ід продукту                     <---  ( !!! Обовязково !!! )
    amount - кількість цього продукту в кошику  <---  ( Можна не вказувати )
  Використання:
    Коли спрацьовує обробник подій, при якому ви додаєте, товар до кошику
    викликаєте цю функцію

    addProductToCart( Ід товару тута 😊 )
==========================================================================*/
export function addProductToCart(idProduct, amount = 1) {
  const cartItems = getCartItems();

  if (!cartItems.products.find(({ id }) => id === idProduct)) {
    cartItems.products.push({ "id": idProduct, "amount": amount });
    localStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
  }
}

/* 
Видалення продукту з корзинки по ID
  Параметри:
    idProduct - Ід продукту                     <---  ( !!! Обовязково !!! )
  Використання:
    Передаєте id продукту в функцію, щоб видалити цей продукт
    
    removeProductFromCart( Ід товару тута 😊 )
==========================================================================*/
export function removeProductFromCart(idProduct) {
  const cartItems = getCartItems();

  // Знайти продукт у кошику за його ID
  const productIndex = cartItems.products.findIndex(({ id }) => id === idProduct);
  
  // Якщо продукт знайдено, видалити його з кошика
  if (productIndex !== -1) {
    cartItems.products.splice(productIndex, 1);
    localStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
  }
}

/* 
Видалення всіх продуктів з корзинки
  Параметри:
    Немає параметрів
  Використання:
    Коли ви хочете очистити кошик, викликаєте цю функцію

    removeAllProductsFromCart()
==========================================================================*/
export function removeAllProductsFromCart() {
  const cartItems = getCartItems();

  // Видалити всі продукти з кошика
  cartItems.products = [];
  localStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
}

/* 
Отримання кількості продуктів в кошику
  Параметри:
    Немає параметрів
==========================================================================*/
export function getTotalProductCount() {
  return getCartItems().products.length;
}

/* 
Встановлення значення поля email в інформації замовлення 
  Параметри: 
    email - Email користувача                       <— ( !!! Обовязково !!! ) 
==========================================================================*/
export function setEmailToOrderInfo(email) {
  const order = getCartItems();

  // Видалити всі продукти з кошика
  order.email = email;
  localStorage.setItem('shoppingCartItems', JSON.stringify(order));
}