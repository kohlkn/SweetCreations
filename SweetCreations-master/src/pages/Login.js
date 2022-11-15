import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(){
    return (
        <>
            <div class='header'>
                <Link to='/Home' class='logoheader'>
                    Sweet
                    <br></br>
                    Creations
                </Link>
            </div>
            
            <br></br>
            <body class='body'>
                <br></br>
                <h1>Login</h1>
                <div class='user'>
                    Username: <input label='username'></input>
                </div>
                <br></br>
                <div class='pass'>
                Password: <input label='password' type='password'></input>
                </div>
                <br></br>
                <label class='signup'>Don't have an account? <Link to='/SignUp' class='link'>Sign up here</Link></label>
                <br></br>
                <br></br>
                <button class='butt'>Login</button>
            </body>
        </>
    );
}