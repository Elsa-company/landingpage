import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Radio, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { TextArea } = Input;
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
        const res = await fetch('/api/services')
        const json = await res.json()
        form.setFieldsValue({
            service_1: json.data.service_1,
            service_2: json.data.service_2,
            service_3: json.data.service_3,
        });
    }

    const handleSubmit = async (values) => {
        const res = await fetch('/api/services', {
            method: 'post',
            body: JSON.stringify(values)
        })

        modalNotification('success', "Change Services Successfully!!!", "")
        
    };

    useEffect(() => {
        getContact()
    }, [])


    return (

        <Form
            className="ps-form--account-setting"
            onFinish={handleSubmit}
            form={form}>

            <div className="ps-form__content">
                <div className="form-group">

                    <Form.Item
                        name="service_1"
                    >
                        <TextArea
                            className="form-control"
                            rows={4}
                            placeholder="Service 1"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">

                    <Form.Item name="service_2" >
                    <TextArea
                            className="form-control"
                            rows={4}
                            placeholder="Service 2"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="service_3"
                    >
                        <TextArea
                            className="form-control"
                            rows={4}
                            placeholder="Service 3"
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
