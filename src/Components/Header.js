
import Logo from '../assets/logo.png';

function Header(){

    return(

        <header>
            <img className="logo" src={Logo} alt="" />    
            <a href="/">Home</a>                  
        </header>

    );
}

export default Header;