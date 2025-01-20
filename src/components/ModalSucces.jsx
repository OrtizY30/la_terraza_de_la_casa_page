import { CheckCircleOutline } from "@mui/icons-material";
import { Card } from "@mui/material";

const style = {
  top: "30%",
  position: "absolute",
  right: "0%",
  left: "0%",
  borderRadius: 4,
  width: 390,
};

export default function ModalSucces({ children }) {
  return (
    <Card
      sx={style}
       className="px-2 py-6 pb-12 mx-auto"
    >
      <p className="text-center">

      <CheckCircleOutline 
      sx={{ fontSize: 70 }} 
      className="text-green-700 m-3 animate-pulse "
      />
      </p>
      <p id="modal-modal-title" className="text-xl text-center text-green-700">
        {children}
      </p>
    </Card>
  );
}
