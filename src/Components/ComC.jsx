import React, { useContext } from 'react';
import {FirstName,LastName} from '../App';


const ComC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const [name,setName] = useContext(FirstName);

    return (
        <>
        <div>
            {/* <FirstName.Consumer>
                {(fname)=>{
                  return (
                      <LastName.Consumer>
                          {(lname)=>{
                              return <h1> My name is {fname} {lname}</h1>
                          }}
                      </LastName.Consumer>
                  )
                }}
            </FirstName.Consumer> */}
            <p>Here , 'App' component e Name delare korar por , context api diya seta 'ComC' te niye sekhane input field dara change kora jacse .</p>
            <button onClick={()=>setName('ashik')}>click for changing gname </button>
            <h1>This entered name is :{name}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
           
        </div>
        </>
    );
}

export default ComC;