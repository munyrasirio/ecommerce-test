import React from 'react';
import { withRouter } from "react-router";
import ContainerView from './ContainerView';
import { useSelector } from 'react-redux';

function Container(props) {
  const cart = useSelector((state) => state.cart);
  return <ContainerView { ...{ counter: cart.items.length, ...props }} />
}

export default withRouter(Container);
