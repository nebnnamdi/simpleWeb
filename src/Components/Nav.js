const Nav = () => {

    const toggleMobileMenu = (e) => {
        // let menu = document.getElementById("hamburger-icon");
        // menu.classList.toggle('open');

        e.target.parentNode.classList.toggle('open');
    }
    
    return ( 
        <header>
            <div id="brand"><a href="/">MyCompany</a></div>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/products">About us</a></li>
                    <li><a href="/about">Furniture</a></li>
                    <li><a href="/about">Blog</a></li>
                    <li><a href="/about">Contact us</a></li>
                    <button>Login</button>
                </ul>
            </nav>
            <div id="hamburger-icon" onClick={(e)=>toggleMobileMenu(e)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/products">About us</a></li>
                    <li><a href="/about">Furniture</a></li>
                    <li><a href="/about">Blog</a></li>
                    <li><a href="/about">Contact us</a></li>
                    <button>Login</button>
                </ul>
            </div>
        </header>
     );
}
 
export default Nav;