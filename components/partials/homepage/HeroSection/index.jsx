import React from 'react';
import background from '~/public/static/img/bg/home-section.png';
import { SectionWrapper, Content, H1, P, ButtonHero } from './style'
import { Link as LinkScroll } from 'react-scroll'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Content>
                <H1 data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                    Level up your employees’ English speaking skills
                </H1>

                <P data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                    ELSA is the go-to solution for banks, hotels, airline companies and many industry
                    <br /> leaders when it comes to training English at scale.
                </P>
                <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
                    <ButtonHero data-aos='fade-up' data-aos-delay='600' data-aos-duration='750'>
                        Request a Demo
                    </ButtonHero>
                </LinkScroll>
            </Content>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
