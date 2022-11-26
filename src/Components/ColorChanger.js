import React, { useState } from 'react';
import "../Styles/ColorChanger.css";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';

function ColorChanger() {


    const [color, setColor] = useState("white");
    const handleColor = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            <h1><b><u>COLOR CHANGER</u></b></h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
          
            <center>
        <FormControl>
            <InputLabel id='sel'><b>SELECT COLOUR MAPLA</b></InputLabel>
            <Select id={color} onChange={handleColor} label="Select" labelId='sel' sx={{ width: 200 }}>
                <MenuItem value={'lime'}>Lime</MenuItem>
                <MenuItem value={'lavender'}>Lavender</MenuItem>
                <MenuItem value={'crimson'}>Crimson</MenuItem>
                <MenuItem value={'darkblue'}>Darkblue</MenuItem>
                <MenuItem value={'teal'}>Teal</MenuItem>
                <MenuItem value={'rebeccapurple'}>Rebecca Purple</MenuItem>
                <MenuItem value={'ghostwhite'}>Ghost White</MenuItem>
                <MenuItem value={'aquamarine'}>Aqua Marine</MenuItem>
                <MenuItem value={'aliceblue'}>Alice Blue</MenuItem>
            </Select>
        </FormControl>
        </center>
        <Box className='box'
            backgroundColor={color}
            sx={{
                width: 550,
                height: 150,
                borderRadius: 5
            }}
        >
            <div className='conts'>
                
            </div>

        </Box>
        </div>
    )
}

export default ColorChanger;