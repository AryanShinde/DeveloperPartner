import React from "react";
import styled from "styled-components";
import home from "../images/home.svg"

const Home=()=>{
    return (
        <HomeImg>
            <img src={home} alt="" />
            <div className="right">
                <h3 className="desc">This website is for finding partners and colaborating with them and make exciting porjects
                </h3>
                <div className="login">
                    <a className="b-1" href="http://localhost:5000">Log in</a>
                    <a href="http://localhost:5000">Sign up</a>
                </div>
            </div>
        </HomeImg>
    );
}

const HomeImg=styled.div`
height: 88vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-wrap: wrap;
    img{
        position: relative;
        width:50%;
        height:50vh;
        filter: blur(0px);
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        font-size: 01rem;
        .login{
            margin: 2rem 0rem;
        a{
            padding: 0.8rem;
            transition: 0.3s;
            margin: 1rem;
            font-size: 1.2rem;
            color: black;
            text-decoration: none;
            border: 1px solid  #6470c4;
            border-radius: 1rem;
            &:hover{
                background-color: #6470c4;
                color: white;
            }
        }
        .b-1{
            background-color: #6470c4;
            color: white;
            &:hover{
                background-color: white;
                color: black;
            }
        }
    }
    }
`

export default Home;