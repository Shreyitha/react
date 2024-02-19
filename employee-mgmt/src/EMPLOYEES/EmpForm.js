import './EmpForm.css'

import { useState } from 'react';

const EmployeForm=(props)=>{


    const [enteredName, setEnteredName]=useState('');
    const [enteredExp, setEnteredExp]=useState('');
    const [enteredDoj, setEnteredDoj]=useState('');

    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const ExpChangeHandler=(event)=>{
        setEnteredExp(event.target.value);
    }
    const dojChangeHandler=(event)=>{
        setEnteredDoj(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();


        const empData={
            Name:enteredName,
            Experience:enteredExp,
            DOJ:new Date(enteredDoj)
        }
        // console.log(employeData);
        props.onSaveEmpData(empData)
        setEnteredName('');
        setEnteredExp('');
        setEnteredDoj('');

    }

    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-emp_forms">
                    <div className="new-emp_form">
                        <label>Name</label>
                        <input type="text" onChange={NameChangeHandler} value={enteredName}/>
                    </div>
                    <div className="new-emp_form">
                        <label>Expeience</label>
                        <input type="number"min="0.01" step="0.01" onChange={ExpChangeHandler} value={enteredExp}/>
                    </div>
                    <div className="new-emp_form">
                        <label>DOJ</label>
                        <input type='date' min='2019-01-01' max='2024-12-31' onChange={dojChangeHandler} value={enteredDoj}/>
                    </div>
                    <div className="new-emp_action">
                        <button  type="submit" >Add expense</button>
                    </div>
            </div>
        </form>
        

    );
}
export default EmployeForm;