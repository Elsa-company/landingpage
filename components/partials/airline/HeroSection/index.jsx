import React from 'react';
import background from '~/public/static/img/bg/Airline-Section-1.png';
import { SectionWrapper, Content, H1, P, ButtonHero } from './style'
import Container from '~/components/elements/Container';
import { Link as LinkScroll } from 'react-scroll'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <Content>
                    <H1>
                        Going “extra mile” for your <br /> passengers starts with <br /> better communication
                    </H1>

                    <P >
                        With ELSA, your airline employees are more confident <br />
                        when serving customers from all over the world
                    </P>
                    <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
                        <ButtonHero >
                            Request a Demo
                        </ButtonHero>
                    </LinkScroll>
                </Content>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
