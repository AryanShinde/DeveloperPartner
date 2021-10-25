import React from "react";
import Moment from "react-moment";

const Education=({education})=>{

    const Education=education.map((edu)=>{
        return (
            <tr kry={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>{edu.fieldofstudy}</td>
                <td><Moment format="YYYY/DD/MM">{edu.from}</Moment></td>
                <td>{edu.to==null? "currently working": <Moment format="YYY/DD/MM">{edu.to}</Moment> }</td>
                <td><button style={{background:"#ff2e3c",border:"none",
                    padding:"0.5rem", color:"white",
                    borderRadius:"0.4rem", margin:"0.2rem"}}>Delete</button></td>
            </tr>
        )
    })

    return (
        <div className="education">
            <div className="h2">
               <h2 style={{color:"#4c4c78"}}> Education Details:</h2>
            </div>
            <table>
                <tr>
                    <th>School/College</th>
                    <th>Degree</th>
                    <th>Field Of Study</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                <tbody>
                    {Education}
                </tbody>
            </table>
        </div>
    )
}
export default Education;