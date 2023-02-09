import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 请求电影列表
const getMovieListApi = () =>
  fetch(
    "https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48"
  ).then((res) => res.json());

export interface MovieState {
  list: [];
  totals: 0;
}

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    list: [],
  },
  reducers: {},
});
export default movieSlice.reducer;
