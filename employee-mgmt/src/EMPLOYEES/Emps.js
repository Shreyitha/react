import React, { useState, useContext} from 'react';
import EmpList from './EmpList';
import EmpFilter from "./EmpFilter";
import { EmpContext } from './emp-context';
import {useSelector} from "react-redux";

import './Emps.css';

const Emps = (props) => {
  // const empCtx=useContext(EmpContext);
  const items=useSelector(state=>state.items);


  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEmps = items.filter(emp => {
    return emp.DOJ.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='Emps'>
      <EmpFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <EmpList items={filteredEmps}/>

    </div>
  );
}
export default Emps;