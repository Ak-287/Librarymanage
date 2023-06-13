import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import BookCard from '../../components/BookCard'

const Books = () => {
  const [Books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://openlibrary.org/people/mekBot/books/currently-reading.json')
      const data = await response.json()
      console.log(data)
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <div>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Books</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL Books</h1>
      </div>
      {
        Books.length > 0 ?
        <BookCard Books={Books}/>
        :
        <div>Loading.....</div>
      }
    </div>
  )
}

export default Books