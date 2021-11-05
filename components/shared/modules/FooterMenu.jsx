import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FooterMenu = () => {
	return (
		<div className='ps-footer__menu'>
			<div className='footer__menu'>
				<ul>
					<li className='title'>Support</li>
					<li>
						<Link href='/page/contactus'>
							<a>Contact Us</a>
						</Link>
					</li>
					<li>
						<Link href='/page/faqs'>
							<a>FAQs</a>
						</Link>
					</li>
					<li>
						<Link href='/page/terms'>
							<a>Terms and Conditions</a>
						</Link>
					</li>
					<li>
						<Link href='/page/privacy'>
							<a>Privacy Policy</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>Quick link</li>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/page/aboutus'>
							<a>About Us</a>
						</Link>
					</li>
					<li>
						<Link href='/page/giveaways'>
							<a>Give Away</a>
						</Link>
					</li>
					<li>
						<Link href='/page/membership'>
							<a>Membership</a>
						</Link>
					</li>
					<li>
						<Link href='/page/partners'>
							<a>Partners</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>Contact</li>
					<li>Email: info@harttgroup.com.au</li>
					{/* <li>Tel: 0460 8X8 888</li>
					<li>Address: TBC</li> */}
				</ul>
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

export default FooterMenu;
