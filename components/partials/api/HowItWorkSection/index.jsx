import React from 'react';
import { Progress } from 'antd';

import background from '~/public/static/img/bg/APISection-2.png';
import Container from '~/components/elements/Container';
import tab1 from '~/public/static/img/pages/api-tabs-1.png'
import tab2 from '~/public/static/img/pages/api-tabs-2.png'
import tab3 from '~/public/static/img/pages/api-tabs-3.png'
import tab4 from '~/public/static/img/pages/api-tabs-4.png'
import tab5 from '~/public/static/img/pages/api-tabs-5.png'
import score1 from '~/public/static/img/pages/Tab1-Score-1.png'
import score2 from '~/public/static/img/pages/Tab1-Score-2.png'
import score3 from '~/public/static/img/pages/Tab1-Score-3.png'
import score4 from '~/public/static/img/pages/Tab1-Score-4.png'
import tab2score1 from '~/public/static/img/pages/Tab2-Score.png'
import tab2score2 from '~/public/static/img/pages/Tab2-Score-2.png'
import tab2score3 from '~/public/static/img/pages/Tab2-Score-3.png'

import {
    SectionWrapper,
    Title,
    InputOutputSection,
    Input,
    InputTitle,
    InputList,
    InputItem,
    Output,
    OutputTitle,
    OutputList,
    OutputItem,
    ItemCircle,
    ItemText,
    TabSection,
    Tab,
    TabItem,
    TabContent,
    TabTitle,
    TabDesc,
    TabScores,
    ScoreWrapper,
    ImageWrapper,
    TabStyleWrapper,
    TabStyleLeft,
    TabStyleRight,
    TabStyleLine,
    TitleWrapper
} from './style'

const HomeDefaultBanner = ({ giveaway }) => {

    return (
        <SectionWrapper background={background}>
            <Container>
                <Title>How does ELSA API work?</Title>

                <InputOutputSection>
                    <Input>
                        <InputTitle>
                            API input
                        </InputTitle>

                        <InputList>
                            <InputItem>
                                Full audio file in a single API REST call
                            </InputItem>
                            <InputItem>
                                Audio streaming via a persistent connection with the server. This allows for server-side endpointing when the user finishes speaking
                            </InputItem>
                        </InputList>
                    </Input>
                    <Output>
                        <OutputTitle>
                            API output
                        </OutputTitle>
                        <OutputList>
                            <OutputItem>
                                <ItemCircle active>
                                    1
                                </ItemCircle >
                                <ItemText active>
                                    Overall score feedback
                                </ItemText>
                            </OutputItem>
                            <OutputItem>
                                <ItemCircle>
                                    2
                                </ItemCircle>
                                <ItemText>
                                    Highlights
                                </ItemText>
                            </OutputItem>
                        </OutputList>
                    </Output>
                </InputOutputSection>

                <TabSection>
                    <Tab defaultActiveKey="1" type="card">
                        <TabItem tab="Overall score" key="1">
                            <TabContent>
                                <TabTitle>
                                    Overall Score
                                </TabTitle>
                                <TabDesc>
                                    Great job! Your speaking overall is at the <b>Intermediate</b> level.  <br />
                                    People can understand you fairly well in general conversations and discussions around common topics.
                                </TabDesc>
                                <TabScores>
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#16ABFF',
                                            '100%': '#1CF0DB',
                                        }}
                                        strokeWidth={6}
                                        percent={67}
                                        width={200}
                                        format={percent => { return (<><span className="percent">{percent}%</span> <p>Intermediate</p> </>) }}
                                    />
                                    <ScoreWrapper>
                                        <p>Here's how your ELSA Score relates to other English proficiency scoring systems</p>
                                        <ImageWrapper>
                                            <img src={score1} alt="" />
                                            <img src={score2} alt="" />
                                            <img src={score3} alt="" />
                                            <img src={score4} alt="" />
                                        </ImageWrapper>
                                    </ScoreWrapper>
                                </TabScores>

                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab1} alt="Tab 1" /> Pronunciation</span>} key="2">
                            <TabContent>
                                <TitleWrapper>
                                    <h4>Your Pronunciation Highlights</h4>
                                    <TabStyleLine color="#33B6FF"/>
                                </TitleWrapper>
                                <TabStyleWrapper>
                                        <TabStyleLeft>
                                            
                                            <img src={tab2score1} alt="" />
                                        </TabStyleLeft>
                                        <TabStyleRight>
                                            
                                        </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab2} alt="Tab 2" /> Intonation</span>} key="3">
                            <TabContent> </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab3} alt="Tab 3" /> Fluency</span>} key="4">
                            <TabContent> </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab4} alt="Tab 3" /> Grammar</span>} key="5">
                            <TabContent> </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab5} alt="Tab 3" /> Vocabulary</span>} key="6">
                            <TabContent> </TabContent>
                        </TabItem>
                    </Tab>
                </TabSection>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
