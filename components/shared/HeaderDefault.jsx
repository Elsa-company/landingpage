import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';
import { Drawer, Button, Radio, Space } from 'antd';
import Router from 'next/router';
import { logout } from '~/app/features/auth/slice';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import { Link as LinkScroll } from 'react-scroll'
import logo from '~/public/static/img/logo/logo.png'
import mobile_menu from '~/public/static/img/icons/mobile_menu.png'
const HeaderDefault = () => {
	const [profileDrawer, setProfileDrawer] = useState(false);

	useEffect(() => {
		if (process.browser) {
			window.addEventListener('scroll', stickyHeader);
		}
	}, []);

	return (
		<header className='header' data-sticky="true" id="headerSticky">
			<div className="ps-container">
				<div className='header-container'>
					<div className="header-container__left">
						<img src={logo} alt="Logo elsa API" height={52} />
					</div>
					<div className="header-container__right">
						<div className="header-menu">
							{/* <div className="menu-item">
								<LinkScroll to="customer-stories" spy={true} smooth={true} offset={-100} duration={1500}>
									Customer stories
								</LinkScroll>
							</div> */}
							<div className="menu-item">
								<a href="https://elsaspeak.com/en/English-for-companies/plans" target="_blank">
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
				<div className='header-container-mobile'>
					<div className="header-container-mobile__left">
						<img src={logo} alt="Logo elsa API" height={35} />
					</div>
					<div className="header-container-mobile__right">
						<div className="header-menu">

							<img src={mobile_menu} alt="Logo elsa mobile menu" height={25} onClick={() => { setProfileDrawer(!profileDrawer); }} />
						</div>
					</div>
				</div>
			</div>

			<Drawer
				title='Basic Drawer'
				placement='right'
				closable={false}
				onClose={() => setProfileDrawer(false)}
				visible={profileDrawer}
				key='right'
				className='profile-drawer'
				headerStyle={{ display: 'none' }}
			>
				<div className='profile-drawer__bottom'>
					<div className='profile-drawer__bottom-grid'>
						<div className='bottom-grid__item' >
							<span>Pricing</span>
						</div>
						<div className='bottom-grid__item' >
							<span>Login</span>
						</div>
						<div className='bottom-grid__item' >
							<LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
								<button className="ps-btn">
									Request a Demo
								</button>
							</LinkScroll>
						</div>
					</div>
				</div>
			</Drawer>
		</header>
	);
};

export default HeaderDefault;
