import React from 'react'


export const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    };
    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
   { /*  const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };*/}
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose A Login Method</h1>
        <div className='wrapper'>
            <div className='left'>
                <div className='loginButton google' onClick={google}>
                    <img className='icon' src='https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/google.png' alt='' />
                        Google
                     </div>
                   { /*<div className='loginButton facebook' onClick={facebook}>
                         <img className='icon' src='https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/facebook.png' alt=''/>
                         Facebook
                    </*div>*/}
                   <div className='loginButton github' onClick={github}>
                    <img className='icon' src='https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/github.png' alt=''/>
                    Github
               </div>
            </div>
            <div className='center'>
                <div className='line'></div>
                <div className='or'>OR</div>
            </div>
            <div className='right'>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}
