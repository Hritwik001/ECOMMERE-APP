import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo & About */}
                <div className="footer-logo">
                    <h2>ShopEase</h2>
                    <p>Your one-stop destination for all your shopping needs.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


