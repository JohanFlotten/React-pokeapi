import { Link } from "react-router-dom";

export function Header () {
    return (
        <header className="primary-header">
        <nav className='header'>
          <Link to="/"><img src="/pokeapi.png" alt="" className="logo" /></Link>
          <ul className='list'>
            <li id="home" className='buttons'><Link to="/">Home</Link></li>
            <li id="1-3-gen" className='buttons'><Link to="/generations-1-3">1-3 Gen</Link></li>
            <li id="4-6-gen" className='buttons'><Link to="/generations-4-6">4-6 Gen</Link></li>
            <li id="7-9-gen" className='buttons'><Link to="/generations-7-9">7-9 Gen</Link></li>
          </ul>
        </nav>
      </header>
    )
}