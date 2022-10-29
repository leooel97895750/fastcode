import React from 'react';
import '../css/RankList.css';

class RankList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    } 

    render(){
        return(
            <div className="rankList">
                <div>
                    <span title="total number of words you typed">Rank</span>
                </div>
                <div>
                    <span>Code %</span>
                </div>
                <div>
                    <span>English %</span>
                </div>
                <div>
                    <span>中文 %</span>
                </div>
                <div>
                    <span>music %</span>
                </div>
            </div>
        );
    }
}

export default RankList;