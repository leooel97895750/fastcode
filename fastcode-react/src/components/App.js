import React from 'react';
import '../css/App.css';
import NavBar from './NavBar';
import TypeScreen from './TypeScreen';
import Login from './Login';
import RankList from './RankList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    } 

    render(){
        return(
            <div>
                <NavBar/>
                <TypeScreen/>
                <Login/>
                <RankList/>
            </div>
        );
    }
}

export default App;