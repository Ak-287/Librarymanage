import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/BookCard'

const CategoryProducts = () => {
  const { name } = useParams()
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`http://openlibrary.org/search.json?q=/${name}`)
      const data = await response.json()
      console.log(data)
      setBooks(data)
    }
    fetchBooks()
  }, [])

  if (books.length === 0) return <div>Loading.....</div>

  return (
    <BookCard books={books} />
  )
}

export default CategoryProducts