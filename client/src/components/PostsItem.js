import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
const PostItem = ({
  post: { text, user, _id, likes, comments, date, avatar, name, bio },
}) => {
  return (
    <Post>
      <div className="post">
        <div className="up">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="name">
            <h4>{name}</h4>
            <small>{bio}</small>
            <small>
              <Moment className="date" format="DD/MM/YYYY">
                {date}
              </Moment>
            </small>
          </div>
        </div>
        <div className="down">
          <p className="text">{text}</p>
          <div className="infoLine">
            <div className="likecount">
              <p>Likes: {likes.length}</p>
            </div>
            <div className="commentcount">
              {" "}
              {comments.length > 1
                ? `${comments.length} comments`
                : `${comments.length} comment`}{" "}
            </div>
          </div>
          <hr />

          <div className="action-panel">
            <div className="like">
              <BiLike className="icons" />
              <p>Like</p>
            </div>
            <div className="share">
              <RiShareForwardLine className="icons" /> <p>Share</p>
            </div>
            <div className="comment">
              <FaRegCommentDots className="icons" /> <p>comment</p>
            </div>
          </div>
        </div>
      </div>
    </Post>
  );
};

const Post = styled.div`
  margin: 1rem;
  padding: 1rem 1rem 0rem 1rem;
  height: auto;
  width: 60%;
  .post {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .up {
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      margin-right: 0.8rem;
    }
    .date {
      margin-left: 0.4rem;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .down {
    margin: 1rem 0rem 0rem 0.4rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    .text {
      padding: 0rem 1rem 1rem 1rem;
    }
    hr {
      height: 2px;
      background-color: #d3d3d3;
      border: none;
      width: 100%;
      margin: 0.2rem 0.2rem 0.4rem 0.2rem;
    }
  }
  .infoLine,
  .action-panel {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin: 0.2rem;
    .icons {
      font-size: 20px;
      margin: 0.2rem;
    }
    .like,
    .comment,
    .share {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default PostItem;
