import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Show() {
    const [its, setIts] = useState([]);

    const get = async () => {
        const res = await fetch("http://localhost:8000/show");
        const i = await res.json();
        setIts(i);
        console.log("-------------------------------------------------------------------------------------------");
        console.log("Your Order!!");
        console.log("-------------------------------------------------------------------------------------------");
        let x = 0;
        i.forEach(function (item) {
            x++;
            console.log("Item No : " + x);
            console.log("Item : " + item.item);
            console.log("No of Serves : " + item.nos);
            console.log("---------------------------------");
        });
        console.log("Total no of Items : " + x);
        console.log("-------------------------------------------------------------------------------------------");
    }

    useEffect(() => {
        get();
    }, []);

    const itlist = its.map(it => <li>{it.item}</li>);

    return (
        <>
            <Link to="/"><img src="../Pics/logo.png" width={150}></img></Link>
            <Box className='box' sx={{
                backgroundColor: '#fa7e02',
                width: 450,
                height: 520,
                borderRadius: 75
            }}>
                <div className='h1'>
                    <ol>{itlist}</ol>
                </div>
            </Box>
        </>
    )
}