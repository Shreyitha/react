import EmpDetails from "./EmpDetails";
import './Emps.css';

function Emps(props){

    return(
    <div className='Emps'>
    <h1>Employee Details</h1>
      <EmpDetails name={props.items[0].name} doj={props.items[0].doj} exp={props.items[0].exp}></EmpDetails>
      <EmpDetails name={props.items[1].name} doj={props.items[1].doj} exp={props.items[1].exp}></EmpDetails>
      <EmpDetails name={props.items[2].name} doj={props.items[2].doj} exp={props.items[2].exp}></EmpDetails>
      <EmpDetails name={props.items[3].name} doj={props.items[3].doj} exp={props.items[3].exp}></EmpDetails>
    </div>

    );
}
export default Emps;