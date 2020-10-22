import React from "react";
import styled from "styled-components";

const BannerStyled=styled.div`
    
    height: 300px;
    margin-top: 49px;
    background: url('img/banner.jpeg') no-repeat;
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
`

const Banner=()=>{
    return (
        <BannerStyled />
    )
}

export default Banner;