import { React } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = (props) => {


  return (
    <Modal
      open={props.opened}
      onClose={props.closed}
    >
      <Box sx={style}>
        <ul>
          {props.data.map((item, index) => {
            return (<li key = {index} style={li_style}>
              <div>
                <h5>{item.name}</h5>
                <h4>{item.price}</h4>
              </div>
              <div>
                x{item.count}
              </div>
              <div>
                <button>-</button>
                <button>+</button>
              </div>
            </li>)
          })}
        </ul>
        <Button onClick={props.closedModal} type="button">Close</Button>
      </Box>
    </Modal>
  );
}
const li_style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItem: "center"
}
export default Cart;
