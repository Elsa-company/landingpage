import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Drawer, Button, Radio, Space } from 'antd';
import Logo from '~/components/elements/Logo';
import LoginForm from '~/components/elements/modalPattern/loginForm';
import JoinNowForm from '~/components/elements/modalPattern/joinNowForm';
import Router from 'next/router';
import { logout } from '~/app/features/auth/slice';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';

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
							<div className="menu-item">
								Our Technology
							</div>
							<div className="menu-item">
								Solutions
							</div>
							<div className="menu-item">
								Resources
							</div>
							<div className="menu-item">
								Customers
							</div>
							<div className="menu-item">
								Pricing
							</div>
							<div className="menu-item">
								Login
							</div>
							<div className="menu-item">
								<button className="ps-btn">
									Request a Demo
								</button>
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
