import React, { useEffect, useState} from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import HeroSection from '~/components/partials/homepage/HeroSection';
import CompanySection from '~/components/partials/homepage/CompanySection';
import InfoSection from '~/components/partials/homepage/InfoSection';
import CustomizedSection from '~/components/partials/homepage/CustomizedSection';
import DesignSection from '~/components/partials/homepage/DesignSection';
import StoriesSection from '~/components/partials/homepage/StoriesSection';
import ContactSection from '~/components/partials/homepage/ContactSection';

const Homepage = () => {
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
