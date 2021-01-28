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
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: 'bottomRight',
            btn: contactButton,
            duration: 0
        });

        return (
            <div style={{ marginBlock: '48px', marginInline: '96px' }}>
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
                <div id='bio'>
                    <Divider />
                    <Title level={3} type='secondary'>Bio</Title>
                    <Paragraph >
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
                    <Paragraph >
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
            </div>

        );
    }
}

export default TutorInfoCard;
