import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from 'api/userApi'
import { TOKEN, USER } from 'constants/index'

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload)

  localStorage.setItem(TOKEN, data.jwt)
  localStorage.setItem(USER, JSON.stringify(data.user))

  return data.user
})

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload)

  localStorage.setItem(TOKEN, data.jwt)
  localStorage.setItem(USER, JSON.stringify(data.user))

  return data.user
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: localStorage.getItem(USER) || {},
    settings: {}
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(USER)
      localStorage.removeItem(TOKEN)

      state.current = {}
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = { ...action.payload }
    },
    [login.fulfilled]: (state, action) => {
      state.current = { ...action.payload }
    }
  }
})

const { actions, reducer } = userSlice

export const { logout } = actions

export default reducer
