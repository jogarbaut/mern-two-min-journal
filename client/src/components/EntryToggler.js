import React from 'react'

const EntryToggler = (props) => {
  const { setToggleEntryForm } = props

  const handleViewJournalsClick = () => {
    setToggleEntryForm(false)
  }

  const handleNewEntryClick = () => {
    setToggleEntryForm(true)
  }

  return (
    <div className="toggle-entry-container">
          <button onClick={handleViewJournalsClick}>View Journals</button>
          <button onClick={handleNewEntryClick}>Create New Entry</button>
    </div>

  )
}

export default EntryToggler