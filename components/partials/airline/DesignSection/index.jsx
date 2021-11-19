import React from 'react'
import Slider from "react-slick";
import { Link as LinkScroll } from 'react-scroll'
import LazyLoad from 'react-lazyload';
import background from '~/public/static/img/bg/Airline-Section-3.png'
import Container from '~/components/elements/Container';
import * as Styled from './style'


import img1 from '~/public/static/img/pages/1.png'
import img2 from '~/public/static/img/pages/2.png'
import img3 from '~/public/static/img/pages/3.png'
import img4 from '~/public/static/img/pages/4.png'
import img5 from '~/public/static/img/pages/5.png'
import img6 from '~/public/static/img/pages/6.png'
import img7 from '~/public/static/img/pages/7.png'
import img8 from '~/public/static/img/pages/8.png'
import img9 from '~/public/static/img/pages/9.png'
import Button from '~/components/elements/Button';
import AlignCenter from "~/components/elements/AlignCenter"
const DesignSection = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
    };


    return (
        <Styled.SectionWrapper background={background}>
            <Container>
                <Styled.Title>
                    <h2>
                        Designed for learners. Loved by HRs.
                    </h2>
                    <p>
                        ELSA Business streamlines recruitment and learning & development process
                    </p>
                </Styled.Title>
                <Styled.Content>
                    <Styled.CardWrapper>
                        <Styled.CardItem >
                            <Styled.CardHead>
                                <LazyLoad>
                                    <img src="/static/img/pages/design-1.png" alt=" Engage your employees" />
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
                        <Styled.CardItem>
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
                        <Styled.CardItem >
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

                <Styled.Title  >
                    <h2>
                        Awards and Recognitions
                    </h2>
                </Styled.Title>

                <Styled.AwardsWrapper>
                    <Styled.AwardsItem  >
                        <Styled.AwardsItemThumb>
                            <LazyLoad>
                                <img src="/static/img/pages/awards-1.png" alt="Top 4 companies using AI to transform the world" />
                            </LazyLoad>

                        </Styled.AwardsItemThumb>
                        <Styled.AwardsItemBody>
                            Top 4 companies using AI to transform the world
                        </Styled.AwardsItemBody>
                    </Styled.AwardsItem>
                    <Styled.AwardsItem >
                        <Styled.AwardsItemThumb>
                            <LazyLoad>
                                <img src="/static/img/pages/awards-2.png" alt="Most Innovative Artificial Intelligence Startups" />
                            </LazyLoad>

                        </Styled.AwardsItemThumb>
                        <Styled.AwardsItemBody>
                            Most Innovative Artificial Intelligence Startups
                        </Styled.AwardsItemBody>
                    </Styled.AwardsItem>
                    <Styled.AwardsItem>
                        <Styled.AwardsItemThumb>
                            <LazyLoad>
                                <img src="/static/img/pages/awards-3.png" alt="World changing ideas in the year of 2020" />
                            </LazyLoad>

                        </Styled.AwardsItemThumb>
                        <Styled.AwardsItemBody>
                            World changing ideas in the year of 2020
                        </Styled.AwardsItemBody>
                    </Styled.AwardsItem>
                </Styled.AwardsWrapper>

                <Styled.Title  >
                    <h2>
                        The technology trusted by <br /> hundreds of industry leaders
                    </h2>
                </Styled.Title>
                <AlignCenter>
                    <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>

                        <Button fontSize="24px" padding="20px 25px">
                            Request a Demo
                        </Button>
                    </LinkScroll>
                </AlignCenter>

                <Styled.Gallery>
                    <Slider {...settings}>
                        <LazyLoad>
                            <img src={img1} alt="Design avatar item 1" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img2} alt="Design avatar item 2" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img3} alt="Design avatar item 3" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img4} alt="Design avatar item 4" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img5} alt="Design avatar item 5" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img6} alt="Design avatar item 6" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img7} alt="Design avatar item 7" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img8} alt="Design avatar item 8" />
                        </LazyLoad>
                        <LazyLoad>
                            <img src={img9} alt="Design avatar item 9" />
                        </LazyLoad>
                    </Slider>
                </Styled.Gallery>
            </Container>
        </Styled.SectionWrapper>
    )
}

export default DesignSection
