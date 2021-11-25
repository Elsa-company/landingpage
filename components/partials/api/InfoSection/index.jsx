import React from 'react';
import background from '~/public/static/img/bg/APISection-1-1.png';
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
import { Link as LinkScroll, Element } from 'react-scroll'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
        
            <Container>
                <Element name='why-elsa-api'>
                    <InfoHead>
                        <InfoHeadH1>A game-changing solution for your education platform</InfoHeadH1>
                    </InfoHead>

                    <CardGroup>
                        <CardGroupItem >
                            <CardGroupItemPercent fontSize="36px" color="#0099FF">
                                Top ASR in the industry
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="18px" fontWeight={400}>
                                Give your users world class speech recognition feedback - a high value feature for language learning
                            </CardGroupItemContent>
                        </CardGroupItem>
                        <CardGroupItem >
                            <CardGroupItemPercent fontSize="36px" color="#FF9518">
                                3x conversion rate
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="18px" fontWeight={400}>
                                ELSA conversion to paying customer is 3x the industry standard thanks to the interactive and engaging nature of
                                speaking practice
                            </CardGroupItemContent>
                        </CardGroupItem>
                        <CardGroupItem >
                            <CardGroupItemPercent fontSize="36px" color="#00BB13">
                                8x user engagement
                            </CardGroupItemPercent>
                            <CardGroupItemContent fontSize="18px" fontWeight={400}>
                                ELSA user's average session time is 23 minutes - top 10% of language learning apps
                            </CardGroupItemContent>
                        </CardGroupItem>


                    </CardGroup>

                </Element>

            </Container>
            
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
