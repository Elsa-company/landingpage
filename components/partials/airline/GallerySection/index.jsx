import React from 'react';
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
                        <img src={img1} alt="" />
                    </CardImage>
                </CardWrapper>
                <CardWrapper>
                    <CardImage>
                        <img src={img2} alt="" />
                    </CardImage>
                </CardWrapper>
                <CardWrapper>
                    <CardImage>
                        <img src={img3} alt="" />
                    </CardImage>
                </CardWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default GallerySection;
