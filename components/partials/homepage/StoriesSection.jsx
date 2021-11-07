import React from 'react'

const StoriesSection = () => {
    return (
        <section className='ps-stories-section'>
            <div className="ps-container">
                <div className="section-title" data-aos='fade-up' data-aos-delay='100' data-aos-duration='750'>
                    Success stories
                </div>

                <div className="education-list">
                    <div className="education" data-aos='fade-up' data-aos-delay='400' data-aos-duration='750'>
                        <div className="thumbnail">
                            <img src="/static/img/pages/education-1.png" alt="" />
                        </div>
                        <div className="education-content">
                            <div className="education-content__header">
                                <div className="title-blade">
                                    <button>Education</button>
                                </div>
                                <p className="title-text">
                                    RICE students increased their pronunciation score by 14% with ELSA
                                </p>
                            </div>
                            <div className="education-content__footer">
                                <p>
                                    Read RICE story
                                    <img src="/static/img/icons/next-icon.png" alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="education" data-aos='fade-up' data-aos-delay='900' data-aos-duration='750'>
                        <div className="thumbnail">
                            <img src="/static/img/pages/education-2.png" alt="" />
                        </div>

                        <div className="education-content">
                            <div className="education-content__header">
                                <div className="title-blade">
                                    <button>Education</button>
                                </div>
                                <p className="title-text">
                                    RICE students increased their pronunciation score by 14% with ELSA
                                </p>
                            </div>
                            <div className="education-content__footer">
                                <p>
                                    Read RICE story
                                    <img src="/static/img/icons/next-icon.png" alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title" data-aos='fade-up' data-aos-delay='1000' data-aos-duration='750'>
                    Awards and Recognitions
                </div>

                <div className="awards-list">
                    <div className="award" data-aos='fade-up' data-aos-delay='1000' data-aos-duration='750'>
                        <div className="thumbnail">
                            <img src="/static/img/pages/awards-1.png" alt="" />
                        </div>
                        <div className="body">
                            Top 4 companies using AI to transform the world
                        </div>
                    </div>
                    <div className="award" data-aos='fade-up' data-aos-delay='1600' data-aos-duration='750'>
                        <div className="thumbnail">
                            <img src="/static/img/pages/awards-2.png" alt="" />
                        </div>
                        <div className="body">
                            Most Innovative Artificial Intelligence Startups
                        </div>
                    </div>
                    <div className="award" data-aos='fade-up' data-aos-delay='2100' data-aos-duration='750'>
                        <div className="thumbnail">
                            <img src="/static/img/pages/awards-3.png" alt="" />
                        </div>
                        <div className="body">
                            World changing ideas in the year of 2020
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoriesSection
