import React from 'react';
import LazyLoad from 'react-lazyload';
import background from '~/public/static/img/bg/Airline-Section-2.png';
import img1 from '~/public/static/img/pages/gallery-1.png';
import img2 from '~/public/static/img/pages/gallery-2.png';
import img3 from '~/public/static/img/pages/gallery-3.png';
import Container from '~/components/elements/Container';
import {
    SectionWrapper,
    CardWrapper,
    CardContent1,
    CardImage,
    CardContent1Tag,
    CardContent1Title,
    CardContent1Desc
} from './style'

const GallerySection = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <CardWrapper>
                    <CardImage >
                        <LazyLoad>
                            <img src={img1} alt="Gallery 1" />
                        </LazyLoad>

                    </CardImage>
                </CardWrapper>
                <CardWrapper>
                    <CardImage>
                        <LazyLoad>
                            <img src={img2} alt="Gallery 2" />
                        </LazyLoad>
                    </CardImage>
                </CardWrapper>
                <CardWrapper>
                    <CardImage>
                        <LazyLoad>
                            <img src={img3} alt="Gallery 3" />
                        </LazyLoad>
                    </CardImage>
                </CardWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default GallerySection;
