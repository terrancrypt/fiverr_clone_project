import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
  },
  reducers: {
    addComment(state, action) {
      const newComment = {
        id: Date.now(),
        content: action.payload,
      };
      state.list.push(newComment);
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
