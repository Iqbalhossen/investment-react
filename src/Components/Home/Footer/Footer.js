import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'
const Footer = () => {
	return (
		<>

			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 footer-col">
							<h4>company</h4>
							<ul>
								<li><Link to="/about/us">about us</Link></li>
								<li><Link to="/products">our services</Link></li>
								<li><Link to="#">privacy policy</Link></li>
							
							</ul>
						</div>
						<div className="col-12 col-md-6 col-lg-4 footer-col">
							<h4>get help</h4>
							<ul>
								<li><Link to="/faq">FAQ</Link></li>
								<li><Link to="/contact/us">Contact Us</Link></li>
								
							</ul>
						</div>
						<div className="col-12 col-md-6 col-lg-4 footer-company-details  footer-col">
						<Link className="logo" to="/">
                                <h4>Yume One</h4>
                            </Link>
							<p>© 2023 Yumeone Network Ltd.</p>
								<p>Modulo Hamamatsucho.  Tokyo, 105-0013 Japan</p>
								<p>support@yumeone.com</p>
								
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<i className="fa-brands fa-facebook"></i>
							<div className="social-links d-flex">
								<i className="fa-brands fa-facebook"></i>
								<Link to="#"><i className="fa-brands fa-facebook"></i></Link>
								<Link to="#"><InstagramIcon /></Link>
								<Link to="#"><LinkedInIcon /></Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;