import Header from "../header/header";
import Image from "../image/image";
import Summary from "../summary/summary";

const Layout = (props) => {
  return(
    <div>
      <Image className="image"/>
      <Summary/>
      {props.children}
    </div>
  )

}
export default Layout;
