import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../actions/post";
import styled from "styled-components";

const CommentForm = ({ id }) => {
  const auth = useSelector((store) => store.auth);
  const input = useRef(null);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment({ text }, id));
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
              placeholder="reply something...."
              ref={input}
              onChange={(e) => inputHandler(e)}
              type="text"
            />
            <div className="down">
              <button type="submit">Post</button>
            </div>
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
  padding: 0.4rem;
  border-bottom: 2px solid #d3d3d3;
  border-left: 2px solid #d3d3d3;
  border-right: 2px solid #d3d3d3;
  border-radius: 1rem;

  .up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.3rem;
    * {
      margin: 0.3rem;
    }
    input {
      padding: 0.4rem;
      font-size: 20px;
      border: none;
      width: 100%;
      border-bottom: 2px solid #d3d3d3;
      outline: none;
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
export default CommentForm;
