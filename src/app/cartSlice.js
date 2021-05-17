import { createSlice } from '@reduxjs/toolkit'

export const actions = {increment: 1, decrement: 0};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    total: 0
  },
  reducers: {    
    resetCart: state => {
      state.items = [];
      state.total = 0;
    },
    updateCart: (state, reduxAction) => {
      const { product, action } = reduxAction.payload;
      let items =state.items;
      const ifCartHasItem = items.some(item => item.id === product.id);

      const addNewItem = product => {
        const cartProduct = Object.assign({}, product);
        cartProduct.quantity = 1;
        cartProduct.total = cartProduct.price;
        items.push(cartProduct);
      }

      const findProduct = (product) => {
        return items.filter(item => ( item.id === product.id ))[0];
      }

      const removeItem = product => {
        items = items.filter(item => ( item.id !== product.id ));
      }

      const incrementItem = product => {
        const cartProduct = findProduct(product);
        cartProduct.quantity = cartProduct.quantity + 1;
        cartProduct.total = cartProduct.price * cartProduct.quantity;
      }

      const decrementItem = product => {
        const cartProduct = findProduct(product);
        cartProduct.quantity = cartProduct.quantity - 1;
        cartProduct.total = cartProduct.price * cartProduct.quantity;

        if (cartProduct.quantity === 0) {
          removeItem(cartProduct);
        }
      }

      if (ifCartHasItem) {
        action === actions.increment ? incrementItem(product) : decrementItem(product)
      } else {
        addNewItem(product);
      }

      let total = items.reduce(
        (total, product) => product.total + total
      ,0 );
      
      state.items = items;
      state.total = total;
    }    
  },
})

export const { resetCart, updateCart } = cartSlice.actions
export default cartSlice.reducer