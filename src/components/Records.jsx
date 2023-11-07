import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Records = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

    function addData (){
        setData([...data , {name, email}]);
        setName('');
        setEmail('')
    }

    const removeData = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr])
    }

  return (
    <>
     <div className="form">
      <Stack direction="row" spacing={2}>
        <TextField 
            value={name}
            onChange={(event)=> setName(event.target.value)}
            id="outlined-basic" 
            label="Name" 
            variant="outlined" />
        <TextField 
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" />
        <Button onClick={addData} variant="outlined" color="success">
          <PlaylistAddOutlinedIcon />
        </Button>
      </Stack>
    </div>

    <div className="data">
        {
            data.map((e,i)=>{
                return (
                    <div className='list'>
                        <h3>{e.name}</h3>
                        <h3>{e.email}</h3>
                        <Button onClick={()=> removeData(i)} style={{height: '30px'}} variant="outlined"  color="error"><DeleteOutlineIcon/></Button>
                    </div>
                )
            })
        }
    </div>
    </>
   
  );
};

export default Records;
