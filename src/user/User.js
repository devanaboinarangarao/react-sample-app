import React from 'react';
import './User.css';
import '../App.css';
// import Radium from 'radium';
const user = (props) => {
    const buttonStyle = {
        backgroundColor: "#f4f4f4",
        padding: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        cursor : "pointer",
        ":hover" : {
            backgroundColor : "black",
            color : "#fff"
        }
        // color: "#"
      };
    // const mdQry = {
    //     "@media (max-width : 500px)" : {
    //         backgroundColor : "blue"
    //     }
    // }
    let styles = ["col", "weight"].join(' ');
    return (
        // <div className="User" style={mdQry}>
        <div className="User" >

            <h1 className={styles}>{props.name}</h1>
            <hr/>
            <p>{props.position}</p>
            <p>{props.children}</p>
            <input name="name" type="text" value={props.name} onChange={props.change}/>
            <br/>
            <br/>
            {/* <button onClick={props.update}>Update</button> */}
            <button style={buttonStyle} onClick={props.delete}>Delete</button> 
        </div>
    )
}

// export default Radium(user);
export default user;
