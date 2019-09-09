import React from 'react'
import youtube, { KEY } from '../api/youtube'
import { SearchBar } from './SearchBar'

export const App = () => {
    const onSearchSubmit = (searchTerm) => {
        return youtube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 6,
                key: KEY
            }
        })
    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
        </div>
    );

} 