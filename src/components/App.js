import React from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'
export default class App extends React.Component {
    onSearchSubmit = (searchTerm) => {
        console.log(searchTerm)
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>
        );
    }ß
} 