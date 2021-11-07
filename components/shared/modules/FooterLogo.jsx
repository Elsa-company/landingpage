import React from 'react';
import Link from 'next/link';
import Logo from '~/components/elements/Logo';
const FooterLogo = () => {
	return (
		<div className='ps-footer__logo'>
			<div className="logo">
				<Logo></Logo>
			</div>
			<div className="contact-info">
				<p>
					World's Best English Pronunciation App
				</p>
				<p>
					<i class="fa fa-envelope" aria-hidden="true"></i>
					b2bsupport@elsanow.io
				</p>
				<p>
					<i class="fa fa-phone" aria-hidden="true"></i>
					+1 3182028752
				</p>
			</div>
			<div className="copy-right">
				Copyright ©2021 ELSA, All rights reserved
			</div>
			<div className="social-icon">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-youtube-play" aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default FooterLogo;
