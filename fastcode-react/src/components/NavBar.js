import React from 'react';
import '../css/NavBar.css';
import fastcodeLogo from '../image/fastcode_logo.png';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    } 

    render(){
        return(
            <div className="navBar">
                <img src={fastcodeLogo} title="FastCode!" style={{width:'240px', height:'80px'}}/>
                <div>
                    <span>Code</span>
                </div>
                <div>
                    <span>English</span>
                </div>
                <div>
                    <span>中文</span>
                </div>
                <div>
                    <span>Music</span>
                </div>
                <div>
                    <span>Settings</span>
                </div>
            </div>
        );
    }
}

export default NavBar;