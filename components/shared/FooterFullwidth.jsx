import React from 'react';
import FooterLogo from './modules/FooterLogo';
import FooterMenu from './modules/FooterMenu';
import FooterCopyright from './modules/FooterCopyright';

const FooterFullwidth = () => (
	<footer className='ps-footer'>
		<div className='ps-container'>
			<FooterLogo />
			<FooterMenu />
		</div>
	</footer>
);

export default FooterFullwidth;
