import React from 'react';
import { Row, Col, Typography, Image, Space, Divider, notification, Button } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import ReviewStars from '../ReviewStars'

const { Title, Text, Paragraph } = Typography;

class TutorInfoCard extends React.PureComponent {
    render() {
        const contactButton =
            <Space>
                <Button shape="round" onClick={() => { }}>
                    Contact
                </Button>
                <Button type="primary" shape="round" onClick={() => { }}>
                    Book
                </Button>
            </Space>

        notification.open({
            message: 'Book Now!',
            description:
                'say something here',
            placement: 'bottomRight',
            btn: contactButton,
            duration: 0,
            style: {
                width: 200,
            },
        });

        return (
            <div style={{ marginBlock: '48px', marginInlineStart: '96px', marginInlineEnd: '250px' }}>
                <div id='title'>
                    <Row>
                        <Col span={6}>
                            <Image
                                width={150}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </Col>
                        <Col span={18}>
                            <Space direction="vertical" size={0}>
                                <Title level={4} type='secondary'>Tom J. Tik</Title>
                                <Title level={3} style={{ width: 600 }}>Experienced Math and ACT Tutor (middle school to college)</Title>
                                <ReviewStars rate={4.56} ratings={123} href='#aaa' />
                            </Space>
                        </Col>
                    </Row>
                </div>
                <div id='education'>
                    <Divider />
                    <Title level={3} type='secondary'>Education</Title>
                    <Space direction="vertical" size={0}>
                        <Text>Bachelor of Engineer, Beijing University</Text>
                        <Text>Master of Science, Beijing University</Text>
                    </Space>
                </div>
                <div id='subjects'>
                    <Divider />
                    <Title level={3} type='secondary'>Subjects</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>Physics (12h)</Text>
                            <LikeTwoTone twoToneColor="#eb2f96" />
                        </Space>
                        <Space size='small'>
                            <Text>TOEFL (12h)</Text>
                            <LikeTwoTone twoToneColor="#eb2f96" />
                        </Space>
                        <Text>Math (23h)</Text>
                        <Text>GRE (14h)</Text>
                    </Space>
                </div>
                <div id='bio'>
                    <Divider />
                    <Title level={3} type='secondary'>Bio</Title>
                    <Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'more'}}>
                        Growing up, math was always my favorite subject. I understand, however,
                        that many students may not have this same understanding of math, perhaps because
                        of the way they were taught in school. This is why I greatly enjoy being a tutor, as I get to guide students as
                        they slowly discover how to problem solve and they get that "aha" moment.
                        Growing up, math was always my favorite subject. I understand, however,
                        that many students may not have this same understanding of math, perhaps because
                        of the way they were taught in school. This is why I greatly enjoy being a tutor, as I get to guide students as
                        they slowly discover how to problem solve and they get that "aha" moment.
                    </Paragraph>
                </div>
                <div id='certificates'>
                    <Divider />
                    <Title level={3} type='secondary'>Certificates</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>National Scholarship</Text>
                            <LikeTwoTone twoToneColor="#eb2f96" />
                        </Space>
                        <Space size='small'>
                            <Text>National Scholarship</Text>
                            <LikeTwoTone twoToneColor="#eb2f96" />
                        </Space>
                    </Space>
                </div>
                <div id='price'>
                    <Divider />
                    <Title level={3} type='secondary'>Price</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>Hourly Rate: </Text>
                            <Text strong>$99</Text>
                        </Space>
                        <Space size='small'>
                            <Text>Free Trial: </Text>
                            <Text strong>30 mins</Text>
                        </Space>
                        <Space size='small'>
                            <Text>Lesson cancellation: </Text>
                            <Text strong>24 hours</Text>
                        </Space>
                    </Space>
                </div>
                <div id='schedule'>
                    <Divider />
                    <Title level={3} type='secondary'>Schedule</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>Sun </Text>
                            <Text strong>1:00 pm - 8:00 pm</Text>
                        </Space>
                        <Space size='small'>
                            <Text>Mon </Text>
                            <Text strong>7:00 am - 8:00 pm</Text>
                        </Space>
                        <Space size='small'>
                            <Text>Tue </Text>
                            <Text strong>7:00 am - 8:00 pm</Text>
                        </Space>
                    </Space>
                </div>
                <div id='tools'>
                    <Divider />
                    <Title level={3} type='secondary'>Tools</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>Zoom </Text>
                        </Space>
                        <Space size='small'>
                            <Text>Mic </Text>
                        </Space>
                    </Space>
                </div>
            </div>

        );
    }
}

export default TutorInfoCard;
