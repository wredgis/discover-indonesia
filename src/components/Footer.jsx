import { Link } from 'react-router-dom'; 
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-management">
            <div className="content-footer">
                <img src="/pics/flag-indonesia.jpg" className="flag-footer" alt="Indonesian flag" />
                <div className="discover-indonesia">DISCOVER INDONESIA</div>
                <Link to="/whoiam" className="who-i-am-link">Who I Am</Link>
            </div>
        </footer>
    );
};
export default Footer;
