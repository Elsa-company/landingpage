import React, { useState, useEffect } from 'react'
import Container from '~/components/elements/Container';
import * as Styled from './style'
import background from '~/public/static/img/bg/section-4.png';
import customize1 from '~/public/static/img/pages/customize-1.png'
import customize2 from '~/public/static/img/pages/customize-2.png'
import customize3 from '~/public/static/img/pages/customize-3.png'
import customize4 from '~/public/static/img/pages/customize-4.png'
import avatar1 from '~/public/static/img/pages/avatar-1.png'
import avatar2 from '~/public/static/img/pages/avatar-2.png'
import avatar3 from '~/public/static/img/pages/avatar-3.png'
import avatar4 from '~/public/static/img/pages/avatar-4.png'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { Link as LinkScroll, Element } from 'react-scroll'

const CustomizedSection = () => {
    const appRedux = useSelector(state => state.app);


    const [key, setKey] = useState(1)
    const [quote, setQuote] = useState({
        mainImage: customize1,
        quotes: {
            text: [
                "ELSA has partnered with pioneering airlines to offer training to thousands of cabin crew members.",
                "Our AI English assessment and training app allows cabin crew to deliver the best-in-class communication with customers, while shaving off up to 80% in traditional training costs."
            ],
            link: {
                text: "About our airline modules",
                link: "#"
            },
            quote: "Training cooperation with ELSA Speak is one of the strategic steps for human resource development of ATAD. ",
            author: "Ms. Nguyen Thi Phuc Tuyen",
            position: "HRD at ATAD",
            avatar: avatar1
        }
    })

    const changeContent = (key) => {
        setKey(key)
        if (key == 1) {
            setQuote({
                mainImage: customize1,
                quotes: {
                    text: [
                        "ELSA has partnered with pioneering airlines to offer training to thousands of cabin crew members.",
                        "Our AI English assessment and training app allows cabin crew to deliver the best-in-class communication with customers, while shaving off up to 80% in traditional training costs."
                    ],
                    link: {
                        text: "About our airline modules",
                        link: "/airline-page"
                    },
                    quote: "Training cooperation with ELSA Speak is one of the strategic steps for human resource development of ATAD. ",
                    author: "Ms. Nguyen Thi Phuc Tuyen",
                    position: "HRD at ATAD",
                    avatar: avatar1
                }
            })
        } else if (key == 2) {
            setQuote({
                mainImage: customize2,
                quotes: {
                    text: [
                        "Clear communication and pronunciation are a must for high-quality service.",
                        "ELSA has partnered with leading global luxury hotel chains to build interactive content for customer-facing staff, increasing customer satisfaction while improving English training ROI."
                    ],
                    quote: "ELSA help us make the teaching-learning process as smooth and easy as possible.",
                    author: "Mr. Nam Do",
                    position: "Managing Director at YOLA",
                    avatar: avatar2
                }
            })
        } else if (key == 3) {
            setQuote({
                mainImage: customize3,
                quotes: {
                    text: [
                        "English communication is a must-have skill for IT staff in the international business environment.",
                        "ELSA has worked with IT Outsourcing & Consulting firms to train their IT staff to improve their English speaking, allowing for smooth internal and external communication.",
                        "Employees improve their pronunciation in as soon as  3 months of practice, resulting in considerable improvements in business processes."
                    ],
                    quote: "I definitely feel that ELSA has been worth the money my program is spending on it.",
                    author: "Ms. Jennifer Wilson ",
                    position: "Director, Program in writing & communication at Rice University",
                    avatar: avatar3
                }
            })
        } else if (key == 4) {
            setQuote({
                mainImage: customize4,
                quotes: {
                    text: [
                        "English pronunciation can make or break customer satisfaction, yet there's never been a good solution to train English pronunciation at scale.",
                        "ELSA helps your staff improve their English pronunciation and comprehensibility, thereby increasing customer satisfaction and most importantly, helping you win new business."
                    ],
                    quote: "Training cooperation with ELSA Speak is one of the strategic steps for human resource development of ATAD. ",
                    author: "Ms. Le Diem",
                    position: "Founder of PHAT AM HAY",
                    avatar: avatar4
                }
            })
        }
    }

    useEffect(() => {
        changeContent(appRedux.customizeIndex)
    }, [appRedux.customizeIndex])

    return (
        <Styled.SectionWrapper background={background}>
            <Element name="customizer">
                <Container>
                    <Styled.TitleWrapper>
                        <Styled.TitleWrapperH1 >
                            Customized content for your industry
                        </Styled.TitleWrapperH1>
                        <Styled.TitleWrapperP >
                            Learning is all about context. That’s why we have a dedicated team of <br />
                            language experts always ready to create industry-relevant modules for you.
                        </Styled.TitleWrapperP>
                    </Styled.TitleWrapper>

                    <Styled.CustomizedContent>
                        <Styled.ListFunction>
                            <Styled.ListFunctionItem active={key == 1 ? "true" : "false"} onClick={() => { changeContent(1) }}>
                                <i>
                                    {key == 1 ?
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" />
                                            <path d="M13.9165 33.0417H32.604" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.0718 22.7881L21.5835 30.1667H24.4669L28.2918 21.0625" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24.4582 15.811L19.3722 12.4375L16.7915 13.2934L20.1826 17.2292" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33.9417 17.1024C33.8614 16.8636 33.7345 16.6428 33.5681 16.4526C33.4018 16.2625 33.1993 16.1067 32.9722 15.9941C32.7451 15.8815 32.4978 15.8144 32.2446 15.7966C31.9913 15.7787 31.737 15.8105 31.4961 15.8901L18.1851 20.2893L15.6124 18.8077L13.4375 19.514L15.5264 23.4584H20.8216L32.7189 19.5293C32.9601 19.4498 33.183 19.3238 33.375 19.1588C33.567 18.9937 33.7243 18.7927 33.8379 18.5672C33.9515 18.3418 34.0191 18.0964 34.0369 17.8451C34.0547 17.5937 34.0224 17.3414 33.9417 17.1024V17.1024Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" fill-opacity="0.1" />
                                            <path d="M13.9165 33.0417H32.604" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.0718 22.7881L21.5835 30.1667H24.4669L28.2918 21.0625" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24.4582 15.811L19.3722 12.4375L16.7915 13.2934L20.1826 17.2292" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33.9417 17.1023C33.8614 16.8635 33.7345 16.6428 33.5681 16.4526C33.4018 16.2624 33.1993 16.1066 32.9722 15.994C32.7451 15.8815 32.4978 15.8143 32.2446 15.7965C31.9913 15.7787 31.737 15.8105 31.4961 15.8901L18.1851 20.2892L15.6124 18.8077L13.4375 19.5139L15.5264 23.4584H20.8216L32.7189 19.5293C32.9601 19.4497 33.183 19.3238 33.375 19.1587C33.567 18.9936 33.7243 18.7926 33.8379 18.5672C33.9515 18.3418 34.0191 18.0964 34.0369 17.845C34.0547 17.5937 34.0224 17.3413 33.9417 17.1023V17.1023Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }



                                </i>
                                <p>ELSA for airlines</p>
                            </Styled.ListFunctionItem>
                            <Styled.ListFunctionItem active={key == 2 ? "true" : "false"} onClick={() => { changeContent(2) }}>
                                <i>
                                    {key == 2 ?
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" />
                                            <path d="M12.9585 21.0625L23.5002 12.4375L34.0418 21.0625" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3545 22.5V32.5625H25.8962" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M34.0417 26.6371C34.0417 28.9045 30.2083 32.5625 30.2083 32.5625C30.2083 32.5625 26.375 28.9045 26.375 26.6371C26.375 24.2959 28.3683 22.9792 30.2083 22.9792C32.0483 22.9792 34.0417 24.2959 34.0417 26.6371Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30.2087 27.2917C30.4733 27.2917 30.6878 27.0771 30.6878 26.8125C30.6878 26.5479 30.4733 26.3333 30.2087 26.3333C29.944 26.3333 29.7295 26.5479 29.7295 26.8125C29.7295 27.0771 29.944 27.2917 30.2087 27.2917Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" fill-opacity="0.1" />
                                            <path d="M12.9585 21.0625L23.5002 12.4375L34.0418 21.0625" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3545 22.5V32.5625H25.8962" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M34.0417 26.6372C34.0417 28.9046 30.2083 32.5626 30.2083 32.5626C30.2083 32.5626 26.375 28.9046 26.375 26.6372C26.375 24.296 28.3683 22.9792 30.2083 22.9792C32.0483 22.9792 34.0417 24.296 34.0417 26.6372Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30.2087 27.2916C30.4733 27.2916 30.6878 27.0771 30.6878 26.8124C30.6878 26.5478 30.4733 26.3333 30.2087 26.3333C29.944 26.3333 29.7295 26.5478 29.7295 26.8124C29.7295 27.0771 29.944 27.2916 30.2087 27.2916Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }

                                </i>
                                <p>ELSA for hotels</p>
                            </Styled.ListFunctionItem>
                            <Styled.ListFunctionItem active={key == 3 ? "true" : "false"} onClick={() => { changeContent(3) }}>
                                <i>
                                    {key == 3 ?
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" />
                                            <path d="M15.6593 16.7715C14.5046 16.7715 13.5684 15.8318 13.5684 14.6727C13.5684 13.5137 14.5046 12.574 15.6593 12.574C16.814 12.574 17.7502 13.5137 17.7502 14.6727C17.7502 15.8318 16.814 16.7715 15.6593 16.7715Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.061 32.5122H14.0244L13.5183 26.7405L12 26.2158V21.4936C12 20.3345 12.9064 19.3948 14.0244 19.3948H17.061C17.7969 19.3948 18.4412 19.8025 18.7955 20.4111" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M31.3409 16.7715C32.4956 16.7715 33.4318 15.8318 33.4318 14.6727C33.4318 13.5137 32.4956 12.574 31.3409 12.574C30.1862 12.574 29.25 13.5137 29.25 14.6727C29.25 15.8318 30.1862 16.7715 31.3409 16.7715Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.939 32.5122H32.9756L33.4817 26.7405L35 26.2158V21.4936C35 20.3345 34.0936 19.3948 32.9756 19.3948H29.939C29.2031 19.3948 28.5589 19.8025 28.2046 20.4111" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.5001 17.2961C21.7678 17.2961 20.3638 15.8869 20.3638 14.1481C20.3638 12.4093 21.7678 11 23.5001 11C25.2325 11 26.6365 12.4093 26.6365 14.1481C26.6365 15.8869 25.2325 17.2961 23.5001 17.2961Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.1139 34.0864H20.8866L20.3639 27.7902L18.2729 27.2655V22.0187C18.2729 20.8596 19.2092 19.9199 20.3639 19.9199H26.6366C27.7913 19.9199 28.7275 20.8596 28.7275 22.0187V27.2655L26.6366 27.7902L26.1139 34.0864Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" fill-opacity="0.1" />
                                            <path d="M15.6593 16.7715C14.5046 16.7715 13.5684 15.8318 13.5684 14.6727C13.5684 13.5137 14.5046 12.574 15.6593 12.574C16.814 12.574 17.7502 13.5137 17.7502 14.6727C17.7502 15.8318 16.814 16.7715 15.6593 16.7715Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.061 32.5122H14.0244L13.5183 26.7405L12 26.2158V21.4936C12 20.3345 12.9064 19.3948 14.0244 19.3948H17.061C17.7969 19.3948 18.4412 19.8025 18.7955 20.4111" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M31.3409 16.7715C32.4956 16.7715 33.4318 15.8318 33.4318 14.6727C33.4318 13.5137 32.4956 12.574 31.3409 12.574C30.1862 12.574 29.25 13.5137 29.25 14.6727C29.25 15.8318 30.1862 16.7715 31.3409 16.7715Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.939 32.5122H32.9756L33.4817 26.7405L35 26.2158V21.4936C35 20.3345 34.0936 19.3948 32.9756 19.3948H29.939C29.2031 19.3948 28.5589 19.8025 28.2046 20.4111" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.5001 17.2961C21.7678 17.2961 20.3638 15.8869 20.3638 14.1481C20.3638 12.4093 21.7678 11 23.5001 11C25.2325 11 26.6365 12.4093 26.6365 14.1481C26.6365 15.8869 25.2325 17.2961 23.5001 17.2961Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.1139 34.0864H20.8866L20.3639 27.7902L18.2729 27.2655V22.0187C18.2729 20.8596 19.2092 19.9199 20.3639 19.9199H26.6366C27.7913 19.9199 28.7275 20.8596 28.7275 22.0187V27.2655L26.6366 27.7902L26.1139 34.0864Z" stroke="#238DE0" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }

                                </i>
                                <p>ELSA for IT & consulting</p>
                            </Styled.ListFunctionItem>
                            <Styled.ListFunctionItem active={key == 4 ? "true" : "false"} onClick={() => { changeContent(4) }}>
                                <i>

                                    {key == 4 ?
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" />
                                            <path d="M22.3906 11.0281C21.7953 11.0938 21.3734 11.1641 20.9844 11.2625C19.5547 11.6187 18.275 12.3453 17.2109 13.4141C15.7719 14.8531 14.9469 16.6766 14.8156 18.725C14.7828 19.1937 14.7781 19.2078 14.6609 19.2312C13.7328 19.4328 13.1281 19.8594 12.8047 20.5391C12.5234 21.1391 12.5234 21.1297 12.5234 24.0547C12.5234 26.4594 12.5328 26.7547 12.6078 27.0266C12.8703 27.9781 13.5266 28.6109 14.4828 28.8312C14.7172 28.8875 15.0547 28.9062 15.7766 28.9062H16.7516L16.8688 28.7891C16.9344 28.7234 17 28.6062 17.0188 28.5266C17.0563 28.3344 17.0563 19.775 17.0188 19.5828C17 19.5031 16.9344 19.3859 16.8734 19.3203C16.7656 19.2125 16.7188 19.2031 16.2313 19.1937L15.7109 19.1797L15.725 18.8047C15.7813 17.4594 16.2688 16.0625 17.0797 14.9234C17.6281 14.1547 18.6172 13.2734 19.4703 12.7953C20.4641 12.2422 21.8328 11.8906 23 11.8906C24.1672 11.8906 25.5359 12.2422 26.5297 12.7953C27.3828 13.2734 28.3719 14.1547 28.9203 14.9234C29.7313 16.0625 30.2188 17.4594 30.275 18.8047L30.2891 19.1797L29.7688 19.1937C29.2766 19.2031 29.2344 19.2125 29.1266 19.325C29.0516 19.4 28.9953 19.5219 28.9766 19.6391C28.9625 19.7469 28.9531 21.8141 28.9625 24.2328L28.9766 28.6344L29.1313 28.7703C29.2812 28.9016 29.2953 28.9062 29.7969 28.9062H30.3078L30.2844 29.15C30.1531 30.5047 29.8344 31.3297 29.2156 31.8969C28.6063 32.45 27.5703 32.7828 26.1828 32.8719L25.6859 32.9047L25.6578 32.6141C25.6203 32.2672 25.5453 32.1078 25.325 31.9156C25.0672 31.6906 24.8281 31.6625 23.15 31.6812C21.8047 31.6953 21.65 31.7047 21.5 31.7844C21.2703 31.9062 21.1766 32 21.0734 32.1969C20.9938 32.3516 20.9844 32.4828 20.9844 33.3312C20.9844 34.3484 21.0031 34.4703 21.2094 34.6906C21.4906 34.9906 21.5422 35 23.3281 35C24.9172 35 24.9547 35 25.1563 34.8922C25.4516 34.7469 25.625 34.4797 25.6578 34.1187L25.6859 33.8328L25.925 33.8094C26.0563 33.7953 26.4078 33.7625 26.7031 33.7344C28.7234 33.5422 29.9609 32.8438 30.6172 31.5312C30.9125 30.9406 31.0719 30.3359 31.1703 29.4266L31.2266 28.8875L31.5594 28.8078C32.5063 28.5734 33.1344 27.9641 33.3969 27.0219C33.4672 26.7547 33.4766 26.45 33.4766 24.0312C33.4766 21.5609 33.4672 21.3125 33.3922 21.0312C33.1109 20.0469 32.4641 19.475 31.3391 19.2312C31.2219 19.2078 31.2172 19.1937 31.1844 18.725C30.9359 14.8672 28.1141 11.7406 24.3125 11.1125C23.9141 11.0469 22.6953 10.9906 22.3906 11.0281ZM16.1094 24.0312V28.0156H15.6547C14.2578 28.0109 13.625 27.6125 13.4422 26.6328C13.3719 26.2578 13.3719 21.8047 13.4422 21.4297C13.5453 20.8672 13.8406 20.4641 14.3094 20.2484C14.6094 20.1125 14.9516 20.0609 15.6078 20.0516L16.1094 20.0469V24.0312ZM31.5312 20.2062C32.0094 20.3844 32.3609 20.7453 32.5016 21.2094C32.5766 21.4531 32.5859 21.7062 32.5766 24.0312C32.5672 26.4688 32.5625 26.6 32.4688 26.9047C32.3844 27.1719 32.3234 27.275 32.1031 27.5C31.7141 27.8937 31.4656 27.9781 30.5844 28.0062L29.8906 28.025V24.0547V20.0844L30.6078 20.1078C31.1094 20.1219 31.3813 20.15 31.5312 20.2062ZM24.7344 33.3594V34.1094H23.3047H21.875V33.3594V32.6094H23.3047H24.7344V33.3594Z" fill="white" />
                                        </svg>

                                        :
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#238DE0" fill-opacity="0.1" />
                                            <path d="M22.3906 11.0281C21.7953 11.0937 21.3734 11.1641 20.9844 11.2625C19.5547 11.6187 18.275 12.3453 17.2109 13.4141C15.7719 14.8531 14.9469 16.6766 14.8156 18.725C14.7828 19.1937 14.7781 19.2078 14.6609 19.2312C13.7328 19.4328 13.1281 19.8594 12.8047 20.5391C12.5234 21.1391 12.5234 21.1297 12.5234 24.0547C12.5234 26.4594 12.5328 26.7547 12.6078 27.0266C12.8703 27.9781 13.5266 28.6109 14.4828 28.8312C14.7172 28.8875 15.0547 28.9062 15.7766 28.9062H16.7516L16.8688 28.7891C16.9344 28.7234 17 28.6062 17.0188 28.5266C17.0563 28.3344 17.0563 19.775 17.0188 19.5828C17 19.5031 16.9344 19.3859 16.8734 19.3203C16.7656 19.2125 16.7188 19.2031 16.2313 19.1937L15.7109 19.1797L15.725 18.8047C15.7813 17.4594 16.2688 16.0625 17.0797 14.9234C17.6281 14.1547 18.6172 13.2734 19.4703 12.7953C20.4641 12.2422 21.8328 11.8906 23 11.8906C24.1672 11.8906 25.5359 12.2422 26.5297 12.7953C27.3828 13.2734 28.3719 14.1547 28.9203 14.9234C29.7313 16.0625 30.2188 17.4594 30.275 18.8047L30.2891 19.1797L29.7688 19.1937C29.2766 19.2031 29.2344 19.2125 29.1266 19.325C29.0516 19.4 28.9953 19.5219 28.9766 19.6391C28.9625 19.7469 28.9531 21.8141 28.9625 24.2328L28.9766 28.6344L29.1313 28.7703C29.2813 28.9016 29.2953 28.9062 29.7969 28.9062H30.3078L30.2844 29.15C30.1531 30.5047 29.8344 31.3297 29.2156 31.8969C28.6063 32.45 27.5703 32.7828 26.1828 32.8719L25.6859 32.9047L25.6578 32.6141C25.6203 32.2672 25.5453 32.1078 25.325 31.9156C25.0672 31.6906 24.8281 31.6625 23.15 31.6812C21.8047 31.6953 21.65 31.7047 21.5 31.7844C21.2703 31.9062 21.1766 32 21.0734 32.1969C20.9938 32.3516 20.9844 32.4828 20.9844 33.3312C20.9844 34.3484 21.0031 34.4703 21.2094 34.6906C21.4906 34.9906 21.5422 35 23.3281 35C24.9172 35 24.9547 35 25.1563 34.8922C25.4516 34.7469 25.625 34.4797 25.6578 34.1187L25.6859 33.8328L25.925 33.8094C26.0563 33.7953 26.4078 33.7625 26.7031 33.7344C28.7234 33.5422 29.9609 32.8437 30.6172 31.5312C30.9125 30.9406 31.0719 30.3359 31.1703 29.4266L31.2266 28.8875L31.5594 28.8078C32.5063 28.5734 33.1344 27.9641 33.3969 27.0219C33.4672 26.7547 33.4766 26.45 33.4766 24.0312C33.4766 21.5609 33.4672 21.3125 33.3922 21.0312C33.1109 20.0469 32.4641 19.475 31.3391 19.2312C31.2219 19.2078 31.2172 19.1937 31.1844 18.725C30.9359 14.8672 28.1141 11.7406 24.3125 11.1125C23.9141 11.0469 22.6953 10.9906 22.3906 11.0281ZM16.1094 24.0312V28.0156H15.6547C14.2578 28.0109 13.625 27.6125 13.4422 26.6328C13.3719 26.2578 13.3719 21.8047 13.4422 21.4297C13.5453 20.8672 13.8406 20.4641 14.3094 20.2484C14.6094 20.1125 14.9516 20.0609 15.6078 20.0516L16.1094 20.0469V24.0312ZM31.5313 20.2062C32.0094 20.3844 32.3609 20.7453 32.5016 21.2094C32.5766 21.4531 32.5859 21.7062 32.5766 24.0312C32.5672 26.4687 32.5625 26.6 32.4688 26.9047C32.3844 27.1719 32.3234 27.275 32.1031 27.5C31.7141 27.8937 31.4656 27.9781 30.5844 28.0062L29.8906 28.025V24.0547V20.0844L30.6078 20.1078C31.1094 20.1219 31.3813 20.15 31.5313 20.2062ZM24.7344 33.3594V34.1094H23.3047H21.875V33.3594V32.6094H23.3047H24.7344V33.3594Z" fill="#238DE0" />
                                        </svg>
                                    }
                                </i>
                                <p>ELSA for call centers</p>
                            </Styled.ListFunctionItem>
                        </Styled.ListFunction>
                        <Styled.Image>
                            <img src={quote.mainImage} alt="main picture" />
                        </Styled.Image>
                        <Styled.QuoteWrapper>
                            <Styled.QuoteWrapperTitle >
                                
                                {quote.quotes.text.map((item, index) => {
                                    return (<h5>{item}</h5>)
                                })}
                                {quote.quotes.link == undefined ? "" : <Link href={quote.quotes.link.link}>
                                    <p>

                                        {quote.quotes.link.text}
                                        <img src="/static/img/icons/next-icon.png" alt="" />

                                    </p></Link>}
                            </Styled.QuoteWrapperTitle>
                            {/* <Styled.QuoteWrapperMain >
                            <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8142 19C18.997 19 17.4277 18.3214 16.1062 16.9643C14.7847 15.6071 14.1239 13.8182 14.1239 11.5974C14.1239 10.7338 14.2478 9.80844 14.4956 8.82143C14.9499 6.97078 15.7552 5.38745 16.9115 4.07143C18.1091 2.71429 19.472 1.70671 21 1.0487C22.528 0.349568 24.0147 0 25.4602 0C27.1534 0 28 0.493507 28 1.48052C28 1.72727 27.9794 1.91234 27.9381 2.03571C27.8142 2.4881 27.5664 2.87879 27.1947 3.20779C26.823 3.49567 26.2448 3.90693 25.4602 4.44156C24.5516 5.09957 23.8909 5.6342 23.4779 6.04546C23.0649 6.45671 22.8584 6.95022 22.8584 7.52598C22.8584 7.89611 22.9617 8.26624 23.1681 8.63637C23.4159 9.0065 23.7876 9.5 24.2832 10.1169C24.944 10.9805 25.4395 11.7002 25.7699 12.276C26.1003 12.8517 26.2655 13.5097 26.2655 14.25C26.2655 14.6613 26.2035 15.0931 26.0796 15.5455C25.7493 16.6558 25.1298 17.5195 24.2212 18.1364C23.3127 18.7121 22.177 19 20.8142 19ZM6.69027 19C4.87316 19 3.30383 18.3214 1.9823 16.9643C0.660767 15.6071 0 13.8182 0 11.5974C0 10.7338 0.123893 9.80844 0.371681 8.82143C0.825958 6.97078 1.63127 5.38745 2.78761 4.07143C3.98525 2.71429 5.34808 1.70671 6.87611 1.0487C8.40413 0.349568 9.89085 0 11.3363 0C13.0295 0 13.8761 0.493507 13.8761 1.48052C13.8761 1.72727 13.8555 1.91234 13.8142 2.03571C13.6903 2.4881 13.4425 2.87879 13.0708 3.20779C12.6991 3.49567 12.1209 3.90693 11.3363 4.44156C10.4277 5.09957 9.76696 5.6342 9.35398 6.04546C8.941 6.45671 8.73451 6.95022 8.73451 7.52598C8.73451 7.89611 8.83776 8.26624 9.04425 8.63637C9.29204 9.0065 9.66372 9.5 10.1593 10.1169C10.8201 10.9805 11.3156 11.7002 11.646 12.276C11.9764 12.8517 12.1416 13.5097 12.1416 14.25C12.1416 14.6613 12.0796 15.0931 11.9558 15.5455C11.6254 16.6558 11.0059 17.5195 10.0973 18.1364C9.18879 18.7121 8.0531 19 6.69027 19Z" fill="#238DE0" />
                            </svg>
                            <Styled.QuoteWrapperMainHead>
                                <p>{quote.quotes.quote}</p>
                            </Styled.QuoteWrapperMainHead>
                            <Styled.QuoteWrapperMainBottom>
                                <div className="quote-avatar">
                                    <img src={quote.quotes.avatar} alt="Avatar name" />
                                </div>
                                <Styled.QuoteWrapperMainBottomName>
                                    <h4 className="name">
                                        {quote.quotes.author}
                                    </h4>
                                    <p className="position">{quote.quotes.position}</p>
                                </Styled.QuoteWrapperMainBottomName>
                            </Styled.QuoteWrapperMainBottom>
                        </Styled.QuoteWrapperMain> */}
                        </Styled.QuoteWrapper>
                    </Styled.CustomizedContent>
                </Container>
            </Element>

        </Styled.SectionWrapper>
    )
}

export default CustomizedSection
