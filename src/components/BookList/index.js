import React from 'react'

import BookCard from '../BookCard'
import "./index.css"

function BookList(props) {
    const { booksList } = props
    return (
        <ul className='ul-list'>
            {booksList.map(book => {
                return <BookCard details={book} key={book.id} />
            })}
        </ul>
    )
}

export default BookList
