import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import Router from 'next/router';

const Maintenance = props => {
	console.log(props);

	return (
		<ContainerPage title='MAINTENANCE' boxed={true}>
			<div className='ps-page--single'>
				<section className='page-maintenance'>
					<div className='page-maintenance__big-img'>
						<img src='/static/img/bg/Group 757.png' alt='' />
					</div>
					<div className='page-maintenance__title'>
						<h2>website under maintenance...</h2>
					</div>
					<div className='page-maintenance__p'>
						<p>Our website is currently undergoing scheduled maintenance.</p>
						<p>We should be back shortly. Thank you for your patience.</p>
					</div>
					<div className='page-maintenance__btn'>
						<span onClick={() => Router.replace('/')}>
							<span>GO BACK</span>
						</span>
					</div>
				</section>
			</div>
		</ContainerPage>
	);
};

// This gets called on every request
export async function getServerSideProps (context) {
	// Pass data to the page via props
	return { props: { token: context.req.headers.referer } };
}

export default Maintenance;
