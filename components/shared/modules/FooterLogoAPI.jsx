import React from 'react';
import Link from 'next/link';
import Logo from '~/components/elements/Logo';
import logo from '~/public/static/img/logo/logo_api.png'
const FooterLogo = () => {
	return (
		<div className='ps-footer__logo'>
			<div className="logo">
				<img src={logo} alt="Logo elsa API" height={52} />
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
