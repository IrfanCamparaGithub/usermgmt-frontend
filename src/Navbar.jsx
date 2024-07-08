import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">User Management Portal</a>
        
        <Link className='btn btn-outline-light btn-primary' to = "/adduser">Add User</Link>
        
      </div>
    </nav>
  )
}
