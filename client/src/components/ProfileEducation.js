import React from "react";
import Moment from "react-moment";
const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description, current },
}) => {
  return (
    <div className="edu">
      <hr />
      <p>
        <strong>{school}</strong>
      </p>
      <Moment format="DD/MM/YY">{from}</Moment> -{" "}
      {current ? "present" : <Moment format="DD/MM/YYYY">{to}</Moment>}
      <p>
        <strong>Working as: </strong>
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
    </div>
  );
};
export default ProfileEducation;
