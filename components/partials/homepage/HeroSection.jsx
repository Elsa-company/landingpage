import React from 'react';
import { Link } from 'react-scroll';
// import AreYouOver18 from '~/components/elements/modalPattern/areYouOver18';
// import GetPackage from '~/components/elements/modalPattern/getPackage';
import numberFormat from '~/utilities/numberFormat';

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <section className='ps-hero-section'>
            <div className='ps-hero-section__content'>
                <h1 data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                    Level up your employees’ English speaking skills
                </h1>

                <p data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                    Elsa is the go-to solution for banks, hotels, airline companies and many industry
                    <br /> leaders when it comes to training English at scale.
                </p>

                <button className="ps-btn" data-aos='fade-up' data-aos-delay='600' data-aos-duration='750'>
                    Request a Demo
                </button>
            </div>
        </section>
    );
};

export default HomeDefaultBanner;
