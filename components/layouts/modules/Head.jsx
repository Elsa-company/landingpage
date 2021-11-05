import React from 'react';
import Head from 'next/head';

const StyleSheets = () => (
	<Head>
		<title>Elsa</title>
		<link rel='shortcut icon' href='/Favicon.png' />
		<link rel='icon' href='/Favicon.png' sizes='32x32' />
		<link rel='icon' href='/Favicon.png' sizes='192x192' />
		<link rel='apple-touch-icon-precomposed' href='/Favicon.png' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		<meta name='format-detection' content='telephone=no' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='author' content='Elsa' />
		<meta name='keywords' content='Elsa' />
		<meta name='description' content='Elsa' />
		<link rel='preconnect' href='https://fonts.googleapis.com' />
		<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
		<link
			href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap'
			rel='stylesheet'
		/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
		<link rel='stylesheet' href='https://use.typekit.net/flp4ysk.css' />
		<link rel='stylesheet' href='/static/fonts/Linearicons/Font/demo-files/demo.css' />

		<link rel='stylesheet' href='/static/fonts/font-awesome/css/font-awesome.min.css' />

		<link rel='stylesheet' type='text/css' href='/static/css/bootstrap.min.css' />
		<link rel='stylesheet' type='text/css' href='/static/css/slick.min.css' />

		<script src='https://js.stripe.com/v3/' />
	</Head>
);

export default StyleSheets;
