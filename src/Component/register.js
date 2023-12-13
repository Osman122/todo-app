import React, { useState } from "react";


export default function Register() {
  const [gameForm, setGameForm] = useState({
    name: "",
    email: "",
    username: "",
    pass:"",
    confirmpass:""
  });
  const [gameFormErr, setGameFormErr] = useState({
    name: null,
    description: null,
    price: null,
  });
  const handleSubmit = (e) => {console.log(e)}
  const handleFormChange = (e) => {
    // setGameForm({
    //   ...gameForm,
    //   [e.target.name]: e.target.value
    // })

    if (e.target.name === "name") {
      setGameForm({
        ...gameForm,
        name: e.target.value,
      });

      setGameFormErr({
        ...gameFormErr,
        name:
          e.target.value.length === 0
            ? "This field is required"
            
            : null,
      });
    }

    if (e.target.name === "email") {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setGameForm({
        ...gameForm,
        email: e.target.value,
      });

      setGameFormErr({
        
        ...gameFormErr,
        email:
          e.target.value.length === 0
            ? "This field is required"
            :regex.test( e.target.value)
            ? null
            : "Invalid Email Format",
      });
    }
    if (e.target.name === "username") {
        
      setGameForm({
        ...gameForm,
        username: e.target.value,
      });

      setGameFormErr({
        
        ...gameFormErr,
        username:
          e.target.value.length === 0
            ? "This field is required"
            :e.target.value.includes(' ')
            ? "it cant include spaces"
            : "",
      });
    }
    if (e.target.name === "pass") {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#%])[a-zA-Z0-9@$#%]{8,}$/;
      setGameForm({
        ...gameForm,
        pass: e.target.value,
      });

      setGameFormErr({
        
        ...gameFormErr,
        pass:
          e.target.value.length === 0
            ? "This field is required"
            :regex.test( e.target.value)
            ? null
            : "Invalid pass Format it should be like[*@%$#] and contail lower and uppercase letters and numbers",
      });
    }
    if (e.target.name === "confirmpass") {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#%])[a-zA-Z0-9@$#%]{8,}$/;
      setGameForm({
        ...gameForm,
        confirmpass: e.target.value,
      });

      setGameFormErr({
        
        ...gameFormErr,
        confirmpass:
          e.target.value.length === 0
            ? "This field is required"
            :e.target.value === gameForm.pass
            ? ""
            : "pass dont match",
      });
    }

    
  };

  
  

  return (
    <div>
      <h2>Register App</h2>
      <hr />

      <form onSubmit={e => {
        e.preventDefault()
        console.log(e.target.name.value)}
      
      }>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            value={gameForm.name}
            onChange={handleFormChange}
            name="name"
          />
          {gameFormErr.name && (
            <div id="nameHelp" className="form-text text-danger">
              {gameFormErr.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            value={gameForm.email}
            onChange={handleFormChange}
            name="email"
          />
          {gameFormErr.email && (
            <div id="nameHelp" className="form-text text-danger">
              {gameFormErr.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            value={gameForm.username}
            onChange={handleFormChange}
            name="username"
          />
          {gameFormErr.username && (
            <div id="nameHelp" className="form-text text-danger">
              {gameFormErr.username}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            value={gameForm.pass}
            onChange={handleFormChange}
            name="pass"
          />
          {gameFormErr.pass && (
            <div id="nameHelp" className="form-text text-danger">
              {gameFormErr.pass}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            value={gameForm.confirmpass}
            onChange={handleFormChange}
            name="confirmpass"
          />
          {gameFormErr.confirmpass && (
            <div id="nameHelp" className="form-text text-danger">
              {gameFormErr.confirmpass}
            </div>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}

// FORM => name , value, onChange
// State => fields => {name , price, description , image , tags}
// State => Errors => {}
// handleChange => switch , if => handle change state, handle errors