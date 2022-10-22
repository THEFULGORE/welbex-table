import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h2 className="footer__title">
					Made with <span>❤</span> by{' '}
					<a href="https://github.com/THEFULGORE" target="_blank">
						THEFULGORE
					</a>
				</h2>
			</div>
		</div>
	);
};

export default Footer;
