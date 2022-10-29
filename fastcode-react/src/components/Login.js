import React from 'react';
import '../css/Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    } 

    render(){
        return(
            <div className="login">
                <div>
                    <span title="login">Sign in</span>
                    <span title="create a new account">Sign up</span>
                </div>
                <div>
                    <span>account name</span>
                    <span title="logout">Sign out</span>
                </div>
                
            </div>
        );
    }
}

export default Login;