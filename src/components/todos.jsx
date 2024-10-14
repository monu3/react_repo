import { useEffect, useState } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setData(data);
    }

    getData();
  });

    return <div>
        <ul>
        {data.map(todo=>(
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ul>
    </div>;
   
};


export default ApiData;