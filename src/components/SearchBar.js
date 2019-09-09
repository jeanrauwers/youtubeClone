import React, { useState }from 'react'

export  const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchTermHandler = (evt) => {
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = () => {

    }
    return (
    <div className="search-bar ui segment">
        <form className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler}/>
            </div>
        </form>
    </div>
  );
}