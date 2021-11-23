import React from 'react'
import { useSpring, animated } from 'react-spring'
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import img1 from '~/public/static/img/pages/1.png'
import img2 from '~/public/static/img/pages/2.png'
import img3 from '~/public/static/img/pages/3.png'
import img4 from '~/public/static/img/pages/4.png'
import img5 from '~/public/static/img/pages/5.png'
import img6 from '~/public/static/img/pages/6.png'
import img7 from '~/public/static/img/pages/7.png'
import img8 from '~/public/static/img/pages/8.png'
import img9 from '~/public/static/img/pages/9.png'
import companyPhone from '~/public/static/img/pages/company-phone.png'

import LinkText from '~/components/elements/LinkText'
import Container from '~/components/elements/Container'
import { Link as LinkScroll, Element } from 'react-scroll'

import { SectionWrapper, Gallery, Traditional, TraditionalLeft, TraditionalRight, TraditionalTitle, TraditionalDesc, ButtonCustom } from './style'

const Company = () => {

    const styles = useSpring({
        loop: { reverse: true },
        from: { y: -20 },
        to: { y: 20 },
        config: { duration: 4000 },
    })

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,
    };

    return (
        <SectionWrapper>
            <Element name="company">
                <Container>
                    <Gallery>
                        <Slider {...settings}>
                            <img src={img1} width={100} alt="Company slide 1" />
                            <img src={img2} width={100} alt="Company slide 2" />
                            <img src={img3} width={100} alt="Company slide 3" />
                            <img src={img4} width={100} alt="Company slide 4" />
                            <img src={img5} width={100} alt="Company slide 5" />
                            <img src={img6} width={100} alt="Company slide 6" />
                            <img src={img7} width={100} alt="Company slide 7" />
                            <img src={img8} width={100} alt="Company slide 8" />
                            <img src={img9} width={100} alt="Company slide 9" />
                        </Slider>
                    </Gallery>
                    <Traditional>
                        <TraditionalLeft>
                            <TraditionalTitle >
                                Replacing traditional <br /> English training
                            </TraditionalTitle>
                            <TraditionalDesc >
                                Each year, ELSA helps our partners save millions in hiring tutors.
                                <br />
                                With our AI-powered speech-recognition technology, your employees can receive detailed feedback on pronunciation, fluency, intonation and more without going to any physical class.
                            </TraditionalDesc>
                            <LinkScroll to="request-demo" spy={true} smooth={true} offset={-100} duration={1500}>
                                <ButtonCustom >
                                    Request a Demo
                                </ButtonCustom>
                            </LinkScroll>
                        </TraditionalLeft>
                        <TraditionalRight>
                            <animated.div style={{ ...styles }}>
                                <LazyLoad>
                                    <img src={companyPhone} alt="Elsa two phones" />
                                </LazyLoad>

                            </animated.div>

                        </TraditionalRight>
                    </Traditional>
                </Container>
            </Element>
        </SectionWrapper>
    )
}

export default Company
