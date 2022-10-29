import React from 'react';
import '../css/TypeScreen.css';
import Keyboard from './Keyboard';

class TypeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 1, // 1:英文、0:中文
        };
    } 

    render(){
        return(
            <div className="typeScreen">
                <Keyboard
                    mode = {this.state.mode}
                />
            </div>
        );
    }
}

export default TypeScreen;