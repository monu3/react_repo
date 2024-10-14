import { createContext, useContext, useState } from "react";

const userContext = createContext();

const Component1 = () => {
  const [user, setuser] = useState("monu siddiki");

  return (
    <userContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </userContext.Provider>
  );
};

const Component2 = () => {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
};
const Component4 = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
};


export default Component1;