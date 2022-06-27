import { createSlice } from '@reduxjs/toolkit'
export type IUser = {
  id: number
  username: string
  email: string
  isAdmin: boolean
}
export type ILogin = {
  isLoggedIn: boolean
  user: IUser | null
  counter: number
}
const initialState: ILogin = {
  isLoggedIn: false,
  user: null,
  counter: 0,
}
export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state: ILogin) => {
      state.counter++
    },
    decrement: (state: ILogin) => {
      state.counter--
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
