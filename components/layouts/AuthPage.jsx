import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/HeaderDefault';
import FooterFullwidth from '~/components/shared/FooterFullwidth';
import HeaderContact from '../shared/HeaderContact';

const AuthPage = ({ children, title, boxed = false }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="bluestone">
            <Head>
                <title>{titleView}</title>
            </Head>
            <main>{children}</main>
            <FooterFullwidth />
        </div>
    );
};

export default AuthPage;
