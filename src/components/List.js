import React, { useReducer, useState } from "react";
import "./style.css";

const intialState = [
  {
    id: Date.now(),
    name: "M Naeem",
    mail: "mnaeem@gmail.com",
  },
];

function reducer(state, action) {
  if (action.type == "add") {
    return [...state, action.payload];
  } else if (action.type == "delete") {
    return state.filter((contact) => {
      return contact.id !== action.payload.id;
    });
  }
}

const List = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [state, dispatch] = useReducer(reducer, intialState);

  console.log(state);

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
      payload: contact,
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
      <div className="list">
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.mail}</h2>
                <div>
                  <button
                    onClick={() => {
                      dispatch({ type: "delete", payload: { id: contact.id } });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;

