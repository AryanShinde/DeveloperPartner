import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//icons
import{ BsTwitter,BsInstagram,BsLinkedin,BsYoutube,BsFacebook } from "react-icons/bs";

const CreateProfile=()=>{


const [displaySocialInputs,toggleSocialInputs]=useState(false);

const [formData,setFormData]=useState({
    company:"",
    website:"",
    location:"",
    status:"",
    skills:"",
    bio:"",
    githubusername:'',
    youtube:"",
    twitter:"",
    facebook:"",
    linkedin:"",
    instagram:""
})
const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram
}=formData;

const onChange=(e)=>{
    setFormData({...formData,
        [e.target.name]:e.target.value
    })
    console.log(e.target.value);
}
const onSubmit=(e)=>{
  e.preventDefault();
  console.log(formData);
}
    return(
        <ProfileStyled>
            <h1>Create your Profile</h1>
        <div className="line"></div>
        <form className="form" onSubmit={(e)=>onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={(e)=>onChange(e)} required>
            <option value="0" >* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e)=>onChange(e)}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg.Mumbai, Maharashtra)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e)=>onChange(e)}
          required/>
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={(e)=>onChange(e)}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e)=>onChange(e)}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <div className="socials">
            <div className="form-group social-input">
              <BsTwitter className="icons"/>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e)=>onChange(e)}
              />
            </div>
            <div className="form-group social-input">
              <BsFacebook className="icons"/>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e)=>onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <BsYoutube className="icons"/>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e)=>onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <BsLinkedin className="icons"/>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e)=>onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <BsInstagram className="icons" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e)=>onChange(e)}
              />
            </div>
          </div>
        )}

        <button type="submit" value="submit details">
          Submit Details
        </button>
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
        </ProfileStyled>
    )
}

const ProfileStyled=styled.div`
h1{
  color: #4c4c78;
  margin-bottom: 1rem;
}
.line{
    margin-bottom: 0.4rem;
    background-color: #4c4c78;
    width:40rem;
    height: 0.4rem;
    border-radius: 0rem 0rem 1rem 1rem;
}
    margin-top: 2rem;
    .form-group{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 1rem 0rem;
    }
    input,select,textarea{
        margin-bottom: 0.4rem;
        padding: 0.3rem;
        font-size: 1rem;
        border-radius:0.3rem;
        border: 2px solid #6470c4;
        width: 60%;

    }
    button{
      width:auto;
      padding:0.4rem;
      color:white;
      background-color: #6470c4;
      margin: 0.2rem;
      border:none;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 0%.3rem;
    }
    .social-input{
      display: flex;
     justify-content: flex-start;
     align-items: center;
      flex-direction: row;
      
      .icons{
        font-size: 2rem;
        margin: 1rem;
      }
    }
    a{
      text-decoration: none;
      border-radius: 0%.2rem;
      border: 2px solid #6470c4;
      color: #6470c4;
      padding: 0.3rem;
    }
    
`
export default CreateProfile;