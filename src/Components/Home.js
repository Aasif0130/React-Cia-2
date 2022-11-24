import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/Home.css"

function Home() {
    return (
        <>
            <header>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;1,100;1,700&display=swap" rel="stylesheet" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;1,100;1,700&display=swap');
                </style>
            </header>
            <div className="nav">
                <img className="logo" src="../Pics/logo.png" width="150" />
                <ul>
                    <li className="active"><Link to="/"><b><i>Home</i></b></Link></li>
                    {/* <li><a href="signup.html"><b><i>Queries</i></b></a></li>
                    <li><a href="signup.html"><b><i>About</i></b></a></li> */}
                    <li><Link to="/signin"><b><i>Sign In</i></b></Link></li>
                    <li><Link to="/signup"><b><i>Sign Up</i></b></Link></li>
                </ul>
            </div>

            <div className="lines">
                <img src="../Pics/home.jpg" alt="Home" style={{ width: "950px", height: "800px" }} />

                <span>
                    <h1>Does it feel like an eternity while waiting to taste ur delicious treats...!!!</h1>

                    <i><h4>Say No More to waiting....</h4>
                        <h4>UwU Kitchen to the rescue 😎</h4><br /><br /></i>
                    <h2>Come lets revolutionize the Food Industry ✨</h2>
                </span>

            </div>
        </>
    )
}

export default Home;