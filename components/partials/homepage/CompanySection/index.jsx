import React from 'react'
import { useSpring, animated } from 'react-spring'
import Slider from "react-slick";

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
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
    };

    return (
        <SectionWrapper>
            <Container>
                <Gallery>
                    <Slider {...settings}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                        <img src={img8} alt="" />
                        <img src={img9} alt="" />
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
                        <LinkText text={'Learn more about our technology'}></LinkText>
                        <ButtonCustom >
                            Request a Demo
                        </ButtonCustom>
                    </TraditionalLeft>
                    <TraditionalRight>
                        <animated.div style={{ ...styles }}>
                            <img src={companyPhone} alt="Elsa two phones" />
                        </animated.div>

                    </TraditionalRight>
                </Traditional>
            </Container>
        </SectionWrapper>
    )
}

export default Company
