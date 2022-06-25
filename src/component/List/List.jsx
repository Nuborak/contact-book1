import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";

const List = () => {
  const { getContacts, contacts, deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contacts.map(item => (
        <div className="info" key={item.id}>
          <div className="info__content">
            <div className="info__name">
              <h4>{item.name}</h4>
              <h4>{item.lastName}</h4>
            </div>
            <h4 className="info__number">{item.number}</h4>
          </div>
          <div>
            <img
              className="info__img"
              width={24}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
              alt=""
              onClick={() => navigate(`/edit/${item.id}`)}
            />
            <img
              className="info__img"
              width={24}
              src="https://www.svgrepo.com/show/21045/delete-button.svg"
              alt=""
              onClick={() => deleteContact(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
