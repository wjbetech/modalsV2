import React from 'react';
import { useState, useEffect } from "react";
import SinglePerson from "./SinglePerson";
import axios from "axios";
import ReactModal from "react-modal";

const Container = () => {

  ReactModal.setAppElement("body")

  // state setters
  const [people, setPeople] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [onePerson, setOnePerson] = useState(null);

  // useEffect
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        setPeople(response.data)
    })
    .catch((error) => {
        console.log("ERROR!", error)
    })
  }, []);

  // functionality
  const openModal = (person) => {
    setOnePerson(person);
    setModalState(true);
  };

  const closeModal = () => {
    setOnePerson(null);
    setModalState(false);
  };

  return (
    <div className="p-6 m-4 bg-neutral rounded-lg text-white shadow-2xl">
      <h1 className="text-center text-3xl mb-4">People</h1>
      <div className="title text-left text-xl grid grid-cols-2 text gap-4">
        {people.map(p => (
            <SinglePerson key={p.id} person={p} id={p.id} name={p.name} username={p.username} email={p.email} companyName={p.company.name} modalState={modalState} setOnePerson={setOnePerson} openModal={openModal} closeModal={closeModal} />
        ))}
      <ReactModal
        isOpen={modalState}
        onRequestClose={closeModal}
        contentLabel="Todo Item Modal"
        style={{
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            },
            content: {
                height: "50%",
                width: "50%",
                margin: "auto",
                backgroundColor: "rgb(220, 220, 220)",
                borderRadius: "12px",
                padding: "10px 15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
        }}
      >
        {onePerson && (
            <div className="flex flex-col h-full text-slate-800">
                <h2 className="text-xl mb-4">{onePerson.name}</h2>
                <p className="text-xs mb-2">Company: {onePerson.company.name}</p>
                <p className="text-xs mb-2">Email: {onePerson.email}</p>
                <div className="flex-grow"></div>
                <button className="items-bottom align-bottom text-left btn btn-secondary btn-xs w-[25%] text-white shadow-xl" onClick={closeModal}>Close</button>
            </div>
        )}
      </ReactModal>
      </div>
    </div>
  )
}

export default Container
