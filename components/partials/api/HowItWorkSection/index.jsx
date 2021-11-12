import React from 'react';
import background from '~/public/static/img/bg/APISection-2.png';
import Container from '~/components/elements/Container';
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
    TabItem
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
                        <TabItem tab="Card Tab 1" key="1">
                            Content of card tab 1
                        </TabItem>
                        <TabItem tab="Card Tab 2" key="2">
                            Content of card tab 2
                        </TabItem>
                    </Tab>
                </TabSection>
            </Container>
        </SectionWrapper>
    );
};

export default HomeDefaultBanner;
