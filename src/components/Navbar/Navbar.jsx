import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGsapDownStagger } from '../../hook/gsap';

const Navbar = () => {
    const link1Ref = useRef(null);
    const link2Ref = useRef(null);
    const link3Ref = useRef(null);
    const logoRef = useRef(null);
    const favRef = useRef(null);
    const linkArr = [link1Ref, link2Ref, link3Ref];
    const logoArr = [logoRef];
    const favArr = [favRef];
    useGsapDownStagger(linkArr, 1.5);
    useGsapDownStagger(logoArr, 2.2);
    useGsapDownStagger(favArr, 2.6);
    return (
        <nav className="navbar wraper">
            <ul className="links">
                <li ref={link1Ref}>
                    <Link to="/featured">Featured</Link>
                </li>
                <li ref={link2Ref}>
                    <Link to="/about">About</Link>
                </li>
                <li ref={link3Ref}>
                    <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
            <div className="logo" ref={logoRef}>
                <h2>
                    <Link to="/">immemorial</Link>
                </h2>
            </div>
            <div className="blog-link" ref={favRef}>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
