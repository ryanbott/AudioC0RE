import React from "react"
import { Link } from "gatsby"

const Chicago = () => {
  return (
    <>
      <h1>
        Chicago
      </h1>

      <ul>
        <li>
          <Link to="/locations">View all Locations</Link>
        </li>
      </ul>
    </>
  )
}

export default Chicago
