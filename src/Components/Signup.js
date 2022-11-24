import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Signup.css";

function Signup() {
    const [type, settype] = useState("SignUp");

    const chowner = (event) => {
        settype("Owner SignUp");
    }

    const chcust = () => {
        settype("Customer SignUp");
    }

    const chemp = () => {
        settype("Employee SignUp");
    }

    return (
        <>
            <Link to="/"><img src="../Pics/logo.png" width={150}></img></Link>
            <header>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;1,100;1,700&display=swap" rel="stylesheet" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;1,100;1,700&display=swap');
                </style>
            </header>


            <div className="container">
                <form className="modal-content">
                    <div className="dropdown">
                        <button className="dropbtn" id="page"><b><i>{type}</i></b></button>
                        <div className="dropdown-content">
                            <button id="owner" onClick={chowner}><b><i>Owner</i></b></button>
                            <button id="Customer" onClick={chcust}><b><i>Customer</i></b></button>
                            <button id="Employee" onClick={chemp}><b><i>Employee</i></b></button>
                        </div>
                    </div>

                    <p style={{ color: "black" }}><b><i>Please fill in this form to create your account.</i></b></p>
                    <hr />
                    <label for="email"><b><i>Email</i></b></label>
                    <input className='in' type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b><i>Password</i></b></label>
                    <input className='in' type="password" placeholder="Enter Password" name="psw" required />

                    <label for="psw"><b><i>Confirm Password</i></b></label>
                    <input className='in' type="password" placeholder="Enter Confirm Password" name="psw" required />

                    <Add type1={type} />


                    {/* <center><button className="open-button" onclick="openForm()"><b><i>Verify</i></b></button></center> */}

                    <div className="clearfix">

                        <Link to="/"><button type="button" className="cancelbtn"><b><i>Cancel</i></b></button></Link>
                        <Link to="/signin"><button type="button" className="signupbtn"><b><i>Signup</i></b></button></Link>

                    </div>
                </form>
            </div >


            <div className="form-popup" id="myForm">
                <form className="form-container">
                    <label><b><i>OTP has been sent to your email</i></b></label><br /><br />
                    <label><b><i>It will expiry within 5 minutes</i></b></label><br /><br />
                    <label><b><i>OTP : <input type="text" id="otp" /></i></b></label>
                    <button type="submit" className="btn0"><b><i>Login</i></b></button>
                    <button type="submit" className="btn1"><b><i>Resend OTP</i></b></button>
                    <button type="button" className="btn cancel"><b><i>Close</i></b></button>
                </form>
            </div>
        </>
    )
}

function Add(e, props) {
    if (props.type1 === "cust") {
        return (
            <>  e.preventDefault();
                <label for="rid"><b><i>Customer ID</i></b></label>
                <input type="text" placeholder="Enter Restaurant ID" name="rid" required />
            </>
        )
    }
    else if (props.type1 === "owner") {
        return (
            <>  e.preventDefault();
                <label for="rid"><b><i>Owner ID</i></b></label>
                <input type="text" placeholder="Enter Restaurant ID" name="rid" required />
            </>
        )
    }
}


export default Signup;