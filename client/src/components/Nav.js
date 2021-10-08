import React from "react";
import styled from "styled-components";
const Nav=()=>{
    return (
        <NavStyled>
            <div className="left">Dev Partner</div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>Developers</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </NavStyled>
    );

}
const NavStyled=styled.div`
        display: flex;
        color: white;
        justify-content: space-between;
        align-items: baseline;
        background-color: #6470c4;
        padding: 1.5rem;
        position:sticky;
        z-index: 2;
        top:0;
        border-radius: 0rem 0rem 1rem 1rem;
        ul{
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                margin:0rem 1rem;
            }
        }
    `
export default Nav;