import React from "react";

import styled from "styled-components";
import {pizzaRed} from "../Styles/colors";
import {Title} from "../Styles/title";

const NavbarStyled=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 49px;
    background-color: rgb(${pizzaRed});
    padding: 10px;
    box-sizing: border-box;
    z-index: 999;
`;

const Logo=styled(Title)`

    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
    `

const Navbar=()=>{
    return (
        <NavbarStyled>
            <Logo>
                Sliceline&nbsp;
                <span role="img" aria-label="pizza slice">
                🍕
                </span>
            </Logo>
        </NavbarStyled>
    )
}

export default Navbar;