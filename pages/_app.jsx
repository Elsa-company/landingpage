import React, { useEffect } from 'react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/app/store';
import { Provider } from 'react-redux';

import '~/scss/style.scss';
import '~/scss/font.scss';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import '~/scss/animate.min.css';

function App ({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => <DefaultLayout children={page} />);

	useEffect(() => {
		document.body.style.zoom = 1.0;
		setTimeout(function () {
			document.getElementById('__next').classList.add('loaded');
		}, 100);
	}, []);
	return getLayout(
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<div>Loading</div>}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>,
	);
}

export default App;
