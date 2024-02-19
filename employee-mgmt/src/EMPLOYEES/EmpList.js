import EmpDetails from "./EmpDetails";
import './EmpList.css'

const EmpList=props=>{

    if (props.items.length===0){
        return <h2 className="emp-list">No Employee Details Found</h2>
    }
    return(
        <ul>
            {
                props.items.map((emp) => (
                <EmpDetails key={emp.id} 
                            name={emp.Name} 
                            doj={emp.DOJ} 
                            exp={emp.Experience} />
                ))
            }
        </ul>
    )
}

export default EmpList;