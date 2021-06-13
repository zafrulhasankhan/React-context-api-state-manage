// import React from 'react';
// import './App.css';
// import FunctionContext from './FunctionContext';
// import { ThemeProvider } from './ThemeContext';




// export default function App() {

//   return (
//     <>
//       <ThemeProvider>
//         <FunctionContext />
//       </ThemeProvider>
//     </>
//   );
// }


import React, { createContext, useState } from 'react';
import ComA from './Components/ComA';

export const FirstName = createContext();
export const LastName = createContext();



const App=()=>{
  
  const [name,setName] = useState('jaber');
  return (
       <>
         <FirstName.Provider value={[name,setName]}>
           <LastName.Provider value="nasim khan">
             <ComA />
           </LastName.Provider>
         </FirstName.Provider>
       </>
    );
}
export default App;