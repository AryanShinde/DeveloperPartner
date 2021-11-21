import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post";
import styled from "styled-components";

const PostForm = () => {
  const auth = useSelector((store) => store.auth);
  const input = useRef(null);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    input.current.value = "";
  };

  return (
    !auth.isLoading && (
      <FormPost>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="up">
            <div className="avatar">
              <img src={auth.user.avatar} alt="" />
            </div>
            <input
              placeholder="post something...."
              ref={input}
              onChange={(e) => inputHandler(e)}
              type="text"
            />
          </div>
          <div className="down">
            <button type="submit">Post</button>
          </div>
        </form>
      </FormPost>
    )
  );
};

const FormPost = styled.div`
  margin-left: 1rem;
  width: 60%;
  max-width: 60%;
  padding: 1rem;
  border-bottom: 2px solid #d3d3d3;
  border-left: 2px solid #d3d3d3;
  border-right: 2px solid #d3d3d3;
  border-radius: 1rem;
  .up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.4rem;
    * {
      margin: 0.4rem;
    }
    input {
      padding: 1rem;
      font-size: 20px;
      border: none;
      width: 100%;
      border-bottom: 2px solid #d3d3d3;
    }
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }
  }
  .down {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      background-color: #6470c4;
      border-radius: 1rem;
      border: none;
      padding: 0.5rem 1rem;
      color: white;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;
export default PostForm;
