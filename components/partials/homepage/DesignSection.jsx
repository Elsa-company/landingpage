import React from 'react'

const DesignSection = () => {
    return (
        <section className='ps-design-section'>
            <div className="ps-container">
                <div className="section-title">
                    <h2  data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                        Designed for learners. Loved by HRs.
                    </h2>
                    <p  data-aos='fade-up' data-aos-delay='200' data-aos-duration='750'>
                        ELSA Business streamlines recruitment and learning & development process
                    </p>
                    <p  data-aos='fade-up' data-aos-delay='200' data-aos-duration='750'>
                        Check out ELSA’s amazing features for enterprises
                        <img src="/static/img/icons/next-icon.png" alt="" />
                    </p>
                </div>
                <div className="section-content">
                    <div className="card-wrapper">
                        <div className="card-design"  data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                            <div className="card-design__head">
                                <img src="/static/img/pages/design-1.png" alt="" />
                            </div>
                            <div className="card-design__body">
                                <div className="card-design__body-title">
                                    Engage your employees
                                </div>
                                <div className="card-design__body-content">
                                    Increase your employees' engagement with competitive games and communities in ELSA
                                </div>
                            </div>  
                        </div>
                        <div className="card-design"  data-aos='fade-up' data-aos-delay='900' data-aos-duration='750'>
                            <div className="card-design__head">
                                <img src="/static/img/pages/design-2.png" alt="" />
                            </div>
                            <div className="card-design__body">
                                <div className="card-design__body-title">
                                    Measure progress
                                </div>
                                <div className="card-design__body-content">
                                    Measure the progress by employee, department or the whole company using ELSA dashboards
                                </div>
                            </div>
                        </div>
                        <div className="card-design"  data-aos='fade-up' data-aos-delay='1300' data-aos-duration='750'>
                            <div className="card-design__head">
                                <img src="/static/img/pages/design-3.png" alt="" />
                            </div>
                            <div className="card-design__body">
                                <div className="card-design__body-title">
                                    Assess and train at scale
                                </div>
                                <div className="card-design__body-content">
                                    Assign language, technical and social skills tests to employees with a few clicks using ELSA testing platform
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignSection
