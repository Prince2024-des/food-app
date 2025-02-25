import React from "react"
import { assets } from "../../assets/assets"
import "./Footer.css"
import { Link } from "react-router-dom";


export const Footer = () => {
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to={"/"}>
                    <img src={assets.logo} alt="" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, culpa quod! Rem libero, laudantium asperiores assumenda consectetur modi excepturi consequatur.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+2330500081188</li>
                        <li>princeawlavi83@gamil.com</li>

                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">Copyright &copy; Destiny.dev</div>

        </div>
    );
};



export default Footer;