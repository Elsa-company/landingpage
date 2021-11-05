import React, { useState } from 'react';

import { Modal, Input, Form, Checkbox, Button } from 'antd';
import SendEmail from '~/components/elements/modalPattern/sendEmail';
import { useDispatch, useSelector } from 'react-redux';
import authThunks from '~/app/features/auth/thunks';
import { setModalVisibleLogin, setModalVisibleJoinNow} from '~/app/features/app/slice';

import Router from 'next/router';

import { toast } from 'react-toastify';
// scss -> scss/elements/_modal.scss

const validateMessages = {
	required: 'Please input your ${label}!',
	types: {
		email: '${label} is not a valid email!',
		phone: '${label} is not a valid phone number!',
	},
};

const LoginForm = () => {
	// State
	const [modalVisibleSendEmail, setModalVisibleSendEmail] = useState(false);

	// redux
	const { modalVisibleLogin } = useSelector(state => state.app);
	const dispatch = useDispatch();

	const onFinish = async values => {
		const response = await dispatch(
			authThunks.login({
				email: values.email,
				password: values.password,
			}),
		);
		if (!response.error) {
			dispatch(setModalVisibleLogin(false));
			toast.success('Logged in successfully');
			Router.push('/account');
		}
		else {
			toast.error(response?.payload?.message || 'Server Error');
		}
	};

	const onFinishFailed = errorInfo => { };

	const onClickSignup = () => {
		dispatch(setModalVisibleLogin(false));
		dispatch(setModalVisibleJoinNow(true));
		
	}

	const handleRedirect = () => {
		dispatch(setModalVisibleLogin(false));
		Router.replace('/account/send-email')
	}

	return (
		<React.Fragment>
			<Modal
				centered
				visible={modalVisibleLogin.payload}
				onCancel={() => {
					dispatch(setModalVisibleLogin(false));
				}}
				width={1500}
				footer={null}
				className='modal__loginForm'
			>
				<div className='modal-login-form'>
					<div className="row">
						<div className="col-md-6 login-modal__left">
							<h2>LOGIN</h2>
							<h4>Log in to winning your reward right now!</h4>
							<Form
								name="basic"
								initialValues={{
									remember: true,
								}}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
								layout="vertical"
								className="form-login"
							>
								<div className="row">
									<div className="col-12">
										<Form.Item
											name="email"
											rules={[
												{
													required: true,
													type: 'email',
													message: 'Please input your email!',
												},
											]}
										>
											<Input placeholder="Email" className="input-border-bottom" />
										</Form.Item>
									</div>
									<div className="col-12">
										<Form.Item
											name="password"
											rules={[
												{
													required: true,
													message: 'Please input your password!',
												},
											]}
										>
											<Input.Password placeholder="Password" />
										</Form.Item>
									</div>
									<div className="col-12 d-flex justify-content-between">
										<Form.Item
											name="remember"
											valuePropName="checked"
										>
											<Checkbox>Remember me</Checkbox>
										</Form.Item>
										<span
											className='forgot-password'
											onClick={handleRedirect}
										>
											Forgot password?
										</span>
									</div>

								</div>
								<Form.Item
								>
									<button type="primary" htmltype="submit" className="ps-btn">
										Submit
									</button>
								</Form.Item>
							</Form>
							<p className="form-footter">Don't have an account yet? <u className="sign-up" onClick={onClickSignup}>Sign up</u></p>
						</div>
						<div className="col-md-6 login-modal__right">
							<img src="/static/img/logo_light.png" alt="" />
							<div className="layer"></div>
						</div>

					</div>
				</div>
			</Modal>

			<SendEmail
				setModalVisibleSendEmail={setModalVisibleSendEmail}
				modalVisibleSendEmail={modalVisibleSendEmail}
			/>
		</React.Fragment>
	);
};

export default LoginForm;
