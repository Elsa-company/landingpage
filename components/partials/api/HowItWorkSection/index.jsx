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
import questionCircle from '~/public/static/img/pages/question-circle.png'
import videoButton from '~/public/static/img/pages/video-button.png'
import tab3score1 from '~/public/static/img/pages/Tab3-Score-1.png'
import tab3score2 from '~/public/static/img/pages/Tab3-Score-2.png'
import tab3score3 from '~/public/static/img/pages/Tab3-Score-3.png'
import tab4score2 from '~/public/static/img/pages/Tab4-Score-2.png'
import tab5score1 from '~/public/static/img/pages/Tab5-Score-1.png'
import tab6score2 from '~/public/static/img/pages/Tab6-Score-2.png'
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
    TitleWrapper,
    TabStyleRightItem,
    TabStyleRightItemTitle,
    TabStyleRightItemImage,
    TabStyleRightItemDesc,
    TabStyleRightItemDescP,
    TabStyleRightItemErrors,
    TabStyleRightItemErrorsItem
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
                                    <TabStyleLine color="#33B6FF" />
                                </TitleWrapper>
                                <TabStyleWrapper>
                                    <TabStyleLeft>
                                        <img src={tab2score1} alt="" />
                                    </TabStyleLeft>
                                    <TabStyleRight>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Best performance skills  <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>

                                            <TabStyleRightItemImage>
                                                <img src={tab2score2} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Areas for Improvement <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemImage>
                                                <img src={tab2score3} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle align="left">
                                                Suggestions for Improvement
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    You can practice diphthongs like /eɪ/ in a mirror to make sure you’re moving your tongue and jaw up as you close your mouth slightly.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    <img src={videoButton} alt="video button" /> Videos for how to pronounce the sound
                                                </TabStyleRightItemDescP>
                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                    </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab2} alt="Tab 2" /> Intonation</span>} key="3">
                            <TabContent>
                                <TitleWrapper>
                                    <h4>Your Intonation Highlights</h4>
                                    <TabStyleLine color="#FFB339" />
                                </TitleWrapper>
                                <TabStyleWrapper>
                                    <TabStyleLeft>
                                        <img src={tab3score1} alt="" />
                                    </TabStyleLeft>
                                    <TabStyleRight>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Average Pitch Variation  <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>

                                            <TabStyleRightItemImage>
                                                <img src={tab3score2} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Areas for Improvement <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemImage>
                                                <img src={tab3score3} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle align="left">
                                                Suggestions for Improvement
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    Ensure your pitch variation is in the range of 30-100Hz for optimal results.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP >
                                                    Maintain a volume above 50% to ensure others can hear you clearly.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    <img src={videoButton} alt="video button" /> Videos for how to pronounce the sound
                                                </TabStyleRightItemDescP>

                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                    </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab3} alt="Tab 3" /> Fluency</span>} key="4">
                            <TabContent>
                                <TitleWrapper>
                                    <h4>Your Fluency Highlights</h4>
                                    <TabStyleLine color="#FFB339" />
                                </TitleWrapper>
                                <TabStyleWrapper>
                                    <TabStyleLeft>
                                        <img src={tab2score1} alt="" />
                                    </TabStyleLeft>
                                    <TabStyleRight>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Average Pace  <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>

                                            <TabStyleRightItemImage>
                                                <img src={tab4score2} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Average Pausing <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemImage>
                                                <Progress
                                                    type="circle"
                                                    strokeColor={{
                                                        '0%': '#16ABFF',
                                                        '100%': '#1CF0DB',
                                                    }}
                                                    strokeWidth={6}
                                                    percent={63}
                                                    width={150}
                                                    format={percent => { return (<><span className="percent">{percent}%</span> <p>Moderate</p> </>) }}
                                                />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle align="left">
                                                Suggestions for Improvement
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    Avoid to many long pauses to reduce the lack of confidence impression.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Watch Videos for intonation tips and tricks
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Articles for tips and tricks to improve Intonation
                                                </TabStyleRightItemDescP>
                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                    </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab4} alt="Tab 3" /> Grammar</span>} key="5">
                            <TabContent>
                                <TitleWrapper>
                                    <h4>Your Fluency Highlights</h4>
                                    <TabStyleLine color="#FF52E3" />
                                </TitleWrapper>
                                <TabStyleWrapper>
                                    <TabStyleLeft>
                                        <img src={tab5score1} alt="" />
                                    </TabStyleLeft>
                                    <TabStyleRight column="2">
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Top Errors
                                            </TabStyleRightItemTitle>

                                            <TabStyleRightItemErrors>
                                                <TabStyleRightItemErrorsItem>
                                                    <p><b>Preposition</b> - 6 mistakes</p>
                                                </TabStyleRightItemErrorsItem>
                                                <TabStyleRightItemErrorsItem>
                                                    <p><b>Relative Clause</b> - 5 mistakes</p>
                                                </TabStyleRightItemErrorsItem>
                                                <TabStyleRightItemErrorsItem>
                                                    <p><b>S-V Agreement</b> - 4 mistakes</p>
                                                </TabStyleRightItemErrorsItem>
                                            </TabStyleRightItemErrors>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle align="left">
                                                Suggestions for Improvement
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    Having good grammar helps you come across as more intelligent, educated, and professional.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Watch videos for explanation on Preposition
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Additional resources for S-V Agreement
                                                </TabStyleRightItemDescP>
                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                    </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                        <TabItem tab={<span><img src={tab5} alt="Tab 3" /> Vocabulary</span>} key="6">
                            <TabContent>
                                <TitleWrapper>
                                    <h4>Your Fluency Highlights</h4>
                                    <TabStyleLine color="#FC2AC2" />
                                </TitleWrapper>
                                <TabStyleWrapper>
                                    <TabStyleLeft>
                                        <img src={tab5score1} alt="" />
                                    </TabStyleLeft>
                                    <TabStyleRight>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Vocabulary Statistics <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>

                                            <TabStyleRightItemImage>
                                                <img src={tab6score2} alt="" />
                                            </TabStyleRightItemImage>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle>
                                                Advanced Language  <img src={questionCircle} alt="" />
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    communicate (B2)
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP >
                                                    fluctuate (C2)
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP >
                                                    appreciate (C2)
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP >
                                                    furious (B2)
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP >
                                                    example (B1)
                                                </TabStyleRightItemDescP>
                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                        <TabStyleRightItem>
                                            <TabStyleRightItemTitle align="left">
                                                Suggestions for Improvement
                                            </TabStyleRightItemTitle>
                                            <TabStyleRightItemDesc>
                                                <TabStyleRightItemDescP >
                                                    Having good grammar helps you come across as more intelligent, educated, and professional.
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Watch videos for explanation on Preposition
                                                </TabStyleRightItemDescP>
                                                <TabStyleRightItemDescP underline>
                                                    Additional resources for S-V Agreement
                                                </TabStyleRightItemDescP>
                                            </TabStyleRightItemDesc>

                                        </TabStyleRightItem>
                                    </TabStyleRight>
                                </TabStyleWrapper>
                            </TabContent>
                        </TabItem>
                    </Tab>
                </TabSection>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
