import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const DUMP_EMPLOYEES=[
    {id:1,empname:'shreyitha',dob:new Date(2001,7,10),yoe:3},
    {id:2,empname:'harshitha',dob:new Date(2021,8,4),yoe:2},
    {id:3,empname:'manisha',dob:new Date(2023,10,9),yoe:2},
    {id:4,empname:'sakshi',dob:new Date(2020,9,3),yoe:5}
];

const initialState={items: DUMP_EMPLOYEES};
const employeeSlice= createSlice({
    name: 'employee',
    initialState: initialState,
    reducers:{
        addEmployee(state,action){
            const employeeData={
                ...action.payload,
                id: Math.random().toString()
            };
    
            state.items.push(employeeData);

        }
    }
});
export const sendEmployeeData = (employeeData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://employees-9eeef-default-rtdb.firebaseio.com/', {
                method: 'PUT',
                body: JSON.stringify(employeeData),
              });

              if(!response.ok) {
                throw new Error("Sending expense data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
}

const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});
export default employeeStore;
export const employeeActions=employeeSlice.actions;