import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>HomePage
      <Link to={"/posts"}> Posts</Link>
    </div>
  )
}

export default HomePage