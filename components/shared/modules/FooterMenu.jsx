import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FooterMenu = () => {
	return (
		<div className='ps-footer__menu'>
			<div className='footer__menu'>
				<ul>
					<li className='title'>FOR INDIVIDUALS</li>
					<li>
						<Link href='#'>
							<a>ELSA Pro Subscription  </a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA as a Gift</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA Instant</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>for organizations</li>
					<li>
						<Link href='#'>
							<a>English for Schools</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>English for Companies</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>ELSA API</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>COMPANY</li>
					<li>
						<Link href='/'>
							<a>About us</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>Career</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>Affiliates</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a>Customers</a>
						</Link>
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
						<Link href='/'>
							<img src="/static/img/pages/download-apple.png" alt="" />
						</Link>
					</li>
					<li>
						<Link href='#'>
						<img src="/static/img/pages/download-chplay.png" alt="" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterMenu;
