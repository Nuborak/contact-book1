import styles from "./List.module.css";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import { Card, CardContent, Typography } from "@mui/material";

const List = () => {
  const { getContacts, contacts, deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contacts.map(item => (
        <div className={styles.main} key={item.id}>
          <div className={styles.data}>
            <div className={styles.boxitem}>
              <Card style={{ width: "400px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Surname: {item.lastName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Number: {item.number}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
              <button
                onClick={() => navigate(`/edit/${item.id}`)}
                className={styles.btn}
                role="button">
                <span class="text">Edit</span>
              </button>

              <button
                onClick={() => deleteContact(item.id)}
                className={styles.btn}
                role="button">
                <span class="text">Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
