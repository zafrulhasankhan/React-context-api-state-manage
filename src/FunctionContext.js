import React from 'react';
import {useTheme,useUpdateTheme } from './ThemeContext';

export default function FunctionContext(props) {
    const darkTheme = useTheme();
    const ToogleTheme = useUpdateTheme();

    //const darktheme = useContext(ThemeContext);
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
        <button onClick={ToogleTheme}>ToogleTheme</button>
        <div style={themeStyle}> 
         
           function theme
        </div>
        </>
    );
}

