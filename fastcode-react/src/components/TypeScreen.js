import React from 'react';
import '../css/TypeScreen.css';
import Keyboard from './Keyboard';

class TypeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 1, // 1:英文、0:中文
            keyName: '',
        };
    } 

    // 一開始就聚焦以便監聽鍵盤
    componentDidMount = () => {
        document.getElementsByClassName('typeScreen')[0].focus();
    }

    // 監聽鍵盤 Shift需特別分左右
    handleKeyDown = (e) => {
        // console.log(e.key, e.keyCode);
        let myKey = e.key;
        if(myKey === 'Shift'){
            myKey = myKey + e.location;
        }
        this.setState({
            keyName: myKey,
        });
    }

    render(){
        return(
            <div className='typeScreen' onKeyDown={this.handleKeyDown} tabIndex='0'>
                <Keyboard
                    mode = {this.state.mode}
                    keyName = {this.state.keyName}
                />
            </div>
        );
    }
}

export default TypeScreen;