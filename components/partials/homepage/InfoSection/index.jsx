import React from 'react'
import Container from '~/components/elements/Container';
import background from '~/public/static/img/bg/section-3.png';
import globe from '~/public/static/img/bg/section3-2.png';
import * as Styled from './style'

const Company = () => {
    return (
        <Styled.SectionWrapper background={background}>
            {/* <div className="globe">
                <img src={globe} alt="ELSA - Globe" />
            </div> */}
            <Container>
                <Styled.InfoHead>
                    <Styled.InfoHeadH1 data-aos='zoom-out' data-aos-delay='0' data-aos-duration='750'>A personal AI English speaking coach for each employee</Styled.InfoHeadH1>
                    <Styled.InfoHeadP data-aos='zoom-out' data-aos-delay='300' data-aos-duration='750'>ELSA helps your employees improve confidence and <br />
                        speaking skills in as little as 3 months. No class needed.</Styled.InfoHeadP>
                </Styled.InfoHead>

                <Styled.InfoCardWrapper>
                    <Styled.InfoCardWrapperTitle data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                        <Styled.InfoCardWrapperTitleH2>ELSA has been used by 15M+ users <br />
                            from 100+ countries in the world</Styled.InfoCardWrapperTitleH2>
                    </Styled.InfoCardWrapperTitle>
                    <Styled.CardGroup>
                        <Styled.CardGroupItem data-aos='fade-up' data-aos-delay='700' data-aos-duration='750'>
                            <Styled.CardGroupItemPercent>
                                90%
                            </Styled.CardGroupItemPercent>
                            <Styled.CardGroupItemContent>
                                saw an improvement in pronunciation
                            </Styled.CardGroupItemContent>
                        </Styled.CardGroupItem>
                        <Styled.CardGroupItem data-aos='fade-up' data-aos-delay='700' data-aos-duration='750'>
                            <Styled.CardGroupItemPercent>
                                68%
                            </Styled.CardGroupItemPercent>
                            <Styled.CardGroupItemContent>
                                felt they spoke more clearly
                            </Styled.CardGroupItemContent>
                        </Styled.CardGroupItem>
                        <Styled.CardGroupItem data-aos='fade-up' data-aos-delay='700' data-aos-duration='750'>
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
