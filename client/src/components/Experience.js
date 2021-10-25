import React from "react";
import Moment from "react-moment";

const Experience=({experience})=>{

    const Experiences=experience.map((exp)=>{
        return (
            <tr kry={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td><Moment format="YYYY/DD/MM">{exp.from}</Moment></td>
                <td>{exp.to==null? "currently working": <Moment format="YYY/DD/MM">{exp.to}</Moment> }</td>
                <td><button style={{background:"#ff2e3c",border:"none",
                    padding:"0.5rem", color:"white",
                    borderRadius:"0.4rem", margin:"0.2rem"}}>Delete</button></td>
            </tr>
        )
    })

    return (
        <div className="education">
            <div className="h2">
                <h2 style={{color:"#4c4c78"}}>Experience Details:</h2>
            </div>
            <table>
                <tr>
                    <th>Company</th>
                    <th> Title</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                <tbody>
                    {Experiences}
                </tbody>
            </table>
        </div>
    )
}
export default Experience;