import React from 'react';
import Head from './modules/Head';
import { BackTop } from 'antd';
const DefaultLayout = ({ children }) => (
	<div className='layout--default'>
		<Head />
		{children}
		<div id='loader-wrapper'>
			<div className='loader-section section-left' />
			<div className='loader-section section-right' />
		</div>
		<BackTop duration={1000}>
			<button className='ps-btn--backtop'>
				<i className='icon-arrow-up' />
			</button>
		</BackTop>
	</div>
);

export default DefaultLayout;
