import React from 'react'
import LazyLoad from 'react-lazyload';
import background from '~/public/static/img/bg/section-5.png'
import Container from '~/components/elements/Container';
import * as Styled from './style'

const DesignSection = () => {
    return (
        <Styled.SectionWrapper background={background}>
            <Container>
                <Styled.Title>
                    <h2  >
                        Designed for learners. Loved by HR.
                    </h2>
                    <p  >
                        ELSA Business streamlines recruitment and learning & development process
                    </p>

                </Styled.Title>
                <Styled.Content>
                    <Styled.CardWrapper>
                        <Styled.CardItem  >
                            <Styled.CardHead>
                                <LazyLoad>
                                    <img src="/static/img/pages/design-1.png" alt="Engage your employees" />
                                </LazyLoad>

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
                        <Styled.CardItem >
                            <Styled.CardHead>
                                <LazyLoad>
                                    <img src="/static/img/pages/design-2.png" alt="Measure progress" />
                                </LazyLoad>

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
                        <Styled.CardItem  >
                            <Styled.CardHead>
                                <LazyLoad>
                                    <img src="/static/img/pages/design-3.png" alt="Assess and train at scale" />
                                </LazyLoad>
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
