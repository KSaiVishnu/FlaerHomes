import React, { useContext } from 'react'
import { LibraryContext } from '../../App'
import { Link } from 'react-router-dom'

import { FaStar } from "react-icons/fa6"
import { CiBookmarkMinus } from "react-icons/ci";

import "./index.css"

function LibraryBookCard(props) {
    const {removeBook } = useContext(LibraryContext)

    const { details } = props
    const { id, title, author, rating, img_url } = details

    const onClickRemoveBook=()=>{
        removeBook(id)
      }

    return (
        <div className='img-container1'>
            <Link to={`/bookdetails/${id}`} className='custom'>
                <div className='details-container1'>
                    <img className='img' src={img_url} alt="title" />
                    <h3 className='title'>{title}</h3>
                    <ul className='rating-container'>
                    <li className='title'>{author}</li>
                    <li className='rating'>{rating}<FaStar /></li>
                    </ul>
                </div>
            </Link>
            <button onClick={onClickRemoveBook}><h1><CiBookmarkMinus/></h1></button>
        </div>
    )
}

export default LibraryBookCard
