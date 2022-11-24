import React, { useReducer, useState } from "react";
import "./style.css";

const intialState = {
  id: Date.now(),
  name: "M Naeem",
  gmail: "mnaeem@gmail.com",
};

function reducer(state, action) {
  if (action.type === "add") {
    return [...state, action.payload];
  }
}

const List = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [state, dispatch] = useReducer(reducer, intialState);

  function addContact(e) {
    e.preventDefault();
    setName(" ");
    setMail(" ");
    const contact = {
      name,
      mail,
      id: Date.now(),
    };
    dispatch({
      type: "add",
      payload: { contact },
    });
  }
  return (
    <>
      <div className="list">Contact List</div>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Gmail</label>
        <input
          placeholder="Gmail"
          type="text"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <br />
        <button onClick={addContact}>Add</button>
      </form>
      {/* List Output */}
      <div className="outPut">
        <ul>
          {state.map(contact => {
            return (
              <>
                <li key={contact.id}>
                  <h2>{contact.name}</h2>
                </li>
                <li key={contact.id}>
                  <h2>{contact.mail}</h2>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
