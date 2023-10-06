import React, { useState } from "react";

const ListContacts = ({ id, name, email, phone }) => {
  return (
    <>
      <div className="single_contact">
        <div className="contact_left_comp">
          <div className="img_con">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="contact_details">
            <h2 className="contact_name">{name}</h2>
            <p className="contact_email">{email}</p>
          </div>
        </div>
        <h3 className="phone">{phone}</h3>
      </div>
    </>
  );
};

export default ListContacts;
