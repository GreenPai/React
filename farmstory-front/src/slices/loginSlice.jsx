import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const username = Cookies.get("username");

  return { username };
};

const initState = {
  username: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadStateFromCookie() || initState,
  reducers: {
    login: (state, action) => {
      // 리덕스 username 초기화
      const data = action.payload;
      state.username = data.username;

      // username 쿠키 저장
      Cookies.set("username", state.username, 1);
    },
    logout: (state) => {
      state.username = null;

      // 쿠키 삭제
      Cookies.remove("username");

      // HttpOnly 쿠키는 자바스크립트 처리 안됨 (읽기만 가능)
      //Cookies.remove("access_token");
      //Cookies.remove("refresh_token");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
