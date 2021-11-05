import { Modal } from 'antd';
// scss -> scss/elements/_modal.scss

const OurPartner = ({ setModalVisibleOurPartner, modalVisibleOurPartner, currentPartner }) => {
	if (!currentPartner || Object.keys(currentPartner) < 1) return null;

	return (
		<Modal
			centered
			visible={modalVisibleOurPartner}
			onCancel={() => {
				setModalVisibleOurPartner(false);
			}}
			footer={null}
			className='modal__our-partner'
		>
			<article className='modal__our-partner__main'>
				<div className='out-partner__detail'>
					<div className='detail__img'>
						<img src={currentPartner.thumbUrl} alt={currentPartner.title} />
					</div>
					<div className='detail__head'>
						<div className='detail__head__name'>
							<h3>{currentPartner.title}</h3>
						</div>
						<div className='detail__head__p'>
							<p>{currentPartner.description}</p>
						</div>
						<div className='detail__head__tag'>
							<div className='tag-group'>
								{currentPartner.tags.map(t => <span key={t._id}>{t.title}</span>)}
							</div>
						</div>
					</div>
				</div>

				<div className='out-partner__intro'>
					<p>{currentPartner.subDescription}</p>
				</div>

				<div className='out-partner__social'>
					<div className='social__item'>
						<i className='fa fa-facebook-square' aria-hidden='true' />
						<span className='social__item__name'>Website</span>
					</div>
					<div className='social__item'>
						<i className='fa fa-facebook-square' aria-hidden='true' />
						<span className='social__item__name'>Facebook</span>
					</div>
					<div className='social__item'>
						<i className='fa fa-instagram' />
						<span className='social__item__name'>Instagram</span>
					</div>
				</div>

				<div className='out-partner__footer'>
					<div className='partner__footer__info'>
						<div>
							Online Shop: <span>Yes</span>
						</div>
						<div>
							State: <span>VIC</span>
						</div>
						<div>
							Country: <span>AU</span>
						</div>
					</div>
					<div className='partner__footer__contact'>
						<div>
							Email: <span>{currentPartner.email}</span>
						</div>
						<div>
							Contact: <span>{currentPartner.contact}</span>
						</div>
						<div>
							Location: <span>{currentPartner.location}</span>
						</div>
					</div>
				</div>
			</article>
		</Modal>
	);
};

export default OurPartner;
