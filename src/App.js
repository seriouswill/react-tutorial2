import React, {useState} from "react";
import Tweet from "./tweet"



function App() {

  const [users, setUsers] = useState([
    {name: "Ed", message: "Random Tweet", likes: 0},
    {name: "Bill", message: "Fantastic Tweet", likes: 0},
    {name: "Greg", message: "Bloody good Tweet", likes: 0},
    ]);
  

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}

      
      {/* <Tweet name="Will" message="Random Tweet" number="3"/>
      <Tweet name="Kate" message="Different Tweet" number="5"/>
      <Tweet name="Paddy" message="Silly Tweet" number="6"/>
      <Tweet name="Pip" message="Dark Tweet" number="7"/>
      <Tweet name="Sammy" message="Daft Tweet" number="8"/> */}
      
    </div>
  );
}

export default App;
