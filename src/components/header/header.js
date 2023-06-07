import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                {/* <Link to="/"><img className="header__icon" src="https://media.istockphoto.com/id/1250059568/vector/fire-flame-icon-isolated-on-dark-background-fire-flame-logo-design-trendy-flat-style-vector.jpg?s=612x612&w=0&k=20&c=xn_V6NG8QGen3f_Nu47H0m2h4djtuRwvbblcNmc3xNM=" alt="logo" /></Link> */}
                <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                {/* <Link to="/movies/latest" style={{textDecoration: "none"}}><span>Genre</span></Link> */}
            </div>
        </div>
    )
}

export default Header


