import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Link as LinkScroll } from 'react-scroll'
import { Drawer, Button, Radio, Space, Dropdown, Menu } from 'antd';
import Router from 'next/router';

import { stickyHeader } from '~/utilities/common-helpers';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';

import { DownOutlined, UserOutlined } from '@ant-design/icons';
import logo from '~/public/static/img/logo/logo_api.png'
import japan from '~/public/static/img/icons/japan.png'
import indonesia from '~/public/static/img/icons/indonesia.png'
import portugal from '~/public/static/img/icons/portugal.png'
import spain from '~/public/static/img/icons/spain.png'
import unitedKingdom from '~/public/static/img/icons/united-kingdom.png'

const HeaderDefault = () => {

	useEffect(() => {
		if (process.browser) {
			window.addEventListener('scroll', stickyHeader);
		}
	}, []);

	function handleMenuClick(e) {
		
	  }
	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1" icon={<img src={unitedKingdom} alt="japan logo" />}>
				English
			</Menu.Item>
			<Menu.Item key="2" icon={<img src={japan} alt="japan logo" />}>
				Japanese
			</Menu.Item>
			<Menu.Item key="3" icon={<img src={portugal} alt="portugal logo" />}>
			Portugese
			</Menu.Item>
			<Menu.Item key="4" icon={<img src={spain} alt="spain logo" />}>
			Spanish
			</Menu.Item>
			<Menu.Item key="5" icon={<img src={indonesia} alt="indonesia logo" />}>
			Indonesian
			</Menu.Item>
		</Menu>
	)
	return (
		<header className='header-api' data-sticky="true" id="headerSticky">
			<div className="ps-container">
				<div className='header-container'>
					<div className="header-container__left">
						<img src={logo} alt="Logo elsa API" height={52} />
					</div>
					<div className="header-container__right">
						<div className="header-menu">

							<div className="menu-item">
								<LinkScroll to="why-elsa-api" spy={true} smooth={true} offset={-100} duration={1500}>
									Why ELSA API
								</LinkScroll>
							</div>
							<div className="menu-item">
								<LinkScroll to="how-it-work" spy={true} smooth={true} offset={-100} duration={1500}>
									How it works?
								</LinkScroll>
							</div>
							<div className="menu-item">
								<LinkScroll to="experience-elsa" spy={true} smooth={true} offset={-100} duration={1500}>
									Experience ELSA
								</LinkScroll>
							</div>
							<div className="menu-item">
								<LinkScroll to="pricing" spy={true} smooth={true} offset={-100} duration={1500}>
									Pricing
								</LinkScroll>
							</div>
							<div className="menu-item">
								<LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
									<button className="ps-btn">
										Request API Key
									</button>
								</LinkScroll>
							</div>
							<div className="menu-item">
								<Dropdown overlay={menu}>
									<Button>
										<img src={unitedKingdom} alt="japan logo" height={16} /> ENG <DownOutlined />
									</Button>
								</Dropdown>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderDefault;
