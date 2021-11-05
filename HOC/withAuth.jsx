// HOC/withAuth.jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalVisibleLogin } from '~/app/features/app/slice';

const withAuth = WrappedComponent => {
	return props => {
		const Router = useRouter();
		const dispatch = useDispatch();
		const [ verified, setVerified ] = useState(false);
		const authRedux = useSelector(state => state.auth);

		useEffect(async () => {
			const { token: accessToken } = authRedux; // token and data
			// if no accessToken was found,then we redirect to "/" page.
			if (!accessToken) {
				dispatch(setModalVisibleLogin(true));
				Router.replace('/');
			}
			else {
				// // we call the api that verifies the token.
				// const data = await verifyToken(accessToken);
				// // if token was verified we set the state.
				// if (data.verified) {
				// 	setVerified(data.verified);
				// }
				// else {
				// 	// If the token was fraud we first remove it from localStorage and then redirect to "/"
				// 	localStorage.removeItem('accessToken');
				// 	Router.replace('/');
				// }
				setVerified(true);
			}
		}, []);

		if (verified) {
			return <WrappedComponent {...props} />;
		}
		else {
			return null;
		}
	};
};

export default withAuth;
