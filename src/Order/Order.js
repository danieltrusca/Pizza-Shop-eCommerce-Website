import React from "react";
import styled from "styled-components";

import {DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  top: 49px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: calc(100vh - 49px);
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 998;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const Order=()=>{
    return (
        <OrderStyled>
            <OrderContent>
                Your order is empty!!!
            </OrderContent>
            <DialogFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}

export default Order;