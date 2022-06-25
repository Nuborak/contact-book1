import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";

const Add = () => {
  const { createContact } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  function handleSave() {
    let newContact = {
      name,
      lastName,
      number,
    };
    navigate("/list");
    createContact(newContact);
    console.log(name);
  }
  return (
    <div>
      <div className="add">
        <h4>Name</h4>
        <input
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <h4>Surname</h4>
        <input
          placeholder="Enter lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
        />
        <h4>Phone number</h4>
        <input
          placeholder="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="number"
        />
        <div>
          <svg
            onClick={() => handleSave()}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="add__svg"
              d="M9 16.17L5.53 12.7C5.14 12.31 4.51 12.31 4.12 12.7C3.73 13.09 3.73 13.72 4.12 14.11L8.3 18.29C8.69 18.68 9.32 18.68 9.71 18.29L20.29 7.71C20.68 7.32 20.68 6.69 20.29 6.3C19.9 5.91 19.27 5.91 18.88 6.3L9 16.17Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Add;
