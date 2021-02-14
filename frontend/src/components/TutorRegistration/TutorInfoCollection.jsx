import React from 'react';
import { Row, Col, Typography, Image, Space, Divider, Input, Select, TimePicker, Checkbox, Upload } from 'antd';
import { LikeTwoTone,LoadingOutlined } from '@ant-design/icons';
import { Subjects } from '../../constants/constants'

const { TextArea } = Input;
const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = TimePicker;

class TutorInfoCollection extends React.PureComponent {
    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        return (
            <div style={{ marginBlock: '48px', marginInlineStart: '96px', marginInlineEnd: '250px' }}>
                <div id='name'>
                    <Title level={5} type='secondary'>Image</Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={() => { }}
                        onChange={() => { }}
                    >
                        <div>
                            { <LoadingOutlined />}
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </div>
                <div id='name'>
                    <Title level={5} type='secondary'>Name</Title>
                    <Input placeholder="Please input your name" />
                </div>
                <div id='title'>
                    <Title level={5} type='secondary'>Title</Title>
                    <Input placeholder="Please input your title" />
                </div>
                <div id='education'>
                    <Title level={5} type='secondary'>Education</Title>
                    <TextArea rows={4} placeholder="Please input your education information" />
                </div>
                <div id='subjects'>
                    <Title level={5} type='secondary'>Subjects</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select subjects"
                        defaultValue={[]}
                        onChange={() => { }}
                    >
                        {Subjects.map(subject => <Option key={subject}>{subject}</Option>)}
                    </Select>
                </div>
                <div id='bio'>
                    <Title level={5} type='secondary'>Bio</Title>
                    <TextArea rows={4} placeholder="Please input your biography" />
                </div>
                <div id='certificates'>
                    <Title level={5} type='secondary'>Certificates</Title>
                    <TextArea rows={4} placeholder="Please input your certificates" />
                </div>
                <div id='price'>
                    <Title level={5} type='secondary'>Price</Title>
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
                    <Title level={5} type='secondary'>Schedule</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Checkbox value="sun">Sun</Checkbox>
                            <RangePicker />
                        </Space>
                    </Space>
                </div>
                <div id='tools'>
                    <Title level={5} type='secondary'>Tools</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select subjects"
                        defaultValue={[]}
                        onChange={() => { }}
                    >
                        {Subjects.map(subject => <Option key={subject}>{subject}</Option>)}
                    </Select>
                </div>

            </div>

        );
    }
}

export default TutorInfoCollection;
