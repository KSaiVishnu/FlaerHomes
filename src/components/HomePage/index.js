import React, { useState } from 'react'

import BookList from '../BookList'
import NoResults from "../NoResults"
import './index.css'

function HomePage(props) {
    const { total_books } = props

    const [searchInput, setSearchInput] = useState('');
    const [genre, setGenre] = useState('All');

    const filterBySearch = (event) => {
        setSearchInput(event.target.value);
    }

    const filterByGenre = event => {
        setGenre(event.target.value);
    }

    let filteredBooks = total_books.filter(book => {
        if (book.title.toLowerCase().includes(searchInput.toLowerCase())) return true;
        if (book.author.toLowerCase().includes(searchInput.toLowerCase())) return true;
        else return false;
    })

    filteredBooks = filteredBooks.filter(book => {
        if (genre === 'All') return true;
        else if (book.genre === genre) return true;
        else return false;
    })

    const tryAgain=()=>{
        setSearchInput("")
        setGenre("All")
    }

    const details = {
        paraText: "Please Try Out with different Filters.",
        buttonText: "Try Again"
    }

    return (
        <div>
            <div className="input-contanier">
                <input onChange={filterBySearch} value={searchInput} type='text' className='input' placeholder='Search By Title, Author' />

                <select onChange={filterByGenre} value={genre} className='select'>
                    <option value="All">All</option>
                    <option value="Classic">Classic</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Romance">Romance</option>
                    <option value="Adventure">Adventure</option>                    
                    <option value="Post-apocalyptic">Post-apocalyptic</option>
                    <option value="MagicalRealism">MagicalRealism</option>
                </select>
            </div>

            <div>
                {filteredBooks.length !== 0 ? (<BookList booksList={filteredBooks} />) : (<NoResults details={details} func={tryAgain}/>)}
            </div>

        </div>
    )
}

export default HomePage
