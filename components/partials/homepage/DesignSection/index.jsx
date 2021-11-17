import React from 'react'

import background from '~/public/static/img/bg/section-5.png'
import Container from '~/components/elements/Container';
import * as Styled from './style'

const DesignSection = () => {
    return (
        <Styled.SectionWrapper background={background}>
            <Container>
                <Styled.Title>
                    <h2  data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                    Designed for learners. Loved by HRs.
                    </h2>
                    <p  data-aos='fade-up' data-aos-delay='200' data-aos-duration='750'>
                    ELSA Business streamlines recruitment and learning & development process
                    </p>
                   
                </Styled.Title>
                <Styled.Content>
                    <Styled.CardWrapper>
                        <Styled.CardItem  data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                            <Styled.CardHead>
                                <img src="/static/img/pages/design-1.png" alt="" />
                            </Styled.CardHead>
                            <Styled.CardBody>
                                <h3>
                                    Engage your employees
                                </h3>
                                <p>
                                    Increase your employees' engagement with competitive games and communities in ELSA
                                </p>
                            </Styled.CardBody>  
                        </Styled.CardItem>
                        <Styled.CardItem  data-aos='fade-up' data-aos-delay='900' data-aos-duration='750'>
                            <Styled.CardHead>
                                <img src="/static/img/pages/design-2.png" alt="" />
                            </Styled.CardHead>
                            <Styled.CardBody>
                                <h3>
                                Measure progress
                                </h3>
                                <p>
                                Measure the progress by employee, department or the whole company using ELSA dashboards
                                </p>
                            </Styled.CardBody>  
                        </Styled.CardItem>
                        <Styled.CardItem  data-aos='fade-up' data-aos-delay='1300' data-aos-duration='750'>
                            <Styled.CardHead>
                                <img src="/static/img/pages/design-3.png" alt="" />
                            </Styled.CardHead>
                            <Styled.CardBody>
                                <h3>
                                Assess and train at scale
                                </h3>
                                <p>
                                Assign language, technical and social skills tests to employees with a few clicks using ELSA testing platform
                                </p>
                            </Styled.CardBody>  
                        </Styled.CardItem>
                    </Styled.CardWrapper>
                </Styled.Content>
            </Container>
        </Styled.SectionWrapper>
    )
}

export default DesignSection
