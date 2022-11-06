import React from 'react'
import './styles.css'
import {Link,useResolvedPath,useMatch} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Site Name</Link>
      <ul>
        <CustomLink to="/pricing">pricing</CustomLink>
        <CustomLink to='/about'>about</CustomLink>
      </ul>
    </nav>
  )
}
function CustomLink({to,children, ...props}){

    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname,end:true})

    return(
        
        <li className={isActive?'active':''}>
            <Link to={to} {...props}>{children}</Link>
        </li>

    )

}
