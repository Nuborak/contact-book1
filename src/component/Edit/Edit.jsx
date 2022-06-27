import { Save } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import styles from "./Edit.module.css";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneContact, oneContact, updateContact } =
    useContext(ContactContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

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
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  return (
    <div>
      <div className={styles.edit}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          required
          label="Name"
        />

        <TextField
          style={{ marginTop: "10px" }}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
          label="surname"
        />

        <TextField
          style={{ marginTop: "10px" }}
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
          label="number"
        />

        <button
          style={{ marginTop: "10px" }}
          onClick={() => handleSave()}
          className={styles.btnSave}
          role="button">
          <span class="text">Save</span>
        </button>
      </div>
    </div>
  );
};

export default Edit;
