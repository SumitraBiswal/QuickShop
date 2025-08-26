import { useState, useEffect, useRef } from "react";
import { BsCart4 } from "react-icons/bs";
import logo from "../assets/grocery/logo2.gif"
import { NavLink, useNavigate } from "react-router-dom"
import subCategories from "./Data/subCategories";
import { IoMenu } from "react-icons/io5";
import style from './Navbar.module.css'



export default function Navbar({ totalCartCount }) {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLogged,setsLogged]=useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 850);
            if (window.innerWidth > 850) {
                setsidebarOpen(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchResults([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const term = searchTerm.trim().toLowerCase();

        if (term ==="") {
            setSearchResults([]);
            return;
        }

        const matchedSubs = subCategories.filter((sub) =>
            sub.title.toLowerCase().includes(term));
        setSearchResults(matchedSubs);
    }, [searchTerm]);

    function handleResultClick(sub) {
        setSearchTerm("");
        setSearchResults([]);
        setsidebarOpen(false);
        navigate(`/subcategory/${sub.categoryId}`);
    }
    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
         localStorage.removeItem("isSkipped");
         setsLogged(false);
         navigate("/login")
    }
    const handleLoginClick=()=>{navigate("/login")}
    return (
        <>
            <div className={style.navbarcontainer}>
                {/* Log0*/}
                <NavLink
                    to="/"
                    className={style.sidebarLogo}
                    onClick={() => setsidebarOpen(false)}>
                    <p className={style.logo}>
                        <span className={style.logoHightlight}>Quick</span>Shop
                        <img src={logo} alt="Logo" className={style.logoImg} />
                    </p>
                </NavLink>
                {!isMobile && (
                    <ul className={style.navlinks}>
                        <li>
                            <NavLink
                                to='/'
                                end
                                className={({ isActive }) => (isActive ? style.activeLink : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/product'
                                className={({ isActive }) => (isActive ? style.activeLink : "")}
                            >
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                end
                                className={({ isActive }) => (isActive ? style.activeLink : "")}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                end
                                className={({ isActive }) => (isActive ? style.activeLink : "")}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        {!isLogged?(
                            <li>
                                <NavLink to="/login" 
                            className={({isActive})=>(isActive?style.activeLink:"")}
                            >
                                Login
                                </NavLink></li>):(
                             <li>
                                <NavLink to="/login">
                                <button onClick={handleLogout}
                            className={({isActive})=>(isActive?style.activeLink:"")}>Logout</button>
                            </NavLink>
                            </li>
                        )}
                    </ul>
                )}
                <div className={style.Rightside}>
                    <div className={style.cart}>
                        <NavLink
                            to="/message"
                            className={({ isActive, isPending }) =>
                                isPending ? "Pending" : isActive ? "Active" : ""
                            }
                        >
                            <BsCart4/>
                            <span className={style.cartCount}>{totalCartCount}</span>

                        </NavLink>
                    </div>
                </div>
                {/*search bar*/}
                <div className={style.search} style={{ position: "relative" }} ref={searchRef}>
                    <input
                        type="text"
                        placeholder="Search your product"
                        className={style.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className={style.searchBtn}
                        onClick={() => {
                            if (searchResults.length > 0) {
                                handleResultClick(searchResults[0]);
                            }
                        }}
                    >Search</button>
                    {searchResults.length > 0 && (
                        <ul className={style.searchResultList}>
                            {searchResults.map((sub) => (
                                <li
                                    key={sub.id}
                                    className={style.searchResultItem}
                                    onClick={() => handleResultClick(sub)}
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    {sub.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
               
                {isMobile && (
                    <button
                        className={style.menuButton}
                        onClick={() => setsidebarOpen(true)}
                        aria-label="Open menu"
                    >
                      <IoMenu/>  
                         </button>
                )}
            </div>
            {sidebarOpen && (
                <>
                    <div className={style.overlay} onClick={() => setsidebarOpen(false)}></div>
                    <nav className={style.sidebar}>
                        <button
                            className={style.closeBtn}
                            onClick={() => setsidebarOpen(false)}
                            aria-label="close menu"
                        >&times</button>
                        <ul className={style.sidebarNavlinks} >
                            <li>
                                <NavLink
                                    to='/'
                                    end
                                    className={({ isActive }) => (isActive ? style.activeLink : "")}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/product"
                                    end
                                    className={({ isActive }) => (isActive ? style.activeLink : "")}
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    end
                                    className={({ isActive }) => (isActive ? style.activeLink : "")}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    end
                                    className={({ isActive }) => (isActive ? style.activeLink : "")}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                           <li>
                            {localStorage.getItem("isLoggedIn")?(
                                <button onClick={()=>{localStorage.removeItem("isLoggedIn");

                                }} className="style.logoutBtn">
                                 Logout
                                </button>):(
                                    <NavLink
                                    to="/login"
                                    className={({isActive})=>(isActive ? style.activeLink : "")}>
                                        Login
                                    </NavLink>
                            )}
                           </li>
                        </ul>
                    </nav>
                </>
            )}
        </>

    );
}