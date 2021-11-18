import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description, current },
}) => {
  return (
    <div className="edu">
      <p>
        <strong>{school}</strong>
        <Moment format="DD/MM/YY">{from}</Moment> -{" "}
        {current ? "present" : <Moment format="DD/MM/YYYY">{to}</Moment>}
      </p>
      <p>
        <strong>Studying: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <hr />
    </div>
  );
};
export default ProfileEducation;
