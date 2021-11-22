import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'

const ContainerPage = dynamic(() => import( '~/components/layouts/ContainerPage'))
const HeroSection = dynamic(() => import( '~/components/partials/homepage/HeroSection'))
const CompanySection = dynamic(() => import( '~/components/partials/homepage/CompanySection'))
const InfoSection = dynamic(() => import( '~/components/partials/homepage/InfoSection'))
const CustomizedSection = dynamic(() => import( '~/components/partials/homepage/CustomizedSection'))
const DesignSection = dynamic(() => import( '~/components/partials/homepage/DesignSection'))
const StoriesSection = dynamic(() => import( '~/components/partials/homepage/StoriesSection'))
const ContactSection = dynamic(() => import( '~/components/partials/homepage/ContactSection'))

const Homepage = () => {

	useEffect(() => {
		document.body.style.zoom = 1.0;

		document.body.removeAttribute('data-aos-easing')
		document.body.removeAttribute('data-aos-duration')
		document.body.removeAttribute('data-aos-delay')
	}, []);

	return (
		<ContainerPage title='HOME PAGE' boxed={true}>
			<div className='ps-page--single'>
				<HeroSection />
				<CompanySection />
				<InfoSection />
				<CustomizedSection />
				<DesignSection />
				<StoriesSection />
				<ContactSection />
			</div>
		</ContainerPage>
	);
};

export default Homepage;
