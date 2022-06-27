import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Container } from './styles'
import { LOGIN_ASYNC_SAGA } from 'stateManagment/sagas/sagaActionsTypes'
export default function HelloWorld() {
  const dispatch = useDispatch()
  const performLogin = () => {
    dispatch({ type: LOGIN_ASYNC_SAGA })
  }
  return (
    <Container>
      <Button onClick={performLogin}> Login</Button>
    </Container>
  )
}
