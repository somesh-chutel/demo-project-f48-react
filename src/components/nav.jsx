import { Link } from 'react-router-dom';
import '../App.css';


const Nav = () => {

    return (

        <nav className='d-flex justify-content-between align-items-center p-3'>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/services">Services</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
            </ul>
            <div>
                <Link className='btn btn-primary' to = "/signup">Signup</Link>
            </div>
        </nav>
    )

}


export default Nav;