import React, {useState} from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App(){
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="bg-gray-900">
      <UserForm onSubmit={addUser}/>
      <UserList users={users}/>

    </div>
  ); 
}

export default App;