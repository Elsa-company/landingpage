import React, { useState, useRef, useCallback } from 'react';
import authThunk from '~/app/features/auth/thunks/index';
import { useDispatch } from 'react-redux';
import ContainerPage from '~/components/layouts/ContainerPage';
import Router from 'next/router';
import PleaseCheckYourEmail from '~/components/elements/modalPattern/pleaseCheckYourEmail';
import { toast } from 'react-toastify';
import { Modal } from 'antd';

const SendEmail = ({ setModalVisibleSendEmail, modalVisibleSendEmail }) => {
	const [ pleaseCheckYourEmailModal, setPleaseCheckYourEmailModal ] = useState(false);
	const dispatch = useDispatch();
	const [ error, setError ] = useState('');
	const inputRef = useRef();

	const handleOnChange = useCallback(e => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		const isTrue = re.test(String(inputRef.current.value).toLowerCase());

		if (isTrue || inputRef.current.value === '') {
			setError('');
		}
		else {
			setError('Invalid email!');
		}
	}, []);

	const handleSubmit = async () => {
		if (inputRef.current.value === '') {
			setError('Please input your email');
			return;
		}

		const res = await dispatch(authThunk.forgetPassword({ email: inputRef.current.value }));

		if (res.error) {
			toast.error(res.payload.message);
		}
		else {
			setPleaseCheckYourEmailModal(true);
		}
	};

	return (
		<React.Fragment>
			<Modal
				centered
				visible={modalVisibleSendEmail}
				onCancel={() => {
					setModalVisibleSendEmail(false);
				}}
				footer={null}
				className='modal__sendEmail'
			>
				<section className='modal__page-send-email'>
					<div className='modal__send-email__container'>
						<div className='modal__send-email__logo'>
							<img src='/static/img/bg/f7.png' alt='' />
						</div>
						<div className='modal__send-email__title'>
							<h3>Forgot Password?</h3>
						</div>
						<div className='modal__send-email__p'>
							<p>
								Enter the email address associated with your account. We will email
								you a link to reset your password.
							</p>
						</div>
						<div className='modal__send-email__grid'>
							<div className='modal__send-email__grid-input'>
								<input
									type='text'
									placeholder='Enter email address'
									ref={inputRef}
									onChange={handleOnChange}
								/>
								{error && <div className='error'>{error}</div>}
							</div>
							<div className='modal__send-email__grid-send' onClick={handleSubmit}>
								<span onClick={handleSubmit}>SEND</span>
							</div>
						</div>
					</div>
				</section>
			</Modal>

			<PleaseCheckYourEmail
				pleaseCheckYourEmailModal={pleaseCheckYourEmailModal}
				setPleaseCheckYourEmailModal={setPleaseCheckYourEmailModal}
			/>
		</React.Fragment>
	);
};

export default SendEmail;
