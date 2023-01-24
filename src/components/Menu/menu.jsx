import Item from "./item";
import Data from '../../store/data';
import "./menu.css"

const Menu = () => {
  return(
    <div className='main'>
      <div className='child'>
        <ul style={{listStyleType: "none"}}>
          {Data.map((item, index) => <Item key = {index} item = {item} />)}
        </ul>
      </div>
    </div>
  )
}


export default Menu;
