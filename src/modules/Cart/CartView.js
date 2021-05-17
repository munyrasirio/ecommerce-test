import React, { Fragment } from 'react';
import Modal from "./Modal/ModalView";
import CartList from "./CarList/CartListView";
import EmptyCart from "./EmptyCart/EmptyCartView";

export default function CartView ({
  cart, 
  incrementCart,
  decrementCart,
  showSuccessModal, 
  closeSuccessModal, 
  showEmptyModal, 
  closeEmptyModal, 
  checkout 
}) {

  const hasItem = cart.items.length > 0;
  
  return (
    <>
      { hasItem ? <CartList { ...{ cart, incrementCart, decrementCart, checkout}} /> : <EmptyCart /> }

      { showSuccessModal ? 
        <Modal 
          label="Fechar" 
          title="Pedido realizado com sucesso!" 
          clickEvt={() => closeSuccessModal()} 
        /> 
        : null 
      }

      { showEmptyModal ? 
        <Modal 
          label="Confirmar"
          title="Seu carrinho está vazio! Confirme para ser redirecionado."
          clickEvt={() => closeEmptyModal()} 
        /> 
        : null 
      }
    </>
  )
}