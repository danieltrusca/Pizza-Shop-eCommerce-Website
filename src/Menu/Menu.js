import React from "react";
import styled from "styled-components";

import {foods, formatPrice} from "../Data/FoodData";

import {FoodGrid, Food, SectionName, FoodLabel} from "./FoodGrid";


const MenuStyled=styled.div`
    margin: 0 400px 60px 20px;
`

const Menu=({setOpenFood})=>{
    return(
        <MenuStyled>
            {/* key => sectionName */}
            {/* value => foods */}
            {Object.entries(foods).map(([sectionName, foods]) =>(
                <>
                    <SectionName>{sectionName}</SectionName>
                    <FoodGrid>
                        {foods.map((item)=>(
                            <Food image={item.image} key={item.name} 
                                onClick={() => {setOpenFood(item);
                            }}>
                                <FoodLabel>
                                    <div>{item.name}</div>
                                    <div>{formatPrice(item.price)}</div>
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