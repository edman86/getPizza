import { useState, useEffect } from "react";
import Button from '../Button/Button';
import CartButton from "../CartButton/CartButton";
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import classNames from 'classnames';
import './header.scss';

const Header = () => {
    // state defines whether the page is scrolled or not
    const [isScrolling, setScrolling] = useState(false);
    
    const dispatch = useDispatch();

    // define the current url address in order to hide 
    // the return button when the current page is home-page
    const location = useLocation();
    
    const headerClasses = classNames({
        header: true,
        sticky: isScrolling
    });

    const backLinkClasses = classNames({
        link: true,
        'back-link': location.pathname === '/cart',
        hidden: location.pathname !== '/cart'
    });

    const hamburgerClasses = classNames({
        hamburger: true,
        hidden: location.pathname === '/cart'
    });

    // open or close sidebar
    const toggleHamburgerButton = () => {
        dispatch(toggleSidebar(true));
    }

    useEffect(() => {
        // this function handles to
        // recognise is page scrolled or not.
        // If scrolled, change the value of isScrolling
        // to true. This makes the header sticky.
        function scrollHandler() {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else if (window.scrollY === 0) {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return (
        <header className={headerClasses}>
            <div className="header__container">
                
                <Link to="/" className={backLinkClasses}>   
                    <Button variant="contained" container rounded>
                        <BiArrowBack size="1.5em" className="back-btn" />
                    </Button>
                </Link>

                <div className={hamburgerClasses}>   
                    <Button 
                        variant="contained" 
                        container 
                        rounded
                        handleClick={toggleHamburgerButton}
                    >
                        <AiOutlineMenu size="1.5em" className="back-btn" />
                    </Button>
                </div>
                
                <Link to="/" className="link">
                    <h1 className="logo">getPizza</h1> 
                </Link>

                <Link to="/cart" className="link cart-link">
                    <CartButton />
                </Link>

            </div>

        </header>
    );
};

export default Header;