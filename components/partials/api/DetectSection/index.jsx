import React from 'react';
import { Progress } from 'antd';
import LazyLoad from 'react-lazyload';
import background from '~/public/static/img/bg/APISection-3.png';
import {
    SectionWrapper,
    Title,
    GroupCard,
    Card,
    CardHead,
    CardNoti,
    CardContent,
    ContentImage,
    ContentButton,
    GroupPrice,
    Price,
    PriceHead,
    PriceContent,
    PriceContentWrapper,
    PriceContentHead,
    PriceContentHeadTitle,
    PriceContentHeadPrice,
    PriceContentHeadDesc,
    PriceContentHeadButon,
    PriceContentMiddle,
    PriceContentMiddleP,
    PriceContentFotter,
    PriceContentLine
} from './style'
import Container from '~/components/elements/Container';
import detect1 from '~/public/static/img/pages/Detect-1.png'
import detect2 from '~/public/static/img/pages/Detect-2.png'
import detect3 from '~/public/static/img/pages/Detect-3.png'
import micro from '~/public/static/img/pages/micro.png'
const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <Title>
                    <h1>
                        ELSA API can detect <br />
                        speech errors at various levels
                    </h1>
                </Title>

                <GroupCard>
                    <Card>
                        <CardHead background="linear-gradient(180deg, #29F4FF, #5257FF)">
                            Word Pronunciation
                        </CardHead>
                        <CardNoti background="#EDF6FF">
                            <p>Speak the word and get pronunciation feedback for each sound.</p>
                        </CardNoti>
                        <CardContent>
                            <ContentImage>
                                <LazyLoad>
                                    <img src={detect1} alt="Speak the word and get pronunciation feedback for each sound" />
                                </LazyLoad>

                            </ContentImage>
                            <ContentButton>
                                <a  href="https://elsaspeak.com/en/experience#/" target="_blank">
                                    <img src={micro} alt="" /> Click here to Try
                                </a>
                            </ContentButton>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHead background="linear-gradient(180deg, #FFF35C, #EF7B32)">
                            Sentence Pronunciation
                        </CardHead>
                        <CardNoti background="#FFF7F3">
                            <p>Receive feedback on your pronunciation, intonation, and fluency on a sentence.</p>
                        </CardNoti>
                        <CardContent>
                            <ContentImage>
                                <LazyLoad>
                                    <img src={detect2} alt="Receive feedback on your pronunciation, intonation, and fluency on a sentence" />
                                </LazyLoad>

                            </ContentImage>
                            <ContentButton>
                                <a href="https://elsaspeak.com/en/experience#/" target="_blank">
                                    <img src={micro} alt="" /> Click here to Try
                                </a>
                            </ContentButton>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHead background="linear-gradient(180deg, #579CFF, #5CE578)">
                            Word Pronunciation
                        </CardHead>
                        <CardNoti background="#F0FFED">
                            <p>Receive feedback on your pronunciation, vocabulary, grammar & more for your speech.</p>
                        </CardNoti>
                        <CardContent>
                            <ContentImage>
                            <LazyLoad>
                            <img src={detect3} alt="Receive feedback on your pronunciation, vocabulary, grammar & more for your speech." />
                            </LazyLoad>
                                
                            </ContentImage>
                            <ContentButton>
                                <a href="https://elsaspeak.com/en/experience#/" target="_blank">
                                    <img src={micro} alt="" /> Click here to Try
                                </a>
                            </ContentButton>
                        </CardContent>
                    </Card>
                </GroupCard>

                <Title>
                    <h2>Simple, flexible pricing</h2>
                    <p>No overcharges or hidden fees. We prefer simple and transparent.</p>
                </Title>

                <GroupPrice>
                    <Price>
                        <PriceHead>
                            <h3>
                                Scripted
                            </h3>
                        </PriceHead>
                        <PriceContent>
                            <PriceContentWrapper>
                                <PriceContentHead>
                                    <PriceContentHeadTitle color="linear-gradient(110deg,#4294FF ,#35CDFF )">
                                        STANDARD
                                    </PriceContentHeadTitle>
                                    <PriceContentHeadPrice>
                                        0.008
                                        <span>$</span>
                                    </PriceContentHeadPrice>
                                    <PriceContentHeadDesc>
                                        Per every 15s of audio
                                    </PriceContentHeadDesc>
                                    <PriceContentHeadButon background="#fff" color="#3ABBFF">
                                        Get Started
                                    </PriceContentHeadButon>
                                    <p> <b>AUDIO LENGTH</b>  (PER REQUEST)</p>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Up to <b>20s</b>
                                    </p>
                                </PriceContentHead>
                                <PriceContentMiddle>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Word pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Multiple choice pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency assessment</p>
                                    </PriceContentLine>

                                </PriceContentMiddle>
                                <PriceContentFotter>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence, word and phoneme scores </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>
                                            Sentence and phoneme mispronunciations and feedback hints
                                        </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Word stress, reading speed, mispronunciation rate and pausing metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency and intonation metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Spoken IELTS score estimate</p>
                                    </PriceContentLine>
                                </PriceContentFotter>
                            </PriceContentWrapper>
                            <PriceContentWrapper>
                                <PriceContentHead>
                                    <PriceContentHeadTitle color="linear-gradient(110deg,#FC2AC2 ,#FFB84E )">
                                        PREMIUM
                                    </PriceContentHeadTitle>
                                    <PriceContentHeadPrice>
                                        0.01
                                        <span>$</span>
                                    </PriceContentHeadPrice>
                                    <PriceContentHeadDesc>
                                        Per every 15s of audio
                                    </PriceContentHeadDesc>
                                    <PriceContentHeadButon background="linear-gradient(180deg,#29F4FF ,#5257FF )" color="#fff">
                                        Get Started
                                    </PriceContentHeadButon>
                                    <p> <b>AUDIO LENGTH</b>  (PER REQUEST)</p>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Up to <b>45s</b>
                                    </p>
                                </PriceContentHead>
                                <PriceContentMiddle>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Word pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Multiple choice pronunciation</p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency assessment</p>
                                    </PriceContentLine>

                                </PriceContentMiddle>
                                <PriceContentFotter>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence, word and phoneme scores </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>
                                            Sentence and phoneme mispronunciations and feedback hints
                                        </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Word stress, reading speed, mispronunciation rate and pausing metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency and intonation metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Spoken IELTS score estimate</p>
                                    </PriceContentLine>
                                </PriceContentFotter>
                            </PriceContentWrapper>
                        </PriceContent>
                    </Price>
                    <Price>
                        <PriceHead>
                            <h3>
                                Unscripted
                            </h3>
                        </PriceHead>
                        <PriceContent>
                            <PriceContentWrapper>
                                <PriceContentHead>
                                    <PriceContentHeadTitle color="linear-gradient(110deg,#4294FF ,#35CDFF )">
                                        STANDARD
                                    </PriceContentHeadTitle>
                                    <PriceContentHeadPrice>
                                        0.02
                                        <span>$</span>
                                    </PriceContentHeadPrice>
                                    <PriceContentHeadDesc>
                                        Per every 15s of audio
                                    </PriceContentHeadDesc>
                                    <PriceContentHeadButon background="#fff" color="#3ABBFF">
                                        Get Started
                                    </PriceContentHeadButon>
                                    <p> <b>AUDIO LENGTH</b>  (PER REQUEST)</p>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Up to <b>20s</b>
                                    </p>
                                </PriceContentHead>
                                <PriceContentMiddle>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Spontaneous speech assessment </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence and phoneme </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency assessment </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>IELTS assessment</p>
                                    </PriceContentLine>

                                </PriceContentMiddle>
                                <PriceContentFotter>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>All STANDARD metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>
                                            Spoken transcript
                                        </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Grammar score and feedback </p>
                                    </PriceContentLine>
                                    <PriceContentLine underline>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2012)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#B4B4B4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2012">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Vocabulary score and feedback</p>
                                    </PriceContentLine>
                                </PriceContentFotter>
                            </PriceContentWrapper>
                            <PriceContentWrapper>
                                <PriceContentHead>
                                    <PriceContentHeadTitle color="linear-gradient(110deg,#FC2AC2 ,#FFB84E )">
                                        PREMIUM
                                    </PriceContentHeadTitle>
                                    <PriceContentHeadPrice>
                                        0.025
                                        <span>$</span>
                                    </PriceContentHeadPrice>
                                    <PriceContentHeadDesc>
                                        Per every 15s of audio
                                    </PriceContentHeadDesc>
                                    <PriceContentHeadButon background="linear-gradient(180deg,#29F4FF ,#5257FF )" color="#fff">
                                        Get Started
                                    </PriceContentHeadButon>
                                    <p> <b>AUDIO LENGTH</b>  (PER REQUEST)</p>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Up to <b>150s</b>
                                    </p>
                                </PriceContentHead>
                                <PriceContentMiddle>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Spontaneous speech assessment </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Sentence and phoneme </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Fluency assessment </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>IELTS assessment</p>
                                    </PriceContentLine>

                                </PriceContentMiddle>
                                <PriceContentFotter>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>All STANDARD metrics </p>
                                    </PriceContentLine>
                                    <PriceContentLine>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>
                                            Spoken transcript
                                        </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Grammar score and feedback </p>
                                    </PriceContentLine>
                                    <PriceContentLine >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_739_2000)">
                                                <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9938 5.88016 15.149 3.8489 13.6501 2.34995C12.1511 0.850987 10.1198 0.00615597 8 0V0ZM6.66667 11.6093L3.05734 8L4 7.05733L6.66667 9.724L12 4.39067L12.9427 5.33333L6.66667 11.6093Z" fill="#3AB9FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_739_2000">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p>Vocabulary score and feedback</p>
                                    </PriceContentLine>
                                </PriceContentFotter>
                            </PriceContentWrapper>
                        </PriceContent>
                    </Price>
                </GroupPrice>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
