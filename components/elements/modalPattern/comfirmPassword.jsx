import React, { useState } from 'react';

import { Modal, Input, Form } from 'antd';
import SendEmail from '~/components/elements/modalPattern/sendEmail';
import { useDispatch, useSelector } from 'react-redux';
import { setComfirmPassword, changeProfile, changeEmail } from '~/app/features/user/slice';
import userThunks from '~/app/features/user/thunks';
import changeProfileThunk from '~/app/features/user/thunks/changeProfile';
import PleaseVerifyEmail from '~/components/elements/modalPattern/pleaseVerifyEmail';
import putThunk from '~/app/features/user/thunks/put';

import { toast } from 'react-toastify';

// scss -> scss/elements/_modal.scss
const ComfirmPassword = ({ type, submitBtnRef, verifyBtnRef }) => {
	// State
	const [ modalVisibleSendEmail, setModalVisibleSendEmail ] = useState(false);
	const [ pleaseVerifyEmailModal, setPleaseVerifyEmailModal ] = useState(false);

	// redux
	const { modalComfirmPassword, newProfile, newEmail } = useSelector(state => state.user);
	const authRedux = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const onFinish = async values => {
		if (type === 'infomation') {
			const response = await dispatch(
				changeProfileThunk({
					userdata : { ...values, ...newProfile },
					token    : authRedux.token,
				}),
			);

			if (response.error) {
				toast.error(response.payload.message || 'Server Error');
			}
			else {
				dispatch(changeProfile({}));
				dispatch(setComfirmPassword(false));
				dispatch(userThunks.profile({ token: authRedux.token }));
				submitBtnRef.current.classList.remove('submit-change');
			}
		}
		else if (type === 'email') {
			const response = await dispatch(
				putThunk.email({
					userData : { ...values, email: newEmail },
					token    : authRedux.token,
				}),
			);

			if (response.error) {
				toast.error(response.payload.message || 'Server Error');
			}
			else {
				dispatch(changeEmail(''));
				dispatch(setComfirmPassword(false));
				setPleaseVerifyEmailModal(true);
				dispatch(userThunks.profile({ token: authRedux.token }));
				verifyBtnRef.current.classList.remove('submit-change');
				submitBtnRef.current.classList.remove('submit-change');
			}
		}
	};

	return (
		<React.Fragment>
			<Modal
				centered
				visible={modalComfirmPassword}
				onCancel={() => {
					dispatch(setComfirmPassword(false));
				}}
				width={1500}
				footer={null}
				className='modal__comfirmPassword'
			>
				<div className='modal__comfirmPassword__container'>
					<div className='modal__comfirmPassword__container__title'>
						<h3>Confirm Password</h3>
					</div>
					<div className='modal__comfirmPassword__container__detail'>
						<p>
							Please confirm your current password to update your profile information
						</p>
					</div>

					<Form onFinish={onFinish} className='modal__comfirmPassword__container__body'>
						<Form.Item label='Password' name='password'>
							<Input.Password />
						</Form.Item>
						<Form.Item className='modal__comfirmPassword__container__body__submit'>
							<button className='' type='submit'>
								Update
							</button>
						</Form.Item>
					</Form>

					<div className='modal__comfirmPassword__container__forget'>
						<p onClick={() => setModalVisibleSendEmail(true)}>Forget Your Password?</p>
					</div>
				</div>
			</Modal>

			<SendEmail
				setModalVisibleSendEmail={setModalVisibleSendEmail}
				modalVisibleSendEmail={modalVisibleSendEmail}
			/>

			<PleaseVerifyEmail
				pleaseVerifyEmailModal={pleaseVerifyEmailModal}
				setPleaseVerifyEmailModal={setPleaseVerifyEmailModal}
			/>
		</React.Fragment>
	);
};

export default ComfirmPassword;
