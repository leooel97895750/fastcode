import React from 'react';
import '../css/Keyboard.css';

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    } 

    render(){

        // m=1:英文、m=0:中文
        let m = this.props.mode;

        return(
            <div className='keyboard'>
                <div className='placeCenter'>
                    <div className='keys'>
                        <div>
                            <span>~ `</span>
                            <span>{m ? '! 1' : '1 ㄅ'}</span>
                            <span>{m ? '@ 2' : '2 ㄉ'}</span>
                            <span>{m ? '# 3' : '3 ˇ'}</span>
                            <span>{m ? '$ 4' : '4 ˋ'}</span>
                            <span>{m ? '% 5' : '5 ㄓ'}</span>
                            <span>{m ? '^ 6' : '6 ˊ'}</span>
                            <span>{m ? '& 7' : '7 ˙'}</span>
                            <span>{m ? '* 8' : '8 ㄚ'}</span>
                            <span>{m ? '( 9' : '9 ㄞ'}</span>
                            <span>{m ? ') 0' : '0 ㄢ'}</span>
                            <span>{m ? '_ -' : '- ㄦ'}</span>
                            <span>+ =</span>
                            <span style={{width:'100px'}}>backspace</span>
                        </div>
                        <div>
                            <span style={{width:'60px'}}>tab</span>
                            <span>{m ? 'Q' : 'ㄆ'}</span>
                            <span>{m ? 'W' : 'ㄊ'}</span>
                            <span>{m ? 'E' : 'ㄍ'}</span>
                            <span>{m ? 'R' : 'ㄐ'}</span>
                            <span>{m ? 'T' : 'ㄔ'}</span>
                            <span>{m ? 'Y' : 'ㄗ'}</span>
                            <span>{m ? 'U' : 'ㄧ'}</span>
                            <span>{m ? 'I' : 'ㄛ'}</span>
                            <span>{m ? 'O' : 'ㄟ'}</span>
                            <span>{m ? 'P' : 'ㄣ'}</span>
                            <span>{'{ ['}</span>
                            <span>{'} ]'}</span>
                            <span style={{width:'80px'}}>| \</span>
                        </div>
                        <div>
                            <span style={{width:'80px'}}>c lock</span>
                            <span>{m ? 'A' : 'ㄇ'}</span>
                            <span>{m ? 'S' : 'ㄋ'}</span>
                            <span>{m ? 'D' : 'ㄎ'}</span>
                            <span>{m ? 'F' : 'ㄑ'}</span>
                            <span>{m ? 'G' : 'ㄕ'}</span>
                            <span>{m ? 'H' : 'ㄘ'}</span>
                            <span>{m ? 'J' : 'ㄨ'}</span>
                            <span>{m ? 'K' : 'ㄜ'}</span>
                            <span>{m ? 'L' : 'ㄠ'}</span>
                            <span>{m ? ': ;' : 'ㄤ'}</span>
                            <span>" '</span>
                            <span style={{width:'108px'}}>enter</span>
                        </div>
                        <div>
                            <span style={{width:'100px'}}>shift</span>
                            <span>{m ? 'Z' : 'ㄈ'}</span>
                            <span>{m ? 'X' : 'ㄌ'}</span>
                            <span>{m ? 'C' : 'ㄏ'}</span>
                            <span>{m ? 'V' : 'ㄒ'}</span>
                            <span>{m ? 'B' : 'ㄖ'}</span>
                            <span>{m ? 'N' : 'ㄙ'}</span>
                            <span>{m ? 'M' : 'ㄩ'}</span>
                            <span>{m ? '< ,' : 'ㄝ'}</span>
                            <span>{m ? '> .' : 'ㄡ'}</span>
                            <span>{m ? '? /' : 'ㄥ'}</span>
                            <span style={{width:'136px'}}>shift</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;