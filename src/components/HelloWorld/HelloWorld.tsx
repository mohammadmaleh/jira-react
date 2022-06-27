import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './styles'
import { increment, decrement } from '../../stateManagment/reducers/login/login.reducer'
import { RootState } from 'stateManagment/store/store'
export default function HelloWorld() {
  const count = useSelector((state: RootState) => state.login.counter)
  const dispatch = useDispatch()
  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  return (
    <Container>
      <Button onClick={handleIncrement}>increment</Button>
      {count}
      <Button onClick={handleDecrement}>decrement</Button>
    </Container>
  )
}
