import { useEffect } from 'react';
import EmployeForm from './EmpForm';
import Emps from './Emps';
import NewEmploye from './NewEmp';
// import {useState}from 'react';
// import { EmpContext } from './emp-context';
import EmpContextProvider from './emp-context';
import {useSelector,useDispatch} from 'react-redux';
import { sendEmpData } from './EMPLOYEES';


const App=() =>{
  const items=useSelector(state=>state.items);
  const dispatch=useDispatch();


  useEffect(
    ()=>{
      dispatch(sendEmpData(items))

      // fetch('https://empreact-default-rtdb.firebaseio.com/emp.json',{
      //   method:'PUT',
      //   body:JSON.stringify(items)
      // })
    },
    [items,dispatch]
  );

  return (
    <EmpContextProvider>
      <div>
        <h1> Let's get started</h1>
        <NewEmploye >
          <EmployeForm />
        </NewEmploye>
        <Emps/>
      </div>
    </EmpContextProvider>
  );
}

export default App;