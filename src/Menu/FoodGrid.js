import styled from "styled-components";
import {Title} from "../Styles/title";

export const SectionName = styled.h1`
  height: 30px;
`

export const FoodGrid=styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled(Title)`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  padding: 5px;
  border-radius: 0.2rem;
 
  font-size: inherit;
  font-weight: normal;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
`

export const Food=styled.div`
    height: 100px;
    background: url(${props => props.image}) no-repeat center/cover;
    filter: contrast(75%);
    border-radius: 0.3rem;
    padding: 10px;
    box-shadow: 0px 0px 2px 0px grey;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &:hover {
        box-shadow: 0 5px 10px grey;
        filter: contrast(100%);
      }
`