import React from 'react'

const SinglePerson = ({ openModal, id, name, username, companyName, person }) => {
  return (
    <div className="bg-primary-focus p-2 m-2 rounded-lg flex flex-col h-full justify-between">
      <div className="mb-2">
        <h1 className="text-lg">{name}</h1>
        <p className="text-xs">id: {id}</p>
      </div>
      <p className="mb-2 text-sm">"{username}"</p>
      <hr />
      <p className="text-xs">{companyName}</p>
      <div className="items-bottom align-bottom">
        <button onClick={() => openModal(person)} className="btn bg-blue-600 border-none btn-xs text-white mt-4">View</button>
      </div>
    </div>
  )
}

export default SinglePerson
