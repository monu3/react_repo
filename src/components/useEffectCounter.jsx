import { useEffect, useState } from "react"

const EffectCounter =()=>{
    const  [count,setCount] = useState(0);


    useEffect(()=>{

        document.title = `Count : ${count}`;

    },[count]);

    return <div>

        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click me </button>
    </div>
}

export default EffectCounter;