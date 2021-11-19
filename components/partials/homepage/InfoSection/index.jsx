import React from 'react'
import { useSpring, animated } from 'react-spring'
import Container from '~/components/elements/Container';
import background from '~/public/static/img/bg/section-3.png';
import globe from '~/public/static/img/bg/section3-2.png';
import * as Styled from './style'

const Company = () => {
    const globeStyles = useSpring({
        loop: { reverse: true },
        from: { x: 0,  transform: 'rotate(0deg)'},
        to: { x: 50, transform: 'rotate(20deg)'},
        config: { duration: 3000 },
    })


    return (
        <Styled.SectionWrapper background={background}>
            <animated.div >
                <Styled.Globe style={{ ...globeStyles }}>
                    <img src={globe} alt="ELSA - Globe" />
                </Styled.Globe>
            </animated.div>
            <Container>
                <Styled.InfoHead>
                    <Styled.InfoHeadH1>A personal AI English speaking coach for each employee</Styled.InfoHeadH1>
                    <Styled.InfoHeadP >ELSA helps your employees improve confidence and <br />
                        speaking skills in as little as 3 months. No class needed.</Styled.InfoHeadP>
                </Styled.InfoHead>

                <Styled.InfoCardWrapper>
                    <Styled.InfoCardWrapperTitle>
                        <Styled.InfoCardWrapperTitleH2>ELSA has been used by 20M+ users <br />
                         from 100+ countries in the world</Styled.InfoCardWrapperTitleH2>
                    </Styled.InfoCardWrapperTitle>
                    <Styled.CardGroup>
                        <Styled.CardGroupItem>
                            <Styled.CardGroupItemPercent>
                                90%
                            </Styled.CardGroupItemPercent>
                            <Styled.CardGroupItemContent>
                                saw an improvement in pronunciation
                            </Styled.CardGroupItemContent>
                        </Styled.CardGroupItem>
                        <Styled.CardGroupItem>
                            <Styled.CardGroupItemPercent>
                                68%
                            </Styled.CardGroupItemPercent>
                            <Styled.CardGroupItemContent>
                                felt they spoke more clearly
                            </Styled.CardGroupItemContent>
                        </Styled.CardGroupItem>
                        <Styled.CardGroupItem>
                            <Styled.CardGroupItemPercent>
                                95%
                            </Styled.CardGroupItemPercent>
                            <Styled.CardGroupItemContent>
                                expressed higher confidence in speaking english
                            </Styled.CardGroupItemContent>
                        </Styled.CardGroupItem>
                    </Styled.CardGroup>
                </Styled.InfoCardWrapper>
                <Styled.InfoFooter>
                    <Styled.InfoFooterP>(*Based on learners who use ELSA for 10 minutes a day for three months.)</Styled.InfoFooterP>
                </Styled.InfoFooter>
            </Container>
        </Styled.SectionWrapper>
    )
}

export default Company
