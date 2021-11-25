import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';
import { Drawer, Button, Radio, Space, Dropdown } from 'antd';
import Logo from '~/components/elements/LogoAirline';
import Router from 'next/router';
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
		<header className='header-airline' data-sticky="true" id="headerSticky">
			<div className="ps-container">
				<div className='header-container'>
					<div className="header-container__left">
						<Logo />
					</div>
					<div className="header-container__right">
						<div className="header-menu">
							{/* <div className="menu-item">
								Customer stories
							</div> */}
							<div className="menu-item">
								Pricing
							</div>
							<div className="menu-item">
								Login
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
