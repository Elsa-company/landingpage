import React from 'react'
import Container from '~/components/elements/Container';
import background from '~/public/static/img/bg/section-6.png';
import * as Styled from './style'
import { Element } from 'react-scroll';

const StoriesSection = () => {
    return (
        <Element name="customer-stories">
            <Styled.SectionWrapper background={background}>
                <Container>
                    <Styled.Title>
                        Success stories
                    </Styled.Title>

                    <Styled.EducationWrapper>
                        <Styled.EducationItem >
                            <Styled.EducationThumb>
                                <img src="/static/img/pages/education-1.png" alt="" />
                            </Styled.EducationThumb>
                            <Styled.EducationContent>
                                <Styled.EducationContentHead>
                                    <Styled.EducationContentHeadButton>
                                        <button>IT & Consulting</button>
                                    </Styled.EducationContentHeadButton>
                                    <Styled.EducationContentHeadTitle>
                                        RICE students increased their pronunciation score by 14% with ELSA
                                    </Styled.EducationContentHeadTitle>
                                </Styled.EducationContentHead>
                                <Styled.EducationContentFooter>
                                    <p>
                                        Read story
                                        <img src="/static/img/icons/next-icon.png" alt="" />
                                    </p>
                                </Styled.EducationContentFooter>
                            </Styled.EducationContent>
                        </Styled.EducationItem>
                        <Styled.EducationItem >
                            <Styled.EducationThumb>
                                <img src="/static/img/pages/education-2.png" alt="" />
                            </Styled.EducationThumb>
                            <Styled.EducationContent>
                                <Styled.EducationContentHead>
                                    <Styled.EducationContentHeadButton>
                                        <button>Education</button>
                                    </Styled.EducationContentHeadButton>
                                    <Styled.EducationContentHeadTitle>
                                        RICE students increased their pronunciation score by 14% with ELSA
                                    </Styled.EducationContentHeadTitle>
                                </Styled.EducationContentHead>
                                <Styled.EducationContentFooter>
                                    <p>
                                        Read story
                                        <img src="/static/img/icons/next-icon.png" alt="" />
                                    </p>
                                </Styled.EducationContentFooter>
                            </Styled.EducationContent>
                        </Styled.EducationItem>
                        <Styled.EducationItem >
                            <Styled.EducationThumb>
                                <img src="/static/img/pages/education-3.png" alt="" />
                            </Styled.EducationThumb>
                            <Styled.EducationContent>
                                <Styled.EducationContentHead>
                                    <Styled.EducationContentHeadButton>
                                        <button>Organization</button>
                                    </Styled.EducationContentHeadButton>
                                    <Styled.EducationContentHeadTitle>
                                        100% of ATAD Steel Structure employees  showed improvement after 6 months with top performer practiced 24 minutes/ day
                                    </Styled.EducationContentHeadTitle>
                                </Styled.EducationContentHead>
                                <Styled.EducationContentFooter>
                                    <p>
                                        Read story
                                        <img src="/static/img/icons/next-icon.png" alt="" />
                                    </p>
                                </Styled.EducationContentFooter>
                            </Styled.EducationContent>
                        </Styled.EducationItem>
                    </Styled.EducationWrapper>

                    <Styled.Title >
                        Awards and Recognitions
                    </Styled.Title>

                    <Styled.AwardsWrapper>
                        <Styled.AwardsItem >
                            <Styled.AwardsItemThumb>
                                <img src="/static/img/pages/awards-1.png" alt="" />
                            </Styled.AwardsItemThumb>
                            <Styled.AwardsItemBody>
                                Top 4 companies using AI to transform the world
                            </Styled.AwardsItemBody>
                        </Styled.AwardsItem>
                        <Styled.AwardsItem >
                            <Styled.AwardsItemThumb>
                                <img src="/static/img/pages/awards-2.png" alt="" />
                            </Styled.AwardsItemThumb>
                            <Styled.AwardsItemBody>
                                Most Innovative Artificial Intelligence Startups
                            </Styled.AwardsItemBody>
                        </Styled.AwardsItem>
                        <Styled.AwardsItem >
                            <Styled.AwardsItemThumb>
                                <img src="/static/img/pages/awards-3.png" alt="" />
                            </Styled.AwardsItemThumb>
                            <Styled.AwardsItemBody>
                                World changing ideas in the year of 2020
                            </Styled.AwardsItemBody>
                        </Styled.AwardsItem>
                    </Styled.AwardsWrapper>
                </Container>
            </Styled.SectionWrapper>
        </Element>

    )
}

export default StoriesSection
