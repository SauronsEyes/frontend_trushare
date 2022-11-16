import {Link} from 'react-router-dom'
const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg  fixed-top">
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end w-100" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home </Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/books">Books</Link>

                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;