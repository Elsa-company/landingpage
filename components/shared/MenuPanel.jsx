import React, { useState, useEffect } from 'react'
import NavigationDefault from '~/components/shared/NavigationDefault'

const MenuPanel = () => {
    const [results, setResults] = useState({});

    return (
        <div>
            <div className="panel-menu">
                <NavigationDefault />
            </div>
            <div className="social">
                <div className="follow">
                    <a href={results.instagram} className="header__right__list-icons">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href={results.facebook} className="header__right__list-icons">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href={results.facebook} className="header__right__list-icons">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href={results.linkedin} className="header__right__list-icons">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="contact">
                    <ul>
                        <li>
                            <div className="circle">
                                <i class="icon-telephone" aria-hidden="true"></i>
                            </div>
                            <p>{results.phone}</p>
                        </li>
                        <li>
                            <div className="circle">
                                <i class="icon-envelope" aria-hidden="true"></i>
                            </div>
                            <p>{results.receive_email}</p>
                        </li>
                        <li>
                            <div className="circle">
                                <i class="icon-map-marker" aria-hidden="true"></i>
                            </div>
                            <p>{results.address}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MenuPanel
