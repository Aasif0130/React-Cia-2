import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Signin.css";

function Signin() {

    const [Type, setType] = useState("Sign In");

    const owner = () => {
        setType("Owner Sign In");
    }

    const employee = () => {
        setType("Employee Sign In");
    }

    const customer = () => {
        setType("Customer Sign In");
    }

    const up = useFup();

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
                    {/* <div classNameName="dropdown">
                        <button className="dropbtn" id="page"><b><i>{Type}</i></b></button>
                        <div className="dropdown-content">
                            <p id="owner" onclick={owner}><b><i>Owner</i></b></p>
                            <p id="Customer" onclick={customer}><b><i>Customer</i></b></p>
                            <p id="Employee" onclick={employee}><b><i>Employee</i></b></p>
                        </div>
                    </div> */}

                    <p><b><i>Please fill in this form to login in to your account.</i></b></p>
                    <hr />
                    <label for="email"><b><i>Email</i></b></label>
                    <input className="in" type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b><i>Password</i></b></label>
                    <input className="in" type="password" placeholder="Enter Password" name="psw" required />

                    <label id="addon"></label>

                    {/* <center><button className="open-button" onclick={openForm}><b><i>Verify</i></b></button></center> */}

                    <div className="clearfix">

                        <Link to="/"><button type="button" className="cancelbtn"><b><i>Cancel</i></b></button></Link>
                        <Link to="/welcome"><button type="button" className="signinbtn" onClick={up}><b><i>Signin</i></b></button></Link>

                    </div>
                </form>
            </div>

            {/* <div className="form-popup" id="myForm">
                <form action="index.html" className="form-container">
                    <label><b><i>OTP has been sent to your email</i></b></label><br /><br />
                    <label><b><i>It will expiry within 5 minutes</i></b></label><br /><br />
                    <label><b><i>OTP : </i></b><input type="text" id="otpval" /></label>
                    <button type="submit" className="btn1" ><b><i>Login</i></b></button>
                    <button type="submit" className="btn0" ><b><i>Resend OTP</i></b></button>
                    <button type="button" className="btn_cancel" onclick={closeForm}><b><i>Close</i></b></button>
                </form>
            </div> */}
        </>
    )
}

function useFup() {
    const [val, setVal] = useState(0);
    return () => setVal(val => val + 1);
}

export default Signin;