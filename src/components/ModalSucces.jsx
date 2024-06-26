import Box from "@mui/material/Box";
import { CheckCircleOutline } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: 2,
};

export default function ModalSucces({ children }) {
  return (
    <div>
      <Box
        sx={style}
        className="bg-green-800 border-2 border-green-500 text-white flex items-center gap-2"
      >
        <CheckCircleOutline sx={{ fontSize: 40 }} className="text-green-200" />
        <p id="modal-modal-title" className=" text-sm text-center">
          {children}
        </p>
      </Box>
    </div>
  );
}
