import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import CartItem from './CartItem';


const ShoppingCart = (props) => {
  return (
    <div className="container">
      <Card>
        <h3>Shopping cart</h3>
        <Body>
          {props.cartItemCount ? props.cartItems.map(cart => (
            <CartItem key={cart.id} {...cart} />
          )) : <h1>There is no product in your cart</h1>}
        </Body>
        {!!props.cartItemCount && <Footer>Total price: <b>{formatPrice(props.totalPrice)}€</b></Footer>}
      </Card>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    cartItemCount: state.cart.items.reduce((count, item) => {
      return count + item.quantity;
    }, 0),
    totalPrice: state.cart.items.reduce((count, item) => {
      return count + (item.price * item.quantity);
    }, 0)
  }
}

export default connect(mapStateToProps, null)(ShoppingCart);


const Card = styled.div`
  padding: 25px;
  border-radius: 10px;
  background: white;
`

const Body = styled.div`
  
`

const Footer = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid grey;
`