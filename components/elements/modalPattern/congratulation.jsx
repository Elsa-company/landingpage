import { Modal } from 'antd';
import { useCallback } from 'react';

const Congratulation = ({ congratulationModal, setCongratulationModal }) => {
	const onCancel = useCallback(() => {
		setCongratulationModal(false);
	}, []);

	return (
		<Modal
			centered
			visible={congratulationModal}
			onCancel={onCancel}
			footer={null}
			className='modal__congratulation'
		>
			<div className='modal__congratulation__main'>
				<div className='modal__congratulation__head'>
					<div className='head__logo'>
						<img src='/static/img/logo_light.png' alt='' />
					</div>
				</div>
				<div className='modal__congratulation__body'>
					<div className='modal__congratulation__body-title'>
						<h3>CONGRATULATIONS!</h3>
					</div>
					<div className='modal__congratulation__body-p'>
						<p>Your account has been successfully created.</p>
						<p>Before get started, you'll need to verify your account.</p>
						<p>
							Please check your email and follow the instruction have been sent to
							you.
						</p>
						<p>Thank you!</p>
					</div>
					<div className='modal__congratulation__body-btn'>
						<div className='modal__congratulation__body-btn__bg' onClick={onCancel}>
							<h4>I WILL VERIFY IT</h4>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Congratulation;
