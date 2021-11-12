import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'

const ContainerPage = dynamic(() => import( '~/components/layouts/ContainerPage'))
const HeroSection = dynamic(() => import( '~/components/partials/api/HeroSection'))
const HowItWorkSection = dynamic(() => import( '~/components/partials/api/HowItWorkSection'))
const InfoSection = dynamic(() => import( '~/components/partials/homepage/InfoSection'))

const Homepage = () => {
	return (
		<ContainerPage title='API Page' boxed={true}>
			<div className='ps-page--single'>
				<HeroSection />
				<HowItWorkSection />
				<InfoSection />
		
			</div>
		</ContainerPage>
	);
};

export default Homepage;
