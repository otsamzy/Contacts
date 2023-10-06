import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListContacts from "./ListContacts";

const MainContacts = () => {
  const [personDetails, setPersonDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonDetails({ ...personDetails, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (personDetails.name && personDetails.email && personDetails.phone) {
      const newPerson = { ...personDetails, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPersonDetails({ name: "", email: "", phone: "" });
    } else {
      alert("provide all fields");
    }
  };
  return (
    <>
      <section className="centre_container">
        <h1 className="heading">contacts</h1>
        <form className="form" onSubmit={submit}>
          <div className="form_single_con">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Odu Tochi"
              value={personDetails.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form_single_con">
            <label htmlFor="phone">phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+2348032234"
              value={personDetails.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form_single_con">
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="@gmail.com"
              value={personDetails.email}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" className="submit_btn">
            submit
          </button>
        </form>
        <article className="List_contacts">
          {people.map((person) => (
            <ListContacts key={person.id} {...person} />
          ))}
        </article>
      </section>
    </>
  );
};

export default MainContacts;
