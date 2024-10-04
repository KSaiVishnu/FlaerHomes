import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import BookDetails from './components/BookDetails'
import MyLibrary from './components/MyLibrary'
import './App.css';

import { createContext, useState } from 'react'
export const LibraryContext = createContext(
  {
    libraryBooks: [], addBook: () => { }
  }
)

const total_books = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "rating": 4.7,
    "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "publication_year": 1925,
    "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1727950553/Screenshot_2024-10-03_144133_d79hhl.png"
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "rating": 4.8,
    "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    "publication_year": 1960,
    "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1727950553/Screenshot_2024-10-03_144217_zqy6vv.png"
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "rating": 4.6,
    "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    "publication_year": 1949,
    "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1727967293/Screenshot_2024-10-03_202440_scscfl.png"
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "rating": 4.9,
    "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    "publication_year": 1813,
    "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1727950553/Screenshot_2024-10-03_144431_y9oyav.png"
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "rating": 4.3,
    "description": "A story about a young boy’s journey through the challenges of adolescence.",
    "publication_year": 1951,
    "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1727950556/Screenshot_2024-10-03_144823_tekhiq.png"
  },
  
    {
      "id": 6,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "rating": 4.9,
      "description": "A fantasy novel about Bilbo Baggins' adventure to reclaim treasure from a dragon.",
      "publication_year": 1937,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728012737/Screenshot_2024-10-04_085938_et96tz.png"
    },
    {
      "id": 7,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "rating": 4.3,
      "description": "The quest of Captain Ahab to seek revenge on the white whale, Moby-Dick.",
      "publication_year": 1851,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728012737/Screenshot_2024-10-04_090008_ddhkci.png"
    },
    {
      "id": 8,
      "title": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-apocalyptic",
      "rating": 4.4,
      "description": "A father and son's journey through a bleak, post-apocalyptic world.",
      "publication_year": 2006,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728012737/Screenshot_2024-10-04_090043_ta4c5g.png"
    },
    {
      "id": 9,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "genre": "Dystopian",
      "rating": 4.6,
      "description": "A dystopian society that promotes control and superficial happiness through technology and conditioning.",
      "publication_year": 1932,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728012738/Screenshot_2024-10-04_090124_xafrhr.png"
    },
    {
      "id": 10,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "rating": 4.9,
      "description": "An epic tale of good versus evil in the world of Middle-earth.",
      "publication_year": 1954,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728012738/Screenshot_2024-10-04_090151_omttos.png"
    },
    {
      "id": 11,
      "title": "Jane Eyre",
      "author": "Charlotte Brontë",
      "genre": "Fiction",
      "rating": 4.5,
      "description": "The life story of an orphaned girl who overcomes hardship and finds love.",
      "publication_year": 1847,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013042/Screenshot_2024-10-04_090238_alfpnm.png"
    },
    {
      "id": 12,
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "genre": "Fiction",
      "rating": 4.4,
      "description": "A family's struggle during the Great Depression as they migrate westward in search of a better life.",
      "publication_year": 1939,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013044/Screenshot_2024-10-04_090323_k8wps4.png"
    },
    {
      "id": 13,
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "genre": "Fiction",
      "rating": 4.3,
      "description": "The story of Billy Pilgrim, who becomes 'unstuck in time' and experiences his life events out of order.",
      "publication_year": 1969,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013043/Screenshot_2024-10-04_090415_rqeoxe.png"
    },
    {
      "id": 14,
      "title": "Beloved",
      "author": "Toni Morrison",
      "genre": "Fiction",
      "rating": 4.2,
      "description": "A novel about a woman haunted by her past after escaping slavery.",
      "publication_year": 1987,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013043/Screenshot_2024-10-04_090439_ff1jxx.png"
    },
    {
      "id": 15,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Fiction",
      "rating": 4.7,
      "description": "A fable about a shepherd's journey to find his personal treasure and follow his dreams.",
      "publication_year": 1988,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013043/Screenshot_2024-10-04_090510_eafyae.png"
    },
    {
      "id": 16,
      "title": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "genre": "Fiction",
      "rating": 4.6,
      "description": "The psychological exploration of a man who commits murder and struggles with guilt and redemption.",
      "publication_year": 1866,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013277/Screenshot_2024-10-04_090858_vb1ads.png"
    },
    {
      "id": 17,
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "genre": "Fiction",
      "rating": 4.5,
      "description": "A tragic love story set in the context of Russian high society.",
      "publication_year": 1877,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013278/Screenshot_2024-10-04_090926_fzifkf.png"
    },
    {
      "id": 18,
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "genre": "Fiction",
      "rating": 4.4,
      "description": "A story about a man who remains youthful while his portrait ages and reflects his moral decay.",
      "publication_year": 1890,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013278/Screenshot_2024-10-04_090958_fsvaao.png"
    },
    {
      "id": 19,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel Garcia Marquez",
      "genre": "MagicalRealism",
      "rating": 4.6,
      "description": "A multi-generational tale of the Buendía family in the mythical town of Macondo.",
      "publication_year": 1967,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013278/Screenshot_2024-10-04_091029_agjcbo.png"
    },
    {
      "id": 20,
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "genre": "Dystopian",
      "rating": 4.7,
      "description": "A dystopian novel about a future society where books are outlawed and 'firemen' burn them.",
      "publication_year": 1953,
      "img_url": "https://res.cloudinary.com/dtqmufptd/image/upload/v1728013279/Screenshot_2024-10-04_091100_mmyf3m.png"
    }

    
  
]

function App() {
  const [libraryBooks, setLibraryBooks] = useState([])

  const addBook = book => {
    //console.log(book)
    const id=book.id
    const filteredBooks=libraryBooks.filter(book=>book.id==id)
    if (filteredBooks.length<1){
      setLibraryBooks([...libraryBooks, book])
    }    
  }

  const removeBook = id=>{
    let filteredBooks=libraryBooks.filter(book=>book.id!=id)
    setLibraryBooks(filteredBooks)
  }

  return (
    <LibraryContext.Provider value={{libraryBooks,addBook,removeBook}}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/FlaerHomes' element={<HomePage total_books={total_books} />} />
            <Route path='/FlaerHomes/bookdetails/:id' element={<BookDetails total_books={total_books} />} />
            <Route path='/FlaerHomes/mylibrary' element={<MyLibrary />} />
          </Routes>
        </Router>
      </div>
    </LibraryContext.Provider>
  );

}

export default App;
