import React from 'react';
import FooterLogoAPI from './modules/FooterLogoAPI';
import FooterMenu from './modules/FooterMenu';
import FooterCopyright from './modules/FooterCopyright';

const FooterFullwidth = () => (
	<footer className='ps-footer'>
		<div className='ps-container'>
			<FooterLogoAPI />
			<FooterMenu />
		</div>
	</footer>
);

export default FooterFullwidth;
