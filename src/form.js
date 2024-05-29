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