import React from 'react';
import '../css/Keyboard.css';

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 按鍵與id的對照表
            keyTable: {
                // first row
                '~':'k1', '`':'k1', '!':'k2', '1':'k2', '@':'k3', '2':'k3', '#':'k4', '3':'k4', '$':'k5', '4':'k5',
                '%':'k6', '5':'k6', '^':'k7', '6':'k7', '&':'k8', '7':'k8', '*':'k9', '8':'k9', '(':'k10', '9':'k10',
                ')':'k11', '0':'k11', '_':'k12', '-':'k12', '+':'k13', '=':'k13', 'Backspace':'k14',
                // second row
                'Tab':'k15', 'Q':'k16', 'q':'k16', 'W':'k17', 'w':'k17', 'E':'k18', 'e':'k18', 'R':'k19', 'r':'k19',
                'T':'k20', 't':'k20', 'Y':'k21', 'y':'k21', 'U':'k22', 'u':'k22', 'I':'k23', 'i':'k23', 'O':'k24', 'o':'k24',
                'P':'k25', 'p':'k25', '{':'k26', '[':'k26', '}':'k27', ']':'k27', '|':'k28', '\\':'k28',
                // third row
                'CapsLock':'k29', 'A':'k30', 'a':'k30', 'S':'k31', 's':'k31', 'D':'k32', 'd':'k32', 'F':'k33', 'f':'k33',
                'G':'k34', 'g':'k34', 'H':'k35', 'h':'k35', 'J':'k36', 'j':'k36', 'K':'k37', 'k':'k37', 'L':'k38', 'l':'k38',
                ':':'k39', ';':'k39', '"':'k40', "'":'k40', 'Enter':'k41',
                // fourth row
                'Shift1':'k42', 'Z':'k43', 'z':'k43', 'X':'k44', 'x':'k44', 'C':'k45', 'c':'k45', 'V':'k46', 'v':'k46',
                'B':'k47', 'b':'k47', 'N':'k48', 'n':'k48', 'M':'k49', 'm':'k49', '<':'k50', ',':'k50', '>':'k51', '.':'k51',
                '?':'k52', '/':'k52', 'Shift2':'k53',
            }
        };
    }

    keyOnPress = () => {
        // console.log(this.props.keyName);
        let keyId = this.state.keyTable[this.props.keyName];
        if(keyId !== undefined){

            // console.log(keyId);

            // 改變按下的按鍵顏色
            let myKey = document.getElementById(keyId);
            myKey.style.color = 'red';
            myKey.style.border = '2px solid red';

            // 1秒後改回原本的顏色
            setTimeout((myKey) => {
                myKey.style.color = 'lightgray';
                myKey.style.border = '2px solid #505050';
            }, 400, myKey);
        }
    }

    render(){

        // m=1:英文、m=0:中文
        let m = this.props.mode;
        this.keyOnPress();

        return(
            <div className='keyboard'>
                <div className='placeCenter'>
                    <div className='keys'>
                        <div>
                            <span id='k1'>~ `</span>
                            <span id='k2'>{m ? '! 1' : '1 ㄅ'}</span>
                            <span id='k3'>{m ? '@ 2' : '2 ㄉ'}</span>
                            <span id='k4'>{m ? '# 3' : '3 ˇ'}</span>
                            <span id='k5'>{m ? '$ 4' : '4 ˋ'}</span>
                            <span id='k6'>{m ? '% 5' : '5 ㄓ'}</span>
                            <span id='k7'>{m ? '^ 6' : '6 ˊ'}</span>
                            <span id='k8'>{m ? '& 7' : '7 ˙'}</span>
                            <span id='k9'>{m ? '* 8' : '8 ㄚ'}</span>
                            <span id='k10'>{m ? '( 9' : '9 ㄞ'}</span>
                            <span id='k11'>{m ? ') 0' : '0 ㄢ'}</span>
                            <span id='k12'>{m ? '_ -' : '- ㄦ'}</span>
                            <span id='k13'>+ =</span>
                            <span id='k14' style={{width:'100px'}}>backspace</span>
                        </div>
                        <div>
                            <span id='k15' style={{width:'60px'}}>tab</span>
                            <span id='k16'>{m ? 'Q' : 'ㄆ'}</span>
                            <span id='k17'>{m ? 'W' : 'ㄊ'}</span>
                            <span id='k18'>{m ? 'E' : 'ㄍ'}</span>
                            <span id='k19'>{m ? 'R' : 'ㄐ'}</span>
                            <span id='k20'>{m ? 'T' : 'ㄔ'}</span>
                            <span id='k21'>{m ? 'Y' : 'ㄗ'}</span>
                            <span id='k22'>{m ? 'U' : 'ㄧ'}</span>
                            <span id='k23'>{m ? 'I' : 'ㄛ'}</span>
                            <span id='k24'>{m ? 'O' : 'ㄟ'}</span>
                            <span id='k25'>{m ? 'P' : 'ㄣ'}</span>
                            <span id='k26'>{'{ ['}</span>
                            <span id='k27'>{'} ]'}</span>
                            <span id='k28' style={{width:'80px'}}>| \</span>
                        </div>
                        <div>
                            <span id='k29' style={{width:'80px'}}>c lock</span>
                            <span id='k30'>{m ? 'A' : 'ㄇ'}</span>
                            <span id='k31'>{m ? 'S' : 'ㄋ'}</span>
                            <span id='k32'>{m ? 'D' : 'ㄎ'}</span>
                            <span id='k33'>{m ? 'F' : 'ㄑ'}</span>
                            <span id='k34'>{m ? 'G' : 'ㄕ'}</span>
                            <span id='k35'>{m ? 'H' : 'ㄘ'}</span>
                            <span id='k36'>{m ? 'J' : 'ㄨ'}</span>
                            <span id='k37'>{m ? 'K' : 'ㄜ'}</span>
                            <span id='k38'>{m ? 'L' : 'ㄠ'}</span>
                            <span id='k39'>{m ? ': ;' : 'ㄤ'}</span>
                            <span id='k40'>" '</span>
                            <span id='k41' style={{width:'108px'}}>enter</span>
                        </div>
                        <div>
                            <span id='k42' style={{width:'100px'}}>shift</span>
                            <span id='k43'>{m ? 'Z' : 'ㄈ'}</span>
                            <span id='k44'>{m ? 'X' : 'ㄌ'}</span>
                            <span id='k45'>{m ? 'C' : 'ㄏ'}</span>
                            <span id='k46'>{m ? 'V' : 'ㄒ'}</span>
                            <span id='k47'>{m ? 'B' : 'ㄖ'}</span>
                            <span id='k48'>{m ? 'N' : 'ㄙ'}</span>
                            <span id='k49'>{m ? 'M' : 'ㄩ'}</span>
                            <span id='k50'>{m ? '< ,' : 'ㄝ'}</span>
                            <span id='k51'>{m ? '> .' : 'ㄡ'}</span>
                            <span id='k52'>{m ? '? /' : 'ㄥ'}</span>
                            <span id='k53' style={{width:'136px'}}>shift</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;