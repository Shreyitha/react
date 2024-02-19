
import React, { useState } from 'react';
import EmpDate from './EmpDate';
import './EmpDetails.css'




const EmpDetails=(props)=>{

    // let name=props.name;

    const[name,setName]=useState(props.name);
    const clickHandler=()=>{
        console.log("clicked!");
        setName("changed");

    }

    return(
            <div className="Emp-details">
                <EmpDate date={props.doj}/>
                <div><h2>{name}</h2></div>
                <div className='Emp-details-exp'>{props.exp}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>

    );
}
export default EmpDetails