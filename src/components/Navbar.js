import './Navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Navbar(){
    return(
        <div id="Navbar">
            <nav>
                <Router>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                    </ul>

                    {/*Coloque os caminhos para as paginas aqui */ }
                    <Routes>

                        <Route></Route>

                    </Routes>
                </Router>
            </nav>
        </div>
    );
}

export default Navbar;