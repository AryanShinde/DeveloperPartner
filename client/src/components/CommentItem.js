import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import Moment from "react-moment";
import styled from "styled-components";
import { deleteComment } from "../actions/post";
const CommentItem = ({
  comment: { name, _id, user, text, avatar, date },
  authUser,
  postId,
}) => {
  const dispatch = useDispatch();

  return (
    <CommentItemStyled>
      <div className="post">
        <div className="up">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="name">
            <h5>
              <b>{name}</b>
            </h5>
            <div className="down">
              <div className="main">
                <div className="text">{text}</div>
              </div>
              <hr />
            </div>

            {/* <small>
              <Moment className="date" format="DD/MM/YYYY">
                {date}
              </Moment>
            </small> */}
          </div>
        </div>

        {authUser === user && (
          <div
            onClick={() => dispatch(deleteComment(postId, _id))}
            className="delete"
          >
            <AiOutlineDelete className="delete-icon" />
          </div>
        )}
      </div>
    </CommentItemStyled>
  );
};

const CommentItemStyled = styled.div`
  margin: 0.4rem;
  padding: 1rem;
  height: auto;
  width: 70%;
  max-width: 70%;
  /* border: 2px solid #d3d3d3; */
  border-radius: 1rem;
  position: relative;
  .post {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .up {
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin-right: 0.8rem;
    }
    .date {
      margin-left: 0.4rem;
    }
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .down {
    margin: 0.4rem 0rem 0rem -1rem;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    max-width: auto;
    flex-direction: column;
    /* padding: 0.4rem; */
    .main {
      max-width: 100%;
      width: 100%;
    }
    .text {
      padding: 0rem 1rem 1rem 1rem;
      max-width: 100%;
      word-wrap: break-word;
    }
    hr {
      height: 2px;
      background-color: #d3d3d3;
      border: none;
      max-width: auto;
      margin: 0.2rem 0.2rem 0.4rem 0.2rem;
    }
  }
  .delete {
    position: absolute;
    top: 4%;
    right: 2%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &:hover {
      color: red;
    }
    .delete-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
export default CommentItem;
