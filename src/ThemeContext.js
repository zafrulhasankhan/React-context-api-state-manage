import React, { Children,useContext,useState } from 'react';

const ThemeContext = React.createContext();
const UpdateTheme = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useUpdateTheme() {
    return useContext(UpdateTheme);
}

export function ThemeProvider(props) {
    const [darktheme,setDarkTheme] = useState(true);
    
    function ToogleTheme(){
      setDarkTheme(prevTheme=>!prevTheme);
    }
  
    return (
        <ThemeContext.Provider value={darktheme}>
            <UpdateTheme.Provider value={ToogleTheme}>
              {Children} 
            </UpdateTheme.Provider>

        </ThemeContext.Provider>
    );
}

export default ThemeContext;