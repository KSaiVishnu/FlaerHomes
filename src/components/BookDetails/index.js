import React,{useContext} from 'react'
import { LibraryContext } from '../../App'

import { useParams, useNavigate } from 'react-router-dom'
import { CiBookmarkPlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6"

import "./index.css"

function BookDetails(props) {
    const {addBook}=useContext(LibraryContext)
    const navigate=useNavigate()

    const { id } = useParams()

    const { total_books } = props
    const filtered_book = total_books.filter(book => book.id == id)[0]
    const { title, author, genre, rating, description, publication_year, img_url } = filtered_book

    const addBookToLibrary=()=>{
        addBook(filtered_book)      
        navigate('/FlaerHomes/mylibrary')
    }
    //Sai Vishnu

    return (
        <div className='details-img-container'>
            <img className='details-img' src={img_url} alt={title} />
            <div className='details-description'>
                <div className='bookmark'>
                <h1><b>Title:</b> {title}</h1>
                <button onClick={addBookToLibrary} className='bookmark-button'><h1><CiBookmarkPlus/></h1></button>
                <p onClick={addBookToLibrary} className='add'>Add to Library</p>
                </div>
                <p className='details-para'><b>Author :</b> {author}</p>
                <p className='details-para'><b>Genre :</b> {genre}</p>
                <p className='details-para'><b>Description :</b> {description}</p>
                <div className='rating-container'>
                <p className='details-para'><b>Publication Year :</b> {publication_year}</p>
                <p className='rating ml'>{rating} <FaStar/></p>
                </div>
            </div>            
        </div>
    )
}

export default BookDetails
