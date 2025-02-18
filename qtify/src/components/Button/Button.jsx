import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CustomButton = ({ text, className }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className={className} onClick={handleClickOpen}>
        {text}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h3 style={{ textAlign: "center" }}>Feedback</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            color="secondary"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            color="secondary"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "#34c94b", color: "#ffff" }}
            onClick={handleClose}
          >
            Submit Feedback
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomButton;
