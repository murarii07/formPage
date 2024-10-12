import { createSlice, configureStore } from '@reduxjs/toolkit'

const resultFlag = createSlice({
  name: 'resultFLag',
  initialState: {
    value: false
  },
  reducers: {
    changeValue: (state, action) => {
        state.value = action.payload;
    }
}

})

export const { changeValue } = resultFlag.actions
export default resultFlag.reducer;