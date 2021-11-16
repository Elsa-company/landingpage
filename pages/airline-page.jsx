import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'

const ContainerPageAirline = dynamic(() => import( '~/components/layouts/ContainerPageAirline'))
const HeroSection = dynamic(() => import( '~/components/partials/airline/HeroSection'))
const DesignSection = dynamic(() => import( '~/components/partials/airline/DesignSection'))
const AwardSection = dynamic(() => import( '~/components/partials/api/AwardSection'))
const InfoSection = dynamic(() => import( '~/components/partials/homepage/InfoSection'))
const ContactSection = dynamic(() => import( '~/components/partials/airline/ContactSection'))
const GallerySection = dynamic(() => import( '~/components/partials/airline/GallerySection'))

const Homepage = () => {
	return (
		<ContainerPageAirline title='Airline Page' boxed={true}>
			<div className='ps-page--single'>
				<HeroSection />
				<GallerySection />
				<InfoSection />
				<DesignSection />
				<ContactSection />
				
			</div>
		</ContainerPageAirline>
	);
};

export default Homepage;
