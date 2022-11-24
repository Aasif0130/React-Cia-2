import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../Styles/Home.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Take from './Take';

function Welcome() {
    const [Name, setName] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }

    const storeName = (event) => {
        window.sessionStorage.setItem('Name', Name)
    }

    return (
        <>
            <Link to="/"><img src="../Pics/logo.png" width={150}></img></Link>
            <Box className='box' sx={{
                backgroundColor: '#fa7e02',
                width: 450,
                height: 520,
                borderRadius: 75
            }}>
                <h1 className='h1'>Welcome Guys..!!</h1>
                <div className='box-contents'>
                    <br /><br />
                    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleName} />

                    <br /><br />

                    <Link to='/take'><Button className="bu" variant="contained" onClick={storeName}>Place Order</Button></Link>
                </div>
            </Box>

        </>
    )
}

export default Welcome;