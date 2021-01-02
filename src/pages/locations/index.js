import React from "react"
import { Link } from "gatsby"

const LocationsPage = () => {
  return (
    <>
      <h1>
        Locations Page
      </h1>

      <ul>
        <li><Link to="chicago">Chicago</Link></li>
        <li><Link to="norman">Norman</Link></li>
        <li><Link to="paris">Paris</Link></li>
      </ul>
    </>
  )
}

export default LocationsPage
