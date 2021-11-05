import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Input } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import { setModalVisibleLogin, setModalVisibleJoinNow } from '~/app/features/app/slice';
import Form from './form'

const appearance = {
    theme     : 'night',
    variables : {
        fontFamily      : ' "Segoe UI", sans-serif',
        fontLineHeight  : '1.5',
        borderRadius    : '10px',
        colorBackground : '#F6F8FA',
    },
    rules     : {
        '.Input'                                                     : {
            border : 'none',
        },
        '.Input:disabled, .Input--invalid:disabled'                  : {
            color : 'lightgray',
        },
        '.Tab'                                                       : {
            padding : '10px 12px 8px 12px',
            border  : 'none',
        },
        '.Tab:hover'                                                 : {
            border    : 'none',
            boxShadow : '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
        },
        '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover' : {
            border          : 'none',
            backgroundColor : '#fff',
            boxShadow       :
                '0 0 0 1.5px #262626, 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
            color           : '#262626',
        },
        '.Label'                                                     : {
            fontWeight : '500',
        },
    },
};

const options = {
    appearance,
};

const JoinNowForm = () => {
    const dispatch = useDispatch();

	const appRedux = useSelector(state => state.app);
    
    const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
	return (
		<React.Fragment>
			<Modal
				visible={appRedux.modalVisibleJoinNow.payload}
				onCancel={() => {
					dispatch(setModalVisibleJoinNow(false));
				}}
				width={600}
				footer={null}
				className='modal__loginForm'
			>
				<div className='modal-login-form'>
					<div className='row'>
						<div className='col-md-12 login-modal__right'>
							<img src='/static/img/logo_light.png' alt='' />
							<div className='layer' />
						</div>
						<div className='col-md-12 login-modal__left'>
                            <Elements options={options} stripe={stripePromise}>
								<Form />
							</Elements>
						</div>

					</div>
				</div>
			</Modal>

			
		</React.Fragment>
	);
};

export default JoinNowForm;
