import React from "react";
import styled from "styled-components";

import {FoodLabel} from "../Menu/FoodGrid";
import {pizzaRed} from "../Styles/colors";
import {Title} from "../Styles/title";
import {formatPrice} from "../Data/FoodData";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner=styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background: ${({ image }) => `url(${image}) no-repeat center/cover`};
`

const DialogBannerName=styled(FoodLabel)`
    font-size: 30px;
    padding: 5px 40px;
    top: ${({ image }) => (image ? `100px` : `20px`)};
`

const FoodDialog=({openFood, setOpenFood, orders, setOrders})=>{
    const close=()=>{
        setOpenFood();
    }

    const order={
      ...openFood
    }

    const addToOrder=()=>{
        setOrders([...orders, order]);
        close();
    }
    return (
        openFood?(
            <>
                <DialogShadow onClick={close}  />
                <Dialog>
                    <DialogBanner image={openFood.image} >
                             <DialogBannerName> {openFood.name} </DialogBannerName>
                    </DialogBanner>
                    <DialogContent>

                    </DialogContent>
                    <DialogFooter>
                        <ConfirmButton onClick={addToOrder}>Add to order:  {formatPrice(openFood.price)}
                        </ConfirmButton>
                    </DialogFooter>
                </Dialog>
            </>
        ): (
            <>
            </>
        )
       
    )
}

export default FoodDialog;