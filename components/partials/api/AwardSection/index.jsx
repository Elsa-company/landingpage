import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Element } from 'react-scroll';
import COUNTRY_CODE from '~/constant/countryCode';
import LazyLoad from 'react-lazyload';
import {
    SectionWrapper,
    Title,
    GroupCompany,
    Company,
    CompanyThumb,
    CompanyDesc,
    GroupAward,
    FromGroup,
    FromBody,
    FromWrapper
} from './style'

import background from '~/public/static/img/bg/APISection-4.png';
import Container from '~/components/elements/Container';
import company1 from '~/public/static/img/pages/company-1.png'
import company2 from '~/public/static/img/pages/company-2.png'
import company3 from '~/public/static/img/pages/company-3.png'
import award1 from '~/public/static/img/pages/award-1.png'
import award2 from '~/public/static/img/pages/award-2.png'
import award3 from '~/public/static/img/pages/award-3.png'
import award4 from '~/public/static/img/pages/award-4.png'
import award5 from '~/public/static/img/pages/award-5.png'
import award6 from '~/public/static/img/pages/award-6.png'
import award7 from '~/public/static/img/pages/award-7.png'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <Title>
                    <h1>
                        Awards and Recognitions
                    </h1>
                </Title>

                <GroupCompany>
                    <Company>
                        <CompanyThumb>
                            <LazyLoad>
                                <img src={company1} alt="Top 4 companies using AI to transform the world" />
                            </LazyLoad>

                        </CompanyThumb>
                        <CompanyDesc>
                            <p>Top 4 companies using AI to transform the world</p>
                        </CompanyDesc>
                    </Company>
                    <Company>
                        <CompanyThumb>
                            <LazyLoad>
                                <img src={company2} alt="Backed by Google Gradient Ventures" />
                            </LazyLoad>
                        </CompanyThumb>
                        <CompanyDesc>
                            <p>Backed by Google Gradient Ventures</p>
                        </CompanyDesc>
                    </Company>
                    <Company>
                        <CompanyThumb>
                            <LazyLoad>
                                <img src={company3} alt="Most Innovative Artificial Intelligence Startups" />
                            </LazyLoad>
                        </CompanyThumb>
                        <CompanyDesc>
                            <p>Most Innovative Artificial Intelligence Startups</p>
                        </CompanyDesc>
                    </Company>
                </GroupCompany>

                <Title>
                    <h1>
                        Trusted by hundreds of organizations
                    </h1>
                </Title>

                <GroupAward>
                    <LazyLoad>
                        <img src={award1} alt="Group Award 1" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award2} alt="Group Award 2" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award3} alt="Group Award 3" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award4} alt="Group Award 4" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award5} alt="Group Award 5" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award6} alt="Group Award 6" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={award7} alt="Group Award 7" />
                    </LazyLoad>

                </GroupAward>

                <Title>
                    <h1>
                        Ready to learn more about ELSA API?
                    </h1>
                </Title>
                <FromWrapper>
                    <FromGroup>
                        <Element name="request-demo">
                            <Form
                                name="basic"
                                autoComplete="off"
                                layout="vertical"
                            >
                                <FromBody>

                                    <Form.Item
                                        label="First name"
                                    >
                                        <Input placeholder="John" size="large" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Last name"
                                    >
                                        <Input placeholder="Doe" size="large" />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                //   required: true,
                                                type: "email",
                                                message: "The input is not valid E-mail!"
                                            },
                                        ]}
                                        label="Work email"
                                        name="email"
                                        requiredMark={false}
                                    >
                                        <Input placeholder="hello@elsaspeak.com" size="large" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Company name"
                                    >
                                        <Input placeholder="ELSA Speak" size="large" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Country"
                                    >
                                        <Select
                                            placeholder="Choose an option" size="large"
                                        >
                                            {COUNTRY_CODE.map(c => (
                                                <Select.Option value={c.code} key={c.code}>
                                                    {c.name || 'VIETNAM'}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="Phone number"
                                    >
                                        <Input placeholder="+ 84 904 065 063" size="large" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Detail of inquiry"
                                    >
                                        <Input.TextArea placeholder="Enter your detailed inquiry" rows={8} />
                                    </Form.Item>

                                </FromBody>
                                <div className="form-footer">
                                    <button className="ps-btn">
                                        SUBMIT
                                    </button>
                                </div>
                            </Form>
                        </Element>
                    </FromGroup>
                </FromWrapper>

            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
