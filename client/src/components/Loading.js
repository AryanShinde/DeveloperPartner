import React from "react";
import styled from "styled-components" 

const Loading=()=>{
    return (
        <LoadingStyle>

        </LoadingStyle>
    )
}

const LoadingStyle=styled.div`
    width:5rem;
    height:5rem;
    position: absolute;
    top:50%;
    left:48%;
    border-radius: 50%;
    border: 0.6rem solid #EEEFF7;
    border-top: 0.6rem solid #6470c4;
    animation: spin 1s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        20%{
            transform: rotate(30deg);
        }
        30%{
            transform: rotate(50deg);
        }

        50%{
            transform: rotate(180deg);
        }
        70%{
            transform: rotate(270deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export default Loading;