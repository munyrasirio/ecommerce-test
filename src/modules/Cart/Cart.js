import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, resetCart, actions }  from '../../app/cartSlice';

import CartView from './CartView';

export default function Cart(props) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [ showSuccessModal, setSuccessModal ] = useState(false);
  const [ showEmptyModal, setEmptyModal ] = useState(false);

  const checkout = () => {
    setSuccessModal(true)
  }
  
  const closeSuccessModal = () => {
    setSuccessModal(false)
    dispatch(resetCart())
    props.history.push("/");
  }

  const closeEmptyModal = () => {
    setEmptyModal(false)
    props.history.push("/");
  }

  const decrementCart = product => {
    dispatch(updateCart({product, action: actions.decrement}))
  }

  const incrementCart = product => {
    dispatch(updateCart({product, action: actions.increment}));
  }

  const prevCartRef = useRef();
  useEffect(() => {    
    if (cart.items.length === 0 && prevCartRef.current > 0) {
      setEmptyModal(true)
    }
    
    prevCartRef.current = cart.items.length;
  }, [cart.items])

  return <CartView {...{
    cart, 
    incrementCart,
    decrementCart, 
    showSuccessModal, 
    closeSuccessModal, 
    showEmptyModal, 
    closeEmptyModal, 
    checkout 
  }} />
}