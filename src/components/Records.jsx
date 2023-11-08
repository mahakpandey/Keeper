import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Records = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [ modal , setModal] = useState({name: '', email: '', index: -1})

  const [open, setOpen] = React.useState(false);

  const handleOpen = (index) =>{
   
    const foundElement  = data[index];
    setModal({ name: foundElement.name, email: foundElement.email, index });
    
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const saveChanges =()=>{
    const { name , email , index} = modal;
    if (index !== -1) {
      let updateData = [ ...data]
      updateData[index] = {name, email}
      setData(updateData)
    }
   
    setOpen(false)
  }

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: "none",
    borderRadius: "24px",
    width: "30vw",
    minWidth: " 215px",
    p: "30px 50px 45px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="outlined" color="success">
            <PlaylistAddOutlinedIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        {data.map((e, i) => {
          return (
            <div key={i} className="list">
              <h3>{e.name}</h3>
              <h3>{e.email}</h3>
              <div>
                <Button
                  onClick={() => handleOpen(i)}
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "15px" }}
                >
                  <EditNoteOutlinedIcon />
                </Button>
                <Button
                  onClick={() => removeData(i)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteOutlineIcon />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField value={modal.name} onChange={(e)=>setModal({...modal, name: e.target.value})} id="standard-basic" label="Name" variant="standard"/>
          <TextField value={modal.email} onChange={(e)=>setModal({...modal, email: e.target.value})} id="standard-basic" label="Email" variant="standard" style={{marginTop: "20px"}}/>
          <div style={{ marginTop: "60px" }}>
            <Button onClick={saveChanges} variant="outlined" color="success" style={{marginRight: "20px"}}>
              <FileDownloadDoneOutlinedIcon />
            </Button>
            <Button onClick={handleClose} variant="outlined" color="error">
              <CloseOutlinedIcon />
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Records;
