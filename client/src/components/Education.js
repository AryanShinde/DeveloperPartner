import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../actions/profile";

const Education = ({ education }) => {
  const dispatch = useDispatch();
  const Education = education.map((edu) => {
    return (
      <tr kry={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{edu.fieldofstudy}</td>
        <td>
          <Moment format="YYYY/DD/MM">{edu.from}</Moment>
        </td>
        <td>
          {edu.to == null ? (
            "currently Studying"
          ) : (
            <Moment format="YYY/DD/MM">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => dispatch(deleteEducation(edu._id))}
            style={{
              padding: "0.5rem",
              color: "#d11a2a",
              backgroundColor: "white",
              borderRadius: "0.4rem",
              border: "2px solid #d11a2a",
              margin: "0.2rem",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="education">
      <div className="h2">
        <h2 style={{ color: "#4c4c78" }}> Education Details:</h2>
      </div>
      <table>
        <tr>
          <th>School/College</th>
          <th>Degree</th>
          <th>Field Of Study</th>
          <th>From</th>
          <th>To</th>
          <th></th>
        </tr>
        <tbody>{Education}</tbody>
      </table>
    </div>
  );
};
export default Education;
