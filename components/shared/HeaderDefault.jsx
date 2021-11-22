import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';
import { Drawer, Button, Radio, Space } from 'antd';
import Logo from '~/components/elements/Logo';
import Router from 'next/router';
import { logout } from '~/app/features/auth/slice';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import { Link as LinkScroll } from 'react-scroll'

const HeaderDefault = () => {

	useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

	return (
		<header className='header'  data-sticky="true" id="headerSticky">
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
		</header>
	);
};

export default HeaderDefault;
