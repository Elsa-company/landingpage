import { Modal } from 'antd';

const PleaseVerifyEmail = ({ pleaseVerifyEmailModal, setPleaseVerifyEmailModal }) => {
	return (
		<Modal
			centered
			visible={pleaseVerifyEmailModal}
			onCancel={() => {
				setPleaseVerifyEmailModal(false);
			}}
			footer={null}
			className='modal__please-verify-email'
		>
			<div className='modal__please-verify-email__main'>
				<div className='please-verify-email__title'>
					<h3>Please verify your email!</h3>
				</div>
				<div className='please-verify-email__p-body'>
					<p>
						Your updated email address needs to be verified in 24h after this request.
						Further instruction have been sent to your new email address.
					</p>
				</div>
				<div className='please-verify-email__p-thank-you'>
					<p>Thank you!</p>
				</div>
			</div>
		</Modal>
	);
};

export default PleaseVerifyEmail;
