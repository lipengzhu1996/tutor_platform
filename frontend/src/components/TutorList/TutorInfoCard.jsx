import React from 'react';
import { Row, Col, Typography, Card, Avatar, Image, Space } from 'antd';
import { StarFilled, StarOutlined, MailTwoTone, CalendarTwoTone, HeartTwoTone } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

class TutorInfoCard extends React.PureComponent {
    render() {
        return (
            <Card
                actions={[
                    <HeartTwoTone twoToneColor="#eb2f96" key="save" onClick={() => { }} />,
                    <MailTwoTone twoToneColor="#1890ff" key="message" onClick={() => { }} />,
                    <CalendarTwoTone twoToneColor="#389e0d" key="calender" onClick={() => { }} />,
                ]}
            >
                <Row style={{ padding: '0 24px' }}>
                    <Col span={6}>
                        <Space direction='vertical' align='center'>
                            <Avatar
                                size={128}
                                src={<Image src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ" />}
                            />
                            <Space align='baseline'>
                                <Space size={4}>
                                    <StarFilled style={{ color: '#fadb14' }} />
                                    <StarFilled style={{ color: '#fadb14' }} />
                                    <StarFilled style={{ color: '#fadb14' }} />
                                    <StarFilled style={{ color: '#fadb14' }} />
                                    <StarOutlined style={{ color: '#fadb14' }} />
                                </Space>
                                <Title level={5} >4.55</Title>
                            </Space>
                            <Space direction='vertical' size={0} align='center'>
                                <Text>123 lessons</Text>
                                <Text>16 hours in Chinese</Text>
                            </Space>
                        </Space>
                    </Col>

                    <Col span={18} >
                        <Space direction='vertical' align='start' size={0}>
                            <Row style={{ width: 800 }} justify='space-around'>
                                <Col span={12} style={{ alignContent: 'right' }}><Title level={4} type='secondary'>Tom J. Tik</Title></Col>
                                <Col span={12} ><Title level={4} type='secondary'>$40/Hour</Title></Col>
                            </Row>
                            <Title level={3} style={{ width: 600 }}>Experienced Math and ACT Tutor (middle school to college)(middle school to college)</Title>
                            <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'more' }} style={{ width: 600 }}>
                                Growing up, math was always my favorite subject. I understand, however,
                                that many students may not have this same understanding of math, perhaps because
                                of the way they were taught in school. This is why I greatly enjoy being a tutor, as I get to guide students as
                                they slowly discover how to problem solve and they get that "aha" moment.
                                Growing up, math was always my favorite subject. I understand, however,
                                that many students may not have this same understanding of math, perhaps because
                                of the way they were taught in school. This is why I greatly enjoy being a tutor, as I get to guide students as
                                they slowly discover how to problem solve and they get that "aha" moment.
                            </Paragraph>
                        </Space>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default TutorInfoCard;
