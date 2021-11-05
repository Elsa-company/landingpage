import React from 'react'

const Company = () => {
    return (
        <section className='ps-company-section'>
            <div className="ps-container">
                <div className="company-gallery" data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                    <img src="/static/img/pages/1.png" alt="" />
                    <img src="/static/img/pages/2.png" alt="" />
                    <img src="/static/img/pages/3.png" alt="" />
                    <img src="/static/img/pages/4.png" alt="" />
                    <img src="/static/img/pages/5.png" alt="" />
                    <img src="/static/img/pages/6.png" alt="" />
                    <img src="/static/img/pages/7.png" alt="" />
                    <img src="/static/img/pages/8.png" alt="" />
                    <img src="/static/img/pages/9.png" alt="" />
                </div>
                <div className="traditional-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-title" data-aos='fade-up' data-aos-delay='300' data-aos-duration='750'>
                                Replacing traditional <br /> English training
                            </div>
                            <div className="content-desc" data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                                Each year, ELSA helps our partners save millions in hiring tutors.
                                <br />
                                With our AI-powered speech-recognition technology, your employees can receive detailed feedback on pronunciation, fluency, intonation and more without going to any physical class.
                            </div>

                            <div className="learn-more" data-aos='fade-up' data-aos-delay='700' data-aos-duration='750'>
                                Learn more about our technology
                                <img src="/static/img/icons/next-icon.png" alt="" />
                            </div>
                            <button className="ps-btn" data-aos='fade-up' data-aos-delay='900' data-aos-duration='750'>
                                Request a Demo
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src="/static/img/pages/company-phone.png" alt="" data-aos='fade-left' data-aos-delay='500' data-aos-duration='750'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company
