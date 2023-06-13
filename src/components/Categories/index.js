import React, { useEffect, useState } from 'react'
import Genre from '../Genre'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://openlibrary.org/search.json')
      const data = await response.json()
      console.log(data, 'data')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
      <Genre cards={categories}/>
  )
}

export default Categories