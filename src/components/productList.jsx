const ProjectList = () => {
  const proList = [
    {
      id: 1,
      name: "laptop",
      price: 1200,
      available: "in stock",
    },
    {
      id: 2,
      name: "computer",
      price: 1100,
      available: "in stock",
    },
    {
      id: 3,
      name: "pc",
      price: 1000,
      available: "not in stock",
    },
  ];


  return <div>

    {proList.map(({id,name,price,available})=>(
        <ul key={id}>

            <li>Name : {name}</li>
            <li>Price : {price}</li>
            <li>Available : {available}</li>
        </ul>

    ))}
  </div>

};

export default ProjectList;
