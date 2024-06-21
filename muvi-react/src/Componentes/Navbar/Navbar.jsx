import {Link, useLocation} from 'react-router-dom'

function Navbar() {

    const location = useLocation();

    return ( 
        <nav>
            <ul className='text-lg flex gap-3 ml-3 text-colorTxt font-medium'>
                <li className={`${location.pathname === '/' ? 'text-colorTitle' : 'hover:underline'}`}>
                    <Link to = "/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/filmes' ? 'text-colorTitle' : 'hover:underline'}`}>
                    <Link to = "filmes">MOVIES</Link></li>

                <li className={`${location.pathname === '/news' ? 'text-colorTitle' : 'hover:underline'}`}>
                    <Link to = "news">NEWS</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;