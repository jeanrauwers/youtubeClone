import React, { useState } from 'react'

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        console.log("buum")
        //TODO: Callback from parent component

    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
                </div>
            </form>
        </div>
    );
}