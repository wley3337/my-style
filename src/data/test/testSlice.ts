import { createSlice } from '@reduxjs/toolkit'

const initState = {
  stuff: 'works',
}
const test = createSlice({
  name: 'test',
  initialState: initState,
  reducers: {},
})

export default test.reducer
