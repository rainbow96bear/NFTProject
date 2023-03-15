import { createSlice } from "@reduxjs/toolkit";
export interface Thema {
  type: string;
}

const initialState: Thema = { type: "light" };
const counterSlice = createSlice({
  // createSlice로 actions, reducers 등등을 전부 한번에 생성한다.
  name: "thema", // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    change: (state) => {
      if (state.type == "light") {
        state.type = "dark";
      } else {
        state.type = "light";
      }
    },
  },
});

export const action = counterSlice.actions;
// createSlice는 action을 자동으로 만들어준다.(action 함수다)
// dispatch에 매개변수 action에 createSlice로 생성된 actions를 사용한다.
// dispatch(action)

export const reducer = counterSlice.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
