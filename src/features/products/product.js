import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import { isAuthenticated } from '../auth/authSlice';
import { addProductToCart } from '../cart/cartSlice';
import { publishProduct, removeProduct } from './productSlice';


const Product = (props) => {
  const {
    title,
    price,
    image,
    description,
    id,
    publish
  } = props.product;
  const dispatch = useDispatch();
  const isAdmin = useSelector(isAuthenticated);

  return (
    <Card className="product">
      <Link to={`/products/${id}`} className="product__link">
        <Img src={image} alt={title} />
      </Link>
      <div className="">
        <h4>{title}</h4>
        <h5>${formatPrice(price)}</h5>
        <p>{description}</p>
        <ActionButton>
          <Button
            onClick={() => {
              dispatch(addProductToCart({ ...props.product }))
            }}
            className="btn btn-info">Add to cart
          </Button>

          {isAdmin && <><Button
            onClick={() => {
              dispatch(publishProduct(id))
            }}
            className="btn btn-success">{publish ? 'Unpublish' : 'Publish'}
          </Button>
            <Button
              onClick={() => {
                dispatch(removeProduct(id))
              }}
              className="btn btn-danger">Delete
          </Button></>}
        </ActionButton>
      </div>
    </Card>
  )
}

export default connect()(Product);

const Card = styled.div`
  padding: 25px;
  border-radius: 10px;
  background: white;
`

const ActionButton = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const Button = styled.button`
  padding: 6px 12px;
  font-size: 10px;
`

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`