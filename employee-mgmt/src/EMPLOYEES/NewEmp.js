import './NewEmp.css'

const NewEmploye=({children})=>{

    return (
        
        // <div className="new-emp">
        //     <EmployeForm/>
        // </div>

        <div className="new-emp">
            {children}
        </div>
    );
}


export default NewEmploye;