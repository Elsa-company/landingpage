import React from 'react';
import background from '~/public/static/img/bg/APISection-1.png';
import { SectionWrapper, Content, H1, P, ButtonHero } from './style'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Content>
                <H1 >
                Engage your users and <br />
                 stand out from competitors
                </H1>

                <P >
                World leading Speech Recognition API to engage your users
                </P>

                <ButtonHero >
                Request API Key
                </ButtonHero>
            </Content>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
