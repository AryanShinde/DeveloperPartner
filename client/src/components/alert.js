import React from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import "../styles/app.scss";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Alert = () => {
  const state = useSelector((store) => store.alert);
  return (
    state !== null &&
    state.map((s) => (
      <AlertStyle
        className={state !== null ? "add-alert" : "remove-alert"}
        style={
          s.alertType === "danger"
            ? { backgroundColor: "#fed7d7" }
            : { backgroundColor: "#c6f6d5" }
        }
        key={uuid()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.4rem",
            color: "black",
          }}
        >
          {s.alertType === "danger" ? (
            <AiOutlineExclamationCircle />
          ) : (
            <AiOutlineCheckCircle />
          )}

          <h4>{s.msg}</h4>
        </div>
      </AlertStyle>
    ))
  );
};
const AlertStyle = styled.div`
  transition: 8s ease;
  h4 {
    margin-left: 1rem;
  }
`;
export default Alert;
