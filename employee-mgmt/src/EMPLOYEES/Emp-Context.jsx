import {createContext, useReducer } from "react";

export const EmpContext=createContext({
    items:[],
    onSaveEmpData:()=>[],
});

function empReducer(state,action){
    const updatedEmps=[...state]

    if(action.type==="ADD_EMP"){
        const empData={
            ...action.payload,
            id: Math.random().toString(),
        };
        updatedEmps.push(empData)
      
        //   setEmps((previousEmp)=>{
        //     return [empData,...previousEmp];
        //   });
    }
        return updatedEmps;
    
}

export default function EmpContextProvider({children}){
    const DUMP_EMPS=[
        {id:'e1',Name:'Shreyitha',DOJ:new Date(2023,3,1),Experience:3},
        {id:'e2',Name:'Harshitha',DOJ:new Date(2020,11,4),Experience:2},
        {id:'e3',Name:'Manisha',DOJ:new Date(2022,5,7),Experience:5},
        {id:'e4',Name:'Sakshi',DOJ:new Date(2021,10,9),Experience:4},
      ];
    
    
    const [emps,dispatch]=useReducer(empReducer,DUMP_EMPS)
    // const[emps,setEmps]=useState(DUMP_EMPS);

    const addEmpHandler=(emp)=>{
        dispatch(
            {
                type:'ADD_EMP',
                payload:emp
            }
        )
    }


    const contextValue={
        items:emps,
        onSaveEmpData:addEmpHandler
      }
      return <EmpContext.Provider value={contextValue}>
        {children}
      </EmpContext.Provider>
    
}