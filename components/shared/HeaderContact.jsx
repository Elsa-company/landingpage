import React, { useEffect, useState } from 'react';
import Logo from '~/components/elements/Logo';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderContact = () => {
    const [results, setResults] = useState({});

    return (
        <header
            className="header "
            data-sticky="true"
            id="headerSticky">
            
            {/* <NavigationDefault /> */}
        </header>
    );
};

export default HeaderContact;
