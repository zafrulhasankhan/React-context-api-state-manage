import React, { Component } from 'react';
import { ThemeContext } from './App';

class ClassContext extends Component {

    themeStyle(dark){
        return{
            backgroundColor: dark?'#333':'#ccc',
            color:dark?'#ccc':'#333',
            padding:'2rem',
            margin:'2rem'
        }

    }
    render() {
        return (
            <ThemeContext.Consumer>
                {darktheme=>{
                    return <div style={this.themeStyle(darktheme)}>class theme</div>
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default ClassContext;