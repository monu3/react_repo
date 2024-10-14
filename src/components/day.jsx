import "./index.css";


const Day = ({day})=>{
    return day==="morning"?<h1>Good morning !!</h1>:<h1>Good Afternoon !!</h1>
}

export default Day;