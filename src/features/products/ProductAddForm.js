import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addProduct } from './productSlice';

const initialState = { title: '', price: 0, publish: true, desc: '' }

const ProductAddForm = () => {
  const [formValue, setFomValue] = useState(initialState)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFomValue({ ...formValue, [name]: value.trim() })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const values = {
      ...formValue,
      id: uuid(),
      price: parseInt(formValue.price),
      image: "https://via.placeholder.com/300.png/170/fff",
      publish: formValue.publish === 'true',
    }
    dispatch(addProduct(values))
    history.push('/products')
  }


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add new product</h2>
      <Input onChange={handleChange} name="title" type="text" placeholder="write title" required />
      <Input onChange={handleChange} name="price" type="number" step="0.01" placeholder="price" required />
      <Wrapper>
        <Radio onChange={handleChange} name="publish" id="publish" type="radio" value={true} />
        <label htmlFor="publish">Publish</label>
        <Radio onChange={handleChange} name="publish" id="unpublish" type="radio" value={false} />
        <label htmlFor="unpublish">Unpublish</label>
      </Wrapper>
      <Textarea onChange={handleChange} name="desc" placeholder="Write description"></Textarea>
      <button type="submit" className="btn btn-info">Submit</button>
    </Form>
  )
}

export default connect()(ProductAddForm);

const Form = styled.form`
  padding: 50px;
  background: white;
  border-radius: 6px;
  width: 500px;
  max-width: 100%;
  margin: 50px auto;
  `

const Input = styled.input`
  display: block;
  height: 42px;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 20px;
  width: 100%
  `
const Radio = styled.input.attrs({ type: 'radio' })`
  display: inline-block;
  `
const Wrapper = styled.div`
  margin-bottom: 20px
`
const Textarea = styled.textarea`
  display: block;
  height: 150px;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 20px;
  width: 100%
`