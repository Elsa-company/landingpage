import React from 'react';
import background from '~/public/static/img/bg/APISection-1.png';
import {
    SectionWrapper,
    Content,
    H1,
    P,
    ButtonHero,
    InfoHead,
    InfoHeadH1,
    InfoHeadP,
    InfoCardWrapper,
    InfoCardWrapperTitle,
    InfoCardWrapperTitleH2,
    CardGroup,
    CardGroupItem,
    CardGroupItemPercent,
    CardGroupItemContent,
    InfoFooter,
    InfoFooterP
} from './style'
import Container from '~/components/elements/Container';
import { Link as LinkScroll } from 'react-scroll'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <Content>
                    <H1 >
                        Engage your users and <br />
                        stand out from competitors
                    </H1>

                    <P >
                        World leading Speech Recognition API to engage your users
                    </P>
                    <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
                        <ButtonHero >
                            Request API Key
                        </ButtonHero>
                    </LinkScroll>
                </Content>

            </Container>
            <Container>
                <InfoHead>
                    <InfoHeadH1>A game-changing solution for your education platform</InfoHeadH1>
                </InfoHead>

                <CardGroup>
                    <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                        <CardGroupItemPercent fontSize="32px" color="#0099FF">
                            Top ASR in the industry
                        </CardGroupItemPercent>
                        <CardGroupItemContent fontSize="16px" fontWeight={400}>
                            Give your users world class speech recognition feedback - a high value feature for language learning
                        </CardGroupItemContent>
                    </CardGroupItem>
                    <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                        <CardGroupItemPercent fontSize="32px" color="#FF9518">
                            3x conversion rate
                        </CardGroupItemPercent>
                        <CardGroupItemContent fontSize="16px" fontWeight={400}>
                            ELSA conversion to paying customer is 3x the industry standard thanks to the interactive and engaging nature of speaking practice
                        </CardGroupItemContent>
                    </CardGroupItem>
                    <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                        <CardGroupItemPercent fontSize="32px" color="#00BB13">
                            8x user engagement
                        </CardGroupItemPercent>
                        <CardGroupItemContent fontSize="16px" fontWeight={400}>
                            ELSA user's average session time is 23 minutes - top 10% of language learning apps
                        </CardGroupItemContent>
                    </CardGroupItem>


                </CardGroup>

            </Container>
            <Container>
                <InfoHead>
                    <InfoHeadH1>A personal AI English speaking coach for each employee</InfoHeadH1>
                    <InfoHeadP>ELSA helps your employees improve confidence and <br />
                        speaking skills in as little as 3 months. No class needed.</InfoHeadP>
                </InfoHead>

                <InfoCardWrapper>
                    <InfoCardWrapperTitle data-aos-delay='500' data-aos-duration='750'>
                        <InfoCardWrapperTitleH2>ELSA has been used by 15M+ users <br />
                            from 100+ countries in the world</InfoCardWrapperTitleH2>
                    </InfoCardWrapperTitle>
                    <CardGroup>
                        <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                            <CardGroupItemPercent fontSize="64px">
                                90%
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="24px" fontWeight={600}>
                                saw an improvement in pronunciation
                            </CardGroupItemContent>
                        </CardGroupItem>
                        <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                            <CardGroupItemPercent fontSize="64px">
                                68%
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="24px" fontWeight={600}>
                                felt they spoke more clearly
                            </CardGroupItemContent>
                        </CardGroupItem>
                        <CardGroupItem data-aos-delay='700' data-aos-duration='750'>
                            <CardGroupItemPercent fontSize="64px">
                                95%
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="24px" fontWeight={600}>
                                expressed higher confidence in speaking english
                            </CardGroupItemContent>
                        </CardGroupItem>


                    </CardGroup>
                </InfoCardWrapper>
                <InfoFooter>
                    <InfoFooterP>(*Based on learners who use ELSA for 10 minutes a day for three months.)</InfoFooterP>
                </InfoFooter>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
