import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import auth from '../../services/auth';
import Product from './product';
import { selectProducts } from './productSlice';


function ProductList() {
  const products = useSelector(selectProducts);
  const isAdmin = auth.getCurrentUser()

  return (
    <div className="container">
      <ToolBar>
        <Title>New Products</Title>
        {isAdmin && <Button to="/product/add" className="btn btn-info">Add new product</Button>}
      </ToolBar>
      <Wrapper>
        {products.map(p => <Product key={p.id} product={p} />)}
      </Wrapper>
    </div>
  )
}

export default connect()(ProductList);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 80px;
`
const ToolBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 10px;
`

const Button = styled(Link)`
  text-decoration: none;
`
const Title = styled.h3`
  margin: 0;
`