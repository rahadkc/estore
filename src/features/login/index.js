import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { login } from '../../services/auth';
import { userAuthenticate } from '../auth/authSlice';

const initialState = { name: '', password: '' }

const LoginForm = () => {
  const [formValue, setFomValue] = useState(initialState)
  const [isError, setError] = useState()
  const history = useHistory();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFomValue({ ...formValue, [name]: value.trim() })
  }

  const handleSubmit = (e) => {
    setError()
    e.preventDefault()
    const hasError = login(formValue)
    if (!!hasError) {
      dispatch(userAuthenticate())
      history.push('/products')
    }
    setError('Username or password invalid')
  }


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {isError && <Error>{isError}</Error>}
      <Input onChange={handleChange} name="name" type="text" placeholder="username" required />
      <Input onChange={handleChange} name="password" type="password" placeholder="password" required />
      <button type="submit" className="btn btn-info">Submit</button>
    </Form>
  )
}

export default connect()(LoginForm);

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

const Error = styled.p`
  color: red;
  padding: 10px;
  `