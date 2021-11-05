import { Modal } from 'antd';
import { setVipMember } from '~/app/features/user/slice';
import { useDispatch } from 'react-redux';

const PaymentSuccessful = ({ isOpen, setOpen }) => {
	const dispatch = useDispatch();
	return (
		<Modal
			centered
			visible={isOpen}
			onCancel={() => {
				setOpen(false);
				dispatch(setVipMember(true));
			}}
			footer={null}
			className='modal__payment-successful'
		>
			<section className='modal__payment-successful-main'>
				<div className='modal__payment-successful-bg'>
					<div className='payment-successful__logo'>
						<img src='/static/img/bg/f7.png' alt='' />
					</div>
					<div className='payment-successful__title'>
						<h3>Payment Successful</h3>
					</div>
					<div className='payment-successful__p'>
						<p>Welcome on board!</p>
					</div>
				</div>
			</section>
		</Modal>
	);
};

export default PaymentSuccessful;
