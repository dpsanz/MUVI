import {Link, useLocation} from 'react-router-dom'

function Navbar() {

    const location = useLocation();

    return ( 
        <nav>
            <ul className='text-lg flex gap-3 ml-3 text-white'>
                <li className={`${location.pathname === '/' ? 'text-teal-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/filmes' ? 'text-teal-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "filmes">MOVIES</Link></li>

                <li className={`${location.pathname === '/news' ? 'text-teal-500 hover:tracking-widest transition-all' : 'hover:tracking-widest transition-all'}`}>
                    <Link to = "news">NEWS</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;