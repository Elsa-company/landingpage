import { Modal } from 'antd';
import { useRouter } from 'next/router';

const PleaseCheckYourEmail = props => {
	const router = useRouter();
	const { pleaseCheckYourEmailModal, setPleaseCheckYourEmailModal, token } = props;

	const handleOnCancel = () => {
		setPleaseCheckYourEmailModal(false);
		if (router.pathname === '/account/send-email') {
			router.replace('/');
		}
	};

	return (
		<Modal
			centered
			visible={pleaseCheckYourEmailModal}
			onCancel={handleOnCancel}
			footer={null}
			className='modal__please-check-your-email'
		>
			<div className='please-verify-email__main'>
				<div className='please-verify-email__container'>
					<div className='please-verify-email__logo'>
						<img src='/static/img/icons/Icon simple-minutemailer.png' alt='' />
					</div>
					<div className='please-verify-email__heading'>
						<h3>Please Check Your Email!</h3>
					</div>
					<div className='please-verify-email__p'>
						<p>
							A password reset link was sent. Click the link in the email to create a
							new password. If you do not receive an email within 5 minutes, please
							resend again. Thank you!
						</p>
					</div>
				</div>
			</div>
		</Modal>
	);
};

// This gets called on every request
export async function getServerSideProps (context) {
	// Pass data to the page via props
	return { props: { token: context } };
}

export default PleaseCheckYourEmail;
