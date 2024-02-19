import './EmpDate.css'

const EmpDate=(props)=>{
    if (props.date){

        const month=props.date.toLocaleString('en-US',{month:"long"});
        const date=props.date.toLocaleString('en-US',{day:"2-digit"});
        const year=props.date.getFullYear();
        return(
        <div className='employee-date'>
            <div><b>{month}</b></div>
            <div>{year}</div>
            <div><b>{date}</b></div>
            </div>
        );
    }
    else {
    return <div>No date provided</div>;
    }

}
export default EmpDate;