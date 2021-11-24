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
					<a href="mailto:b2bsupport@elsanow.io" target="_blank">b2bsupport@elsanow.io</a>
				</p>
				<p>
					<i class="fa fa-phone" aria-hidden="true"></i>
					<a href="tel:+13182028752" target="_blank">+1 3182028752</a>
				</p>
			</div>
			<div className="copy-right">
				Copyright ©2021 ELSA, All rights reserved
			</div>
			<div className="social-icon">
				<a href="https://www.facebook.com/elsaspeak/" target="_blank">
					<i class="fa fa-facebook" aria-hidden="true"></i>
				</a>
				<a href="https://www.instagram.com/elsa_speak/" target="_blank">
					<i class="fa fa-instagram" aria-hidden="true"></i>
				</a>
				<a href="https://twitter.com/elsa_speak?lang=en" target="_blank">
					<i class="fa fa-twitter" aria-hidden="true"></i>
				</a>
				<a href="https://www.youtube.com/channel/UC-ytFRrtZ2s3xASXa47VDiQ" target="_blank">
					<i class="fa fa-youtube-play" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
};

export default FooterLogo;
