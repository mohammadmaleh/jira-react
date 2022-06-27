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
}

const initialState: ILogin = {
  isLoggedIn: false,
  user: null,
}

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state: ILogin, action: { payload: IUser }) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = counterSlice.actions

export default counterSlice.reducer
