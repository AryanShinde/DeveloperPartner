import React from "react";
import Moment from "react-moment";
const ProfileExperience = ({
  experience: { title, company, location, to, from, description, current },
}) => {
  return (
    <div className="exp">
      <hr />
      <p>
        <strong>{company}</strong>,{location}
      </p>
      <Moment format="DD/MM/YY">{from}</Moment> -{" "}
      {current ? "present" : <Moment format="DD/MM/YYYY">{to}</Moment>}
      <p>
        <strong>Working as: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};
export default ProfileExperience;
