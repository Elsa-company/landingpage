import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};

const FormChangeContact = ({ }) => {
    const [form] = Form.useForm();
    const [results, setResults] = useState({});

    const getContact = async () => {
        const res = await fetch('/api/contact')
        const json = await res.json()
        form.setFieldsValue({
            phone: json.data.phone,
            facebook: json.data.facebook,
            instagram: json.data.instagram,
            linkedin: json.data.linkedin,
            address: json.data.address,
            receive_email: json.data.receive_email,
        });
    }

    const handleSubmit = async (values) => {
        const res = await fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(values)
        })

        modalNotification('success', "Change Contact Successfully!!!", "")
    };

    useEffect(() => {
        getContact()
    }, [])

    console.log(results)

    return (

        <Form
            className="ps-form--account-setting"
            onFinish={handleSubmit}
            form={form}>

            <div className="ps-form__content">
                <div className="form-group">

                    <Form.Item
                        name="facebook"
                    >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Facebook Link"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">

                    <Form.Item name="instagram" >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Instagram Link"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="linkedin"
                    >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Linkedin Link"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">

                    <Form.Item
                        name="phone"
                    >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                        />
                    </Form.Item>
                </div>

                <div className="form-group">

                    <Form.Item
                        name="address"
                    >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>

                <div className="form-group">

                    <Form.Item
                        name="receive_email"
                    >
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Receive Email"
                        />
                    </Form.Item>
                </div>

                <div className="form-group">
                    <button className="ps-btn">Update profile</button>
                </div>
            </div>
        </Form>
    );
};

export default FormChangeContact;
