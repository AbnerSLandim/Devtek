import './Navbar.css';
import Logo from "../img/01-softtek-white.webp";

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
                    <div id='navGrid'>
                        <div id='navLogo'>            
                            <Link id='logo'><img src={Logo}/></Link>
                        </div>
                        <div id='navOpcao'>    
                            <Link class="opcaoNav">HOME</Link>
                            <Link class="opcaoNav">SOLUÇÃO DE PROBLEMAS</Link>
                            <Link class="opcaoNav">SOBRE O PROJETO</Link>
                            <Link class="opcaoNav">SUPORTE</Link>    
                        </div>
                    </div>
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