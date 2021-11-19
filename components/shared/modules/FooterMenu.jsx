import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FooterMenu = () => {
	return (
		<div className='ps-footer__menu'>
			<div className='footer__menu'>
				<ul>
					<li className='title'>FOR INDIVIDUALS</li>
					<li>
						<a href="http://elsaspeak.com/en/product/" target="_blank">ELSA Pro Subscription  </a>
					</li>
					<li>
						<a href="https://elsaspeak.com/en/product" target="_blank" >ELSA as a Gift</a>
					</li>
					<li>
						<a href="https://elsaspeak.com/en/elsa-instant" target="_blank">ELSA Instant</a>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>for organizations</li>
					<li>
						<a href="https://elsaspeak.com/en/schools/homepage" target="_blank">English for Schools</a>

					</li>
					<li>
						<a href="https://elsaspeak.com/b2b/homepage" target="_blank">English for Companies</a>
					</li>
					<li>
						<a href="https://elsaspeak.com/en/english-for-companies/demo" target="_blank">ELSA API</a>

					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>COMPANY</li>
					<li>
						<a href="http://elsaspeak.com/about-us" target="_blank">About us</a>

					</li>
					<li>
						<a href="https://elsaspeak.com/careers" target="_blank">Career</a>

					</li>
					<li>
						<a href="https://elsaspeak.com/en/affiliates" target="_blank">Affiliates</a>

					</li>
					<li>
						<a href="https://elsaspeak.com/blog" target="_blank">Blog</a>

					</li>
					<li>
						<a href="#">Customers</a>

					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>SOLUTIONS</li>
					<li>
						<Link href='/'>
							<a>ELSA for airlines</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA for hotels</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA for IT & Consulting</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA for healthcare</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>DOWNLOAD</li>
					<li>
						<a href='https://apps.apple.com/us/app/elsa-learn-and-speak-english/id1083804886' target="_blank">
							<img src="/static/img/pages/download-apple.png" alt="Apple Download" />
						</a>
					</li>
					<li>
						<a href='https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_US&gl=US' target="_blank">
							<img src="/static/img/pages/download-chplay.png" alt="CHPlay Download" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterMenu;
