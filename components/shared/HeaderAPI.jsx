import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';
import { Drawer, Button, Radio, Space, Dropdown } from 'antd';
import Logo from '~/components/elements/Logo';
import Router from 'next/router';
import { logout } from '~/app/features/auth/slice';
import { isClickMenu, onChangeTabs } from '~/app/features/app/slice';
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import logo from '~/public/static/img/logo/logo_api.png'
import { Link as LinkScroll } from 'react-scroll'
const HeaderDefault = () => {

	useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);


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
								Why ELSA API
							</div>
							<div className="menu-item">
								How it works?
							</div>
							<div className="menu-item">
								Experience ELSA
							</div>
							<div className="menu-item">
								Pricing
							</div>
							<div className="menu-item">
								<LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
									<button className="ps-btn">
										REQUEST API KEY
									</button>
								</LinkScroll>

							</div>
							{/* <div className="menu-item">
								Pricing
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderDefault;
