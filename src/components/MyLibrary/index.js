import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LibraryContext } from '../../App'

import "./index.css"
import LibraryBookCard from '../LibraryBookCard'
import NoResults from '../NoResults'

function MyLibrary() {
  const { libraryBooks } = useContext(LibraryContext)
  console.log(libraryBooks)

  const details = {
    paraText: "No Items in the Library",
    buttonText: "Add Books"
  }

  const navigate=useNavigate()

  const redirect=()=>{
    navigate('/')
  }

  return (
    <div>
      <h1 className='library-title'>My Library</h1>
      {libraryBooks.length > 0 ? (<ul className='library-list'>
        {
          libraryBooks.map(book => {
            return (
              <>
                <LibraryBookCard details={book} key={book.id} />
              </>
            )
          })
        }
      </ul>) : (<NoResults details={details} func={redirect} />)
      }
    </div>
  )
}

export default MyLibrary
