import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../actions/profile";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();
  const Experiences = experience.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/DD/MM">{exp.from}</Moment>
        </td>
        <td>
          {exp.to == null ? (
            "currently working"
          ) : (
            <Moment format="YYYY/DD/MM">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => dispatch(deleteExperience(exp._id))}
            style={{
              background: "#ff6b7f",
              border: "none",
              padding: "0.5rem",
              color: "white",
              borderRadius: "0.4rem",
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
        <h2 style={{ color: "#4c4c78" }}>Experience Details:</h2>
      </div>
      <table>
        <tr>
          <th>Company</th>
          <th> Title</th>
          <th>From</th>
          <th>To</th>
        </tr>
        <tbody>{Experiences}</tbody>
      </table>
    </div>
  );
};
export default Experience;
