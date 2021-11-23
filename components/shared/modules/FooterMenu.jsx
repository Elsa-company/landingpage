import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll'
import { useSelector, useDispatch } from 'react-redux';
import { onChangeTabs } from '~/app/features/app/slice';


const FooterMenu = () => {

	const dispatch = useDispatch();
	const appRedux = useSelector(state => state.app);

	const handleClick = (key) => {
		dispatch(onChangeTabs(key))
	}
	return (
		<div className='ps-footer__menu'>
			<div className='footer__menu'>
				<ul>
					<li className='title'>FOR INDIVIDUALS</li>
					<li>
						<a href="https://elsaspeak.com/en/product" target="_blank">ELSA Pro Subscription  </a>
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
					<li className='title'>
						<a href="#">
							for organizations
						</a>
					</li>
					<li>
						<a href="https://elsaspeak.com/en/schools/homepage" target="_blank">English for Schools</a>

					</li>
					<li>
						<a href="#">English for Companies</a>
					</li>
					<li>
						<Link href="/api-page" >ELSA API</Link>
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
						<LinkScroll to="company" spy={true} smooth={true} offset={-100} duration={1000}>
							Customers
						</LinkScroll>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>SOLUTIONS</li>
					<li>
						<Link href='/airline-page'>
							<a>ELSA for airlines</a>
						</Link>
					</li>
					<li>
						<LinkScroll to="customizer" spy={true} smooth={true} offset={-100} duration={1500} onClick={() => {handleClick(2)}}>
							ELSA for hotels
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to="customizer" spy={true} smooth={true} offset={-100} duration={1500} onClick={() => {handleClick(3)}}>
							ELSA for IT & Consulting
						</LinkScroll>
					</li>	
					<li>
						<LinkScroll to="customizer" spy={true} smooth={true} offset={-100} duration={1500} onClick={() => {handleClick(4)}}>
							ELSA for healthcare
						</LinkScroll>
					</li>
				</ul>
			</div>
			<div className='footer__menu'>
				<ul>
					<li className='title'>DOWNLOAD</li>
					<li>
						<a href='https://apps.apple.com/us/app/elsa-learn-and-speak-English/id1083804886' target="_blank">
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
