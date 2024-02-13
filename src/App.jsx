import { useState } from "react";
import Form from "./components/Form/index";
import List from "./components/List/index";
import { testUsers } from "./constant/testData";
const App = () => {
  const [users, setUsers] = useState(testUsers);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <div className="container ">
      <h2 className="text-center  py-5 ">Kullanıcı Paneli</h2>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default App;
