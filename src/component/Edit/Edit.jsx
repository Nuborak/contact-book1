import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneContact, oneContact, updateContact } =
    useContext(ContactContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    getOneContact(id);
  }, []);

  function handleSave() {
    let editedContact = {
      name,
      lastName,
      number,
    };
    updateContact(id, editedContact);
    navigate("/list");
  }

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  return (
    <div>
      <div className="edit">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
        />
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="number"
        />
        <button className="edit__btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
