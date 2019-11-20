import React, { useState } from 'react';
import './App.css';
import User from './user/User';
// import Radium, { StyleRoot } from 'radium';

const App = (props) => {

  let [usersData, setUsers] = useState({
    users: [
      { name: 'Rangarao devanaboina', position: 'Software Developer' },
      { name: 'Ramya Devanaboina', position: 'Accountant' }
    ]
  });
  let [toggle, setToggle] = useState({ show: true });

  // console.log(usersData)


  const handleChange = (index, event) => {
    console.log(index, event.target.value);
    let usersD = usersData.users;
    console.log(usersD[index].name);
    usersD[index].name = event.target.value;
    console.log(usersD)
    let obj = {
      users: usersD,
    }
    setUsers(obj)
    console.log(obj)

  }

  const toggleUsersHandler = () => {
    let t = !toggle.show;
    let obj = {
      show: t
    }
    console.log(toggle.show);

    setToggle(obj)
    console.log(toggle.show);
  }

  const deleteHandler = (index) => {
    console.log("in delete", index);
    let usersD = { ...usersData };
    let u = usersD.users;
    u.splice(index, 1);
    setUsers(usersD);
  }
  const updatehandler = (index) => {
    console.log("in update", index)

  }

  const buttonStyle = {
    backgroundColor: "coral",
    padding: "10px",
    border: "1px solid #ccc",
    fontSize: "18px",
    color: "#fff",
    cursor: "pointer",
    // ":hover": {
    //   backgroundColor: "#fff",
    //   color: "coral"
    // }
  }

  let showDiv = <h1>No Data Found</h1>;
  buttonStyle.backgroundColor = "green";
  if (toggle.show) {
    buttonStyle.backgroundColor = "coral";
    showDiv =
      (<div className="grid">
        <h1>{props.title}</h1>
        {usersData.users.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              position={user.position}
              change={handleChange.bind(this, index)}
              update={() => updatehandler(index)}
              delete={deleteHandler.bind(this, index)}
            >Hyderabad</User>)
        })}
      </div>)
  }
  return (
    // <StyleRoot>
      <div className="App">
        <br />
        <button style={buttonStyle} onClick={toggleUsersHandler}>Toggle Users</button>
        {showDiv}

      </div>
    // </StyleRoot>
  );

}

// export default Radium(App);
export default App;

