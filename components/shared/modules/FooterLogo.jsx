import React from 'react';
import Link from 'next/link';

const FooterLogo = () => {
	return (
		<div className='ps-footer__logo'>
			<div className='logo'>
				<Link href='/'>
					<a>
						<img src='/static/img/logo_light.png' alt='' />
					</a>
				</Link>
			</div>
			<div className='social'>
				<Link href='#' target='_blank' className='header__right__list-icons'>
					<a>
						<i className='fa fa-instagram' aria-hidden='true' />
					</a>
				</Link>
				<Link href='#' target='_blank' className='header__right__list-icons'>
					<a>
						{' '}
						<i className='fa fa-twitter' aria-hidden='true' />
					</a>
				</Link>
				<Link href='#' target='_blank' className='header__right__list-icons'>
					<a>
						<i className='fa fa-facebook' aria-hidden='true' />
					</a>
				</Link>
				<Link href='#' target='_blank' className='header__right__list-icons'>
					<a>
						<i className='fa fa-globe' aria-hidden='true' />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default FooterLogo;
