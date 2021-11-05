import { Modal } from 'antd';

const PaymentSuccessful = ({ isOpen, setOpen }) => {
	return (
		<Modal
			centered
			visible={isOpen}
			onCancel={() => {
				setOpen(false);
			}}
			footer={null}
			className='modal__payment-failed'
		>
			<section className='modal__payment-failed-main'>
				<div className='modal__payment-failed-bg'>
					<div className='payment-failed'>
						<img src='/static/img/icons/Group 694.png' alt='' />
					</div>
					<div className='payment-failed__title'>
						<h3>Oops, Payment Failed</h3>
					</div>
					<div className='payment-failed__p'>
						<p>Unfortunately payment was rejected, please check card and try again!</p>
					</div>
					<div className='payment-failed__btn' onClick={() => setOpen(false)} />
				</div>
			</section>
		</Modal>
	);
};

export default PaymentSuccessful;
