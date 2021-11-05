import React from 'react'

const Company = () => {
    return (
        <section className='ps-info-section'>
            <div className="globe">
                <img src="/static/img/bg/section3-2.png" alt="" />
            </div>
            <div className="ps-container">
                <div className="info-head">
                    <h3 data-aos='zoom-out' data-aos-delay='0' data-aos-duration='750'>A personal AI English speaking coach for each employee</h3>
                    <p data-aos='zoom-out' data-aos-delay='300' data-aos-duration='750'>ELSA helps your employees improve confidence and <br />
                        speaking skills in as little as 3 months. No class needed.</p>
                </div>
                <div className="info-card-wrapper"> 
                    <div className="title" data-aos='fade-up' data-aos-delay='500' data-aos-duration='750'>
                        <h2>ELSA has been used by 15M+ users <br />
                            from 100+ countries in the world</h2>
                    </div>
                    <div className="card-group">
                        <div className="info-card" data-aos='fade-up' data-aos-delay='700' data-aos-duration='750'>
                            <div className="card-percent">
                                90%
                            </div>
                            <div className="card-content">
                                saw an improvement in pronunciation
                            </div>
                        </div>
                        <div className="info-card" data-aos='fade-up' data-aos-delay='900' data-aos-duration='750'>
                            <div className="card-percent">
                                95%
                            </div>
                            <div className="card-content">
                                expressed higher confidence in speaking english
                            </div>
                        </div>
                        <div className="info-card" data-aos='fade-up' data-aos-delay='1100' data-aos-duration='750'>
                            <div className="card-percent">
                                68%
                            </div>
                            <div className="card-content">
                                felt they spoke more clearly
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-footer">
                    <p>(*Based on learners who use ELSA for 10 minutes a day for three months.)</p>
                </div>
            </div>
        </section>

    )
}

export default Company
