import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import COUNTRY_CODE from '~/constant/countryCode';
import { Element } from 'react-scroll';
const ContactSection = () => {
    return (
        <section className='ps-contact-section'>
            <div className="ps-container">
                <div className="section-content-airline">
                    <div className="section-text">
                        Ready to enhance your English training program?
                    </div>
                    <div className="form-wrapper">
                        <div className="section-form">
                            <Element name="request-demo">
                                <Form
                                    name="basic"
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <div className="form-body">
                                        <Form.Item
                                            label="What would you use ELSA for?"
                                        >
                                            <Select
                                                placeholder="Choose an option"
                                                size="large"
                                            >
                                                <Select.Option value="1">I am interested in ELSA program for my company </Select.Option>
                                                <Select.Option value="2">I represent a non-profit organization </Select.Option>
                                                <Select.Option value="2">I represent a government institution </Select.Option>
                                                <Select.Option value="2">I represent a higher education institution </Select.Option>
                                                <Select.Option value="2">I represent a private language school </Select.Option>
                                                <Select.Option value="2">I am a private tutor </Select.Option>
                                                <Select.Option value="2">I am a teacher at an education institution </Select.Option>
                                                <Select.Option value="2">Other:</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <p>
                                            <a href="https://elsaspeak.com/en/product" target="_blank">
                                                Using ELSA as an individual?
                                                <img src="/static/img/icons/next-icon.png" alt="" />
                                            </a>

                                        </p>
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
                                            label="Number of learners"
                                        >
                                            <Select
                                                placeholder="Choose an option" size="large"
                                            >
                                                <Select.Option value="1">1-50</Select.Option>
                                                <Select.Option value="2">51-100</Select.Option>
                                                <Select.Option value="2">101-1000</Select.Option>
                                                <Select.Option value="2">1000+</Select.Option>
                                            </Select>
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
                                            label="Company name"
                                        >
                                            <Input placeholder="ELSA Speak" size="large" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Detail of inquiry"
                                        >
                                            <Input.TextArea placeholder="Enter your detailed inquiry" rows={8} />
                                        </Form.Item>

                                    </div>
                                    <div className="form-footer">
                                        <button className="ps-btn">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            </Element>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
