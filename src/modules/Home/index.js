import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Genre from '../../components/Genre'
import Hero from '../../components/Hero'
import BookCard from '../../components/BookCard'
import Books from '../../components/BookCard'
import Stats from '../../components/StatCard'

const Home = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://openlibrary.org/search.json?q=')
      const data = await response.json()
      console.log(data)
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">NEW ARRIVALS</h1>
      </div>
      {
        books.length > 0 ? 
        <BookCard books={books} /> 
        :
        <div>Loading.....</div>
      }
      <Books/>
      <Stats/>
    </>
  )
}

export default Home