import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/HeaderDefault';
import FooterFullwidth from '~/components/shared/FooterFullwidth';
import HeaderContact from '../shared/HeaderContact';

const AdminPage = ({ children, title, boxed = false }) => {
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
            <HeaderContact />
            {/* <HeaderMobile /> */}
            <main>{children}</main>
            <FooterFullwidth />
            {/* <NavigationList /> */}
        </div>
    );
};

export default AdminPage;
