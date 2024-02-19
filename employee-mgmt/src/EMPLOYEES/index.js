import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const DUMP_EMPS=[
    {id:'e1',Name:'Shreyitha',DOJ:new Date(2023,3,1),Experience:3},
    {id:'e2',Name:'Harshitha',DOJ:new Date(2020,11,4),Experience:2},
    {id:'e3',Name:'Manisha',DOJ:new Date(2022,5,7),Experience:5},
    {id:'e4',Name:'Sakshi',DOJ:new Date(2021,10,9),Experience:4},
  ];

  const initialState={items:DUMP_EMPS};
  const empSlice=createSlice({
    name:'emp',
    initialState: initialState,
    reducers:{
        addEmp(state,action){
            const empData={
                ...action.payload,
                id: Math.random().toString(),
            };
            state.items.push(empData);
        }, 
    }

  });

  export const sendEmpData=(empData)=>{
    return async(dispatch)=>{
        const sendRequest=async()=>{
            const response=await fetch('https://empreact-default-rtdb.firebaseio.com/emp.json',{
                method:'PUT',
                body:JSON.stringify(empData),
              });
              if(!response.ok){
                throw new Error("Sending emp data failed");
              }
        };
        try{
            await sendRequest();
        }catch (error){
            console.log(error);

        }
    }
  }

// const empReducer=(state={items:DUMP_EMPS},action)=>{
//     const updatedEmps=[...state.items]
//     if(action.type==="ADD_EMP"){
//         const empData={
//             ...action.payload,
//             id: Math.random().toString(),
//         };
//         updatedEmps.push(empData)
//         return {items:updatedEmps}
//     }
//     return state;
// }
// const empStore =createStore(empReducer);

const empStore=configureStore({
    reducer:empSlice.reducer
});


export default empStore;
export const empActions=empSlice.actions;