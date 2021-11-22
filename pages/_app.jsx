import React, { useEffect } from 'react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/app/store';
import { Provider } from 'react-redux';

import '~/scss/style.scss';
import '~/scss/font.scss';


function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => <DefaultLayout children={page} />);

	useEffect(() => {
		document.body.style.zoom = 1.0;
		setTimeout(function () {
			document.getElementById('__next').classList.add('loaded');
		}, 100);

		document.body.removeAttribute('data-aos-easing')
		document.body.removeAttribute('data-aos-duration')
		document.body.removeAttribute('data-aos-delay')
		// const d = document;
		// const s = d.createElement("script");

		// s.src = "https://js-na1.hs-scripts.com/7353637.js";
		// s.async = true;
		// d.getElementsByTagName("body")[0].appendChild(s);
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
