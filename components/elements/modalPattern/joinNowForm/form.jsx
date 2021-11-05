import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Input, Form } from 'antd';
import { toast } from 'react-toastify';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {UserOutlined, PhoneOutlined, MailOutlined, LockOutlined, ContactsOutlined, ProfileOutlined } from '@ant-design/icons'
import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import Congratulation from '~/components/elements/modalPattern/congratulation';

import authThunks from '~/app/features/auth/thunks';

const validateMessages = {
	required: 'Please input your ${label}!',
	types: {
		email: '${label} is not a valid email!',
		phone: '${label} is not a valid phone number!',
	},
};
const options = {
	hidePostalCode : true,
	style          : {
		base    : {
			color           : '#111859',
			fontFamily      : '"Segoe UI", Helvetica, sans-serif',
			fontSmoothing   : 'antialiased',
			fontSize        : '16px',
			'::placeholder' : {
				color : '#aab7c4',
			},
			border          : '1px solid #C0C0C0',
		},
		invalid : {
			color     : '#fa755a',
			iconColor : '#fa755a',
		},
	},
	iconStyle      : 'solid',
};

const JoinNowForm = () => {

    const dispatch = useDispatch();
    const [congratulationModal, setCongratulationModal] = useState(false);

	const onFinish = async values => {
		// const response = await dispatch(
		// 	authThunks.register({
		// 		email: values.email,
		// 		password: values.password,
		// 		displayname: values.fullname,
		// 	}),
		// );

		// if (!response.error) {
			
		// }
		// else {
		// 	toast.error(response.payload.message);
		// }

        dispatch(setModalVisibleJoinNow(false));
		setCongratulationModal(true);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const onClickLogin = () => {
		dispatch(setModalVisibleJoinNow(false));
		dispatch(setModalVisibleLogin(true));
	};

    return (
        <>
            <h2>BECOME A LOYALTY MEMBER</h2>
            <h4>Hurry - Now Accepting Members Again</h4>
            <Form
                name='basic'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                layout='vertical'
                className='form-login'
            >
                <div className='row'>

                    {/* Account Info */}
                    <div className='col-12'>
                        <Form.Item
                            name='fullname'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                            label="ACCOUNT INFORMATION"
                        >
                            <Input
                                suffix={<UserOutlined />}
                                placeholder='Your Full Name'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    <div className='col-12'>
                        <Form.Item
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input
                                suffix={<MailOutlined />}
                                placeholder='Email'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    <div className='col-12'>
                        <Form.Item
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password suffix={<LockOutlined />} placeholder='Password' />
                        </Form.Item>
                    </div>
                    <div className='col-12'>
                        <Form.Item
                            name='confirm_password'
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input confirm password!',
                                },
                            ]}
                        >
                            <Input.Password suffix={<LockOutlined />} placeholder='Confirm Password' />
                        </Form.Item>
                    </div>
                    {/* End Account Info */}

                    {/* Address Info */}
                    <div className='col-12'>
                        <Form.Item
                            name='phone'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                            label="ADDRESS INFORMATION"
                        >
                            <Input
                                suffix={<PhoneOutlined />}
                                placeholder='Your Phone'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    <div className='col-12'>
                        <Form.Item
                            name='zip'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your zip code!',
                                },
                            ]}
                        >
                            <Input
                                suffix={<ProfileOutlined />}
                                placeholder='Zip code'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    <div className='col-12'>
                        <Form.Item
                            name='address'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}
                        >
                            <Input
                                suffix={<ContactsOutlined />}
                                placeholder='Address'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    {/* End Address Info */}

                    {/* Item */}
                    <div className='col-12'>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                            label="ITEM"
                        >
                            <Input
                                disabled
                                suffix={"$17.99"}
                                placeholder='HARTT GROUP Loyalty Membership - Monthly'
                                className='input-border-bottom'
                            />
                        </Form.Item>
                    </div>
                    {/* End Item */}
                    <div className="col-12">
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                            label="CREDIT CARD NUMBER"
                        >
                            <CardElement options={options} />
                        </Form.Item>

                    </div>
                </div>
                <Form.Item>
                    <button type='primary' htmltype='submit' className='ps-btn'>
                        Submit
                    </button>
                </Form.Item>
            </Form>
            <p className='form-footter'>
                Already have an account?{' '}
                <u className='sign-up' onClick={onClickLogin}>
                    Log in
                </u>
            </p>
            <Congratulation
				congratulationModal={congratulationModal}
				setCongratulationModal={setCongratulationModal}
			/>
        </>
    )
}

export default JoinNowForm
