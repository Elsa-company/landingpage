import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Drawer, Button, Radio, Space } from 'antd';
import Logo from '~/components/elements/Logo';
import Router from 'next/router';
import { logout } from '~/app/features/auth/slice';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import { Link as LinkScroll } from 'react-scroll'

const HeaderDefault = () => {

	return (
		<header className='header'>
			<div className="ps-container">
				<div className='header-container'>
					<div className="header-container__left">
						<Logo />
					</div>
					<div className="header-container__right">
						<div className="header-menu">
							{/* <div className="menu-item">
								<LinkScroll to="customer-stories" spy={true} smooth={true} offset={-100} duration={1500}>
									Customer stories
								</LinkScroll>
							</div> */}
							<div className="menu-item">
								<a href="https://elsaspeak.com/en/english-for-companies/plans" target="_blank">
									Pricing
								</a>
							</div>
							<div className="menu-item">
								<a href="https://partner.elsaspeak.com/login" target="_blank">
									Login
								</a>
							</div>
							<div className="menu-item">
								<LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
									<button className="ps-btn">
										Request a Demo
									</button>
								</LinkScroll>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='header-container'>

				{/* <div className='header-grid'>
					<div className='header-grid__item'>
						<img src="/static/img/bg/logo.png" alt="" />
					</div>
					<div className='header-grid__item'>
						<span>
							<Link href='/page/giveaways'>
								<a>GIVEAWAYS</a>
							</Link>
						</span>
					</div>
					<div className='header-grid__item'>
						<span>
							<Link href='/page/membership'>
								<a>MEMBERSHIP</a>
							</Link>
						</span>
					</div>
					<div className='header-grid__item'>
						<span>
							<Link href='/'>
								<img src='/static/img/logo_light.png' alt='' />
							</Link>
						</span>
					</div>
					<div className='header-grid__item'>
						<span>
							<Link href='/page/partners'>
								<a>PARTNERS</a>
							</Link>
						</span>
					</div>
				</div> */}
			</section>
		</header>
	);
};

export default HeaderDefault;
