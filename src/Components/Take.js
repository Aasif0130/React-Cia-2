import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Styles/Take.css";

const ItemContext = React.createContext({
    Items: [],
    getItems: () => { }
})

function Take() {
    const [Item, setItem] = useState("");
    const [Nos, setNos] = useState("");

    const Name = window.sessionStorage.getItem("Name");

    const handleItem = (event) => {
        setItem(event.target.value);
    }

    const handleNos = (event) => {
        setNos(event.target.value);
    }

    const handleAdd = (event) => {
        const item = {
            "item": Item,
            "nos": Nos,
            "done": false
        }

        setItem("");
        setNos("");

        fetch("http://localhost:8000/take", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
    }

    const get = async () => {
        const res = await fetch("http://localhost:8000/show");
        const i = await res.json();
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

    const handlePlace = (event) => {
        // const item = {
        //     "done": true
        // }

        // fetch("http://localhost:8000/take", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(item)
        // })
        get();
    }

    // useEffect(() => {
    //     setName(JSON.parse(window.localStorage.getItem('Name')))
    // }, []);

    // useEffect(() => {
    //     window.localStorage.setItem('Name', Name);
    // }, [Name]);

    const [Items, setItems] = useState([]);

    const getItems = async () => {
        const res = await fetch("http://localhost:8000/show");
        const i = await res.json();
        setItems(i);
        console.log(i);
        // alert(5);
    }

    useEffect(() => {
        getItems();
    }, []);

    const Itemlist = Items.map((Item) => (<li>{Item.name} {"=>"} {Item.item} {Item.nos}</li>));

    return (
        <>
            <Link to="/"><img src="../Pics/logo.png" width={150}></img></Link>
            <Box className='box' sx={{
                backgroundColor: '#fa7e02',
                width: 450,
                height: 520,
                borderRadius: 75
            }}>
                <h1 className="h1">Howdy {Name}!!</h1>
                <div className='box-contents'>
                    <br /><br /><br /><br />
                    <form>
                        <TextField onChange={handleItem} value={Item} label="Item" /> <br /><br />
                        <TextField type="number" onChange={handleNos} value={Nos} label="Nos" /> <br /><br />
                        <Button variant="contained" onClick={handleAdd}>Add Item</Button> <br /><br />
                        <Button variant="contained" onClick={handlePlace}>Place Order</Button>
                    </form>
                </div>
            </Box>
        </>
    )
}

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default Take;

{/* <div >

    <h1>{Name}</h1>
    <form>
        <TextField onChange={handleName} value={Name} /> 
        <TextField onChange={handleItem} value={Item} />
        <TextField onChange={handleNos} value={Nos} />
        <Button onClick={handleAdd}>Add Item</Button>
        <Button type="submit" onClick={handleSubmit}>Place Order</Button>
    </form >

    <>
        <p>l</p>
        <ul>{Itemlist}</ul>
    </>

</div > */}