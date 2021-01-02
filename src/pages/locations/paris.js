import React from "react"
import { Link } from "gatsby"

const Paris = () => {
  return (
    <>
      <h1>
        Paris
      </h1>

      <ul>
        <li>
          <Link to="/locations">View all Locations</Link>
        </li>
      </ul>
    </>
  )
}

export default Paris
