import React from "react";
import styled from "styled-components";

import {DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import {formatPrice} from "../Data/FoodData";

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

const OrderContainer=styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
`

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;



const Order=({openFood, setOpenFood, orders, setOrders})=>{
    return (
        <OrderStyled>
            {orders.length===0?(
                <OrderContent>
                    Your order is empty!!!
                </OrderContent>
            ):(
                <OrderContent>
                    {" "}
                    <OrderContainer> Your Order: </OrderContainer>{" "}
                    {orders.map((order, index)=>(
                             <OrderContainer>
                                 <OrderItem>
                                     <div>1</div>
                                     <div>{order.name}</div>
                                     <div style={{ cursor: "pointer" }}>🗑</div>
                                    <div>{formatPrice(order.price)}</div>
                                 </OrderItem>
                             </OrderContainer>
                    ))}
                </OrderContent>
            )}
            
            <DialogFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}

export default Order;