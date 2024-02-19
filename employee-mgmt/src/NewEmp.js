import EmployeForm from "./EmpForm";
import './NewEmp.css'

const NewEmploye=(props)=>{

    const saveEmpDataHandler=(enteredEmpData)=>{
    
        const empData={
            ...enteredEmpData,
            id: Math.random().toString(),
        };
        props.onEmpAdded(empData)
    }

    return (
        
        // <div className="new-emp">
        //     <EmployeForm/>
        // </div>

        <div className="new-emp">
            <EmployeForm onSaveEmpData={saveEmpDataHandler}/>

        </div>
    );
}


export default NewEmploye;