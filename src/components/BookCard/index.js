import React from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from "react-icons/fa6"

import "./index.css"
//i
function BookCard(props) {
    const { details } = props
    const { id, title, author, rating, img_url } = details
    return (
        <div className='img-container'>
            <Link to={`/FlaerHomes/bookdetails/${id}`} className='custom'>
                <div className='details-container'>
                    <img className='img' src={img_url} alt="title" />
                    <h3 className='title'>{title}</h3>
                    <ul className='rating-container'>
                    <li className='title-li'>{author}</li>
                    <li className='rating'>{rating}<FaStar /></li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default BookCard
