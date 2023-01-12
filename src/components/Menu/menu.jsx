import {React, useState} from "react";
import Item from "./item";
import Data from "../../data";
const Menu = () => {
  return(
    <div>
      <ul style={{listStyleType: "none"}}>
        {Data.map((item) => <Item item = {item}/>)}
      </ul>
    </div>
  )
}


export default Menu;
