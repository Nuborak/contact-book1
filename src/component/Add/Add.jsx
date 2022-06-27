import { Fingerprint } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import styles from "./add.module.css";

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
    // getContacts();
    navigate("/list");
    createContact(newContact);
  }
  return (
    <div className={styles.main}>
      <div className={styles.addInput}>
        <div className={styles.inputStyle}>
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
          />

          <TextField
            helperText="Please enter your Surname"
            id="demo-helper-text-aligned"
            label="Surname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            type="text"
          />

          <TextField
            onChange={e => setNumber(e.target.value)}
            helperText="Please enter your number"
            id="demo-helper-text-aligned"
            label="Number"
            type="number"
            value={number}
          />

          <div>
            <IconButton
              onClick={() => handleSave()}
              aria-label="fingerprint"
              color="success">
              save
              <Fingerprint />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
