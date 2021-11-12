import React from 'react'
import { Form, Input, Button, Select } from 'antd';

const ContactSection = () => {
    return (
        <section className='ps-contact-section'>
            <div className="ps-container">
                <div className="section-content">
                    <div className="section-text">
                        Ready to enhance your English training program?
                    </div>
                    <div className="section-form">
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
                                        <Select.Option value="1">Option 1</Select.Option>
                                        <Select.Option value="2">Option 2</Select.Option>
                                    </Select>
                                </Form.Item>
                                <p>Using ELSA as an individual?
                                    <img src="/static/img/icons/next-icon.png" alt="" />
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
                                    label="Work email"
                                >
                                    <Input placeholder="hello@elsaspeak.com" size="large" />
                                </Form.Item>
                                <Form.Item
                                    label="Number of learners"
                                >
                                    <Select
                                        placeholder="Choose an option" size="large"
                                    >
                                        <Select.Option value="1">Option 1</Select.Option>
                                        <Select.Option value="2">Option 2</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Country"
                                >
                                    <Select
                                        placeholder="Choose an option" size="large"
                                    >
                                        <Select.Option value="1">Option 1</Select.Option>
                                        <Select.Option value="2">Option 2</Select.Option>
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
                                    Request a demo
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
