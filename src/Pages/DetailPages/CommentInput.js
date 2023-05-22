import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../toolkit/commentSlice";

const CommentInput = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(comment));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your comment"
        value={comment}
        onChange={handleChange}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentInput;
