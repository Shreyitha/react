import Emps from './Emps';

function App() {
  const emp=[
    {id:'e1',name:'Shreyitha',doj:new Date(2022,8,12),exp:2},
    {id:'e2',name:'Harshitha',doj:new Date(2020,5,2),exp:1},
    {id:'e3',name:'Manisha',doj:new Date(2023,12,8),exp:4},
    {id:'e4',name:'Sakshi', doj:new Date(2021,3,7),exp:3},
]


  return (
    <div>
    <h1> Let's get started</h1>
    <Emps items={emp}/>
    </div>
  );
}

export default App;