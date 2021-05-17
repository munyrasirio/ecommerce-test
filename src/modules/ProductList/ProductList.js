import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductListView from './ProductListView';
import { useCategories, useProducts } from './hooks';

import { updateCart, actions }  from '../../app/cartSlice';

export default function ProductList() {
  const [categories] = useCategories();
  const [category, setCategory, products, totalItems, page, limit, setPage] = useProducts({label: "Selecione uma categoria", value: 0});
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {}, [page, products, category])

  const incrementCart = product => {
    dispatch(updateCart({product, action: actions.increment}));
  }
  
  return <ProductListView { ...{ 
      products, 
      totalItems, 
      page, 
      limit, 
      setPage,
      categories, 
      category, 
      setCategory, 
      incrementCart, 
      actions, 
      counter: cart.items.length 
    }} />
}