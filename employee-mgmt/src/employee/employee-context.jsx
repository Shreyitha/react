import { createContext, useReducer } from "react";
import { useState } from "react";

export const EmployeeContext = createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state,action){
    const updatedEmployees=[...state]

    if(action.type ==='ADD_EMPLOYEE'){
        const employeeData={
            ...action.payload,
            id: Math.random().toString()
        };

        updatedEmployees.push(employeeData);
    }
    return updatedEmployees;
}


export default function EmployeeContextProvider({children}){
    const DUMP_EMPLOYEES=[
        {id:1,empname:'shreyitha',dob:new Date(2001,7,10),yoe:3},
        {id:2,empname:'harshitha',dob:new Date(2021,8,4),yoe:2},
        {id:3,empname:'manisha',dob:new Date(2023,10,9),yoe:2},
        {id:4,empname:'sakshi',dob:new Date(2020,9,3),yoe:5}
    ];
    
    const[employees,dispatch]=useReducer(employeeReducer,DUMP_EMPLOYEES);

    const addEmployeeHandler=employee=>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload:employee
            }
        )
    }
    const contextValue={
        items: employees,
        onSaveEmployeeData: addEmployeeHandler
    };
    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}