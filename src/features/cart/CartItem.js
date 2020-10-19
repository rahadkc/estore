import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import { decrementCartQuantity, incrementCartQuantity, removeProductFromCart } from './cartSlice';



const CartItem = (
  {
    title,
    price,
    description,
    quantity,
    id,
    image,
    dispatch
  }
) => {

  console.log(id);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const removeItem = () => {
    dispatch(removeProductFromCart(id));
  };

  const handleIncrementDecrement = () => {

  }


  const incrementOrDecrement = (e, type) => {
    const value = itemQuantity;
    console.log(type, value);

    if (type === 'inc' && value < 10) {
      setItemQuantity(itemQuantity + 1);
      dispatch(incrementCartQuantity(id));
    }


    if (type === 'desc' && value > 1) {
      setItemQuantity(itemQuantity - 1);
      dispatch(decrementCartQuantity(id));
    }

  };


  return (
    <Card>
      <Img src={image} alt={description} />
      <div>
        <h4><strong>{title}</strong></h4>
        <p>{description}</p>
      </div>
      <Tools>
        <h5>${formatPrice(price)}</h5>
        <div>
          <div className="quantity">
            <input
              onClick={(e) => { incrementOrDecrement(e, 'desc') }}
              type="button" value="-" />
            <Input
              type="number" onChange={handleIncrementDecrement} step="1" max="10" min="1" value={itemQuantity} title="Qty"
              size="4" />
            <input
              onClick={(e) => { incrementOrDecrement(e, 'inc') }}
              type="button" value="+" />
          </div>
        </div>
        <button
          onClick={removeItem}
          type="button" className="btn btn-danger">
          &#x2715;
        </button>
      </Tools>
    </Card>
  );
};

export default connect()(CartItem);


const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 100px auto 170px;
  align-items: center;
  text-align: left;
`

const Tools = styled.div`
  text-align: center;
`

const Input = styled.input.attrs({ type: 'number' })`
  text-align: center;
  width: 60px;
`