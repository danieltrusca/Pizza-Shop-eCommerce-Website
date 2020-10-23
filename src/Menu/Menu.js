import React from "react";
import styled from "styled-components";

import {foods} from "../Data/FoodData";

import {FoodGrid, Food, SectionName, FoodLabel} from "./FoodGrid";

const MenuStyled=styled.div`
    margin: 0 400px 60px 20px;
`

const Menu=()=>{
    return(
        <MenuStyled>
            {/* key => sectionName */}
            {/* value => foods */}
            {Object.entries(foods).map(([sectionName, foods]) =>(
                <>
                    <SectionName>{sectionName}</SectionName>
                    <FoodGrid>
                        {foods.map((item)=>(
                            <Food image={item.image} key={item.name}>
                                <FoodLabel>
                                    <div>{item.name}</div>
                                </FoodLabel>
                            </Food>
                        ))}
                    </FoodGrid>   
                </>
            ))}
           
        </MenuStyled>
    )
}

export default Menu;