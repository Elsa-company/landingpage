import React, { useEffect } from 'react';
import Head from 'next/head';
import HeaderAPI  from '~/components/shared/HeaderAPI';
import FooterFullwidthAPI from '~/components/shared/FooterFullwidthAPI';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ContainerPage = ({ children, title, boxed = false }) => {
	useEffect(() => {
		AOS.init({
			duration : 750,
			once     : false,
			easing   : 'ease-in',
			delay    : 750,
		});
	}, []);

	let titleView;
	if (title !== null) {
		titleView = process.env.title + ' | ' + title;
	}
	else {
		titleView = process.env.title + ' | ' + process.env.titleDescription;
	}

	return (
		<div className='elsa'>
			<Head>
				<title>{titleView}</title>
			</Head>
			{/* <HeaderContact /> */}
			<HeaderAPI />
			{/* <HeaderMobile /> */}
			<main>{children}</main>
			<FooterFullwidthAPI />
			{/* <NavigationList /> */}

			{/* <ToastContainer /> */}
		</div>
	);
};

export default ContainerPage;
