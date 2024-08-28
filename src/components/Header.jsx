import { Link } from "react-router-dom";

export function Header () {
    return (
        <header className="primary-header">
        <nav className='header'>
          <Link to="/"><img src="/pokeapi.png" alt="" className="logo" /></Link>
          <ul className='list'>
            <li id="home" ><Link to="/" className='buttons'>Home</Link></li>
            <li id="1-3-gen" ><Link to="/generations-1-3" className='buttons'>1-3 Gen</Link></li>
            <li id="4-6-gen" ><Link to="/generations-4-6" className='buttons'>4-6 Gen</Link></li>
            <li id="7-9-gen" ><Link to="/generations-7-9" className='buttons'>7-9 Gen</Link></li>
          </ul>
        </nav>
      </header>
    )
}