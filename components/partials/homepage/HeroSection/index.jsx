import React from 'react';
import background from '~/public/static/img/bg/home-section.png';
import { SectionWrapper, Content, H1, P, ButtonHero } from './style'
import { Link as LinkScroll } from 'react-scroll'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Content>
                <H1 >
                    Level up your employees’ English speaking skills
                </H1>

                <P >
                    ELSA is the go-to solution for banks, hotels, airline companies and many industry
                    <br /> leaders when it comes to training English at scale.
                </P>
                <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
                    <ButtonHero >
                        Request a Demo
                    </ButtonHero>
                </LinkScroll>
            </Content>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
