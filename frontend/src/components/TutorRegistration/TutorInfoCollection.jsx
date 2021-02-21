import React from 'react';
import { Typography, Space, Input, Select, TimePicker, Upload, Button } from 'antd';
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Subjects, Weekdays } from '../../constants/constants'

const { TextArea } = Input;
const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = TimePicker;

const TRIALS = ['20 mins', '30 mins']
const CANCELLATION = ['12 hours', '24 hours']

class TutorInfoCollection extends React.PureComponent {
    state = {
        name: '',
        title: '',
        subjects: [],
        subjectToHours: new Map(),
        bio: '',
        certificates: '',
        rate: '',
        trial: '',
        cancellation: '',
        schedule: [],
        scheduleDateToTime: new Map(),
        review: ''
    }
    render() {
        return (
            <div style={{ marginBlock: '48px', marginInlineEnd: '96px' }}>
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
                            {<LoadingOutlined />}
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </div>
                <div id='name'>
                    <Title level={5} type='secondary'>Name</Title>
                    <Input
                        placeholder="Please input your name"
                        value={this.state.name}
                        onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </div>
                <div id='title'>
                    <Title level={5} type='secondary'>Title</Title>
                    <Input
                        placeholder="Please input your title"
                        value={this.state.title}
                        onChange={(e) => { this.setState({ title: e.target.value }) }} />
                </div>
                <div id='education'>
                    <Title level={5} type='secondary'>Education</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>School</Text>
                            <Input />
                            <Text>School</Text>
                            <Input />
                            <Text>School</Text>
                            <Input />
                        </Space>
                    </Space>
                </div>
                <div id='subjects'>
                    <Title level={5} type='secondary'>Subjects</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select subjects"
                        defaultValue={[]}
                        value={this.state.subjects}
                        onChange={(value) => { this.setState({ subjects: value }) }}
                    >
                        {Subjects.map(subject => <Option key={subject}>{subject}</Option>)}
                    </Select>
                    <Space direction="vertical" size={0}>
                        {this.state.subjects.map(subject => {
                            return (
                                <Space size='small'>
                                    <Text>{subject}</Text>
                                    <Input suffix="Hours" onChange={(e) => {
                                        this.setState(prevState => ({
                                            subjectToHours: {
                                                ...prevState.subjectToHours,
                                                [subject]: e.target.value
                                            }
                                        }))
                                    }} />
                                </Space>
                            )
                        })}
                    </Space>
                </div>
                <div id='bio'>
                    <Title level={5} type='secondary'>Bio</Title>
                    <TextArea
                        rows={4}
                        placeholder="Please input your biography"
                        value={this.state.bio}
                        onChange={(e) => { this.setState({ bio: e.target.value }) }} />
                </div>
                <div id='certificates'>
                    <Title level={5} type='secondary'>Certificates</Title>
                    <TextArea
                        rows={4}
                        placeholder="Please input your certificates"
                        value={this.state.certificates}
                        onChange={(e) => { this.setState({ certificates: e.target.value }) }} />
                    <Upload name={'file'}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>,
                </div>
                <div id='price'>
                    <Title level={5} type='secondary'>Price</Title>
                    <Space direction="vertical" size={0}>
                        <Space size='small'>
                            <Text>Hourly Rate: </Text>
                            <Input
                                prefix="$"
                                suffix="/Hour"
                                value={this.state.rate}
                                onChange={(e) => { this.setState({ rate: e.target.value }) }} />
                        </Space>
                        <Space size='small'>
                            <Text>Free Trial: </Text>
                            <Select value={this.state.trial} style={{ width: 120 }} onChange={(value) => { this.setState({ trial: value }) }}>
                                {TRIALS.map(duration => <Option key={duration}>{duration}</Option>)}
                            </Select>
                        </Space>
                        <Space size='small'>
                            <Text>Lesson cancellation: </Text>
                            <Select value={this.state.cancellation} style={{ width: 120 }} onChange={(value) => { this.setState({ cancellation: value }) }}>
                                {CANCELLATION.map(time => <Option key={time}>{time}</Option>)}
                            </Select>
                        </Space>
                    </Space>
                </div>
                <div id='schedule'>
                    <Title level={5} type='secondary'>Schedule</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select schedule"
                        defaultValue={[]}
                        value={this.state.schedule}
                        onChange={(value) => { this.setState({ schedule: value }) }}
                    >
                        {Weekdays.map(day => <Option key={day}>{day}</Option>)}
                    </Select>
                    <Space direction="vertical" size={0}>
                        {this.state.schedule.map(day => {
                            return (
                                <Space size='small'>
                                    <Text>{day}</Text>
                                    <RangePicker
                                        format={'HH:mm'}
                                        onChange={(_, timeString) => {
                                            this.setState(prevState => ({
                                                scheduleDateToTime: {
                                                    ...prevState.scheduleDateToTime,
                                                    [day]: timeString.join(',')
                                                }
                                            }))
                                        }}
                                    />
                                </Space>
                            )
                        })}
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
                <div id='reviews'>
                    <Title level={5} type='secondary'>Reviews</Title>
                    <TextArea
                        rows={4}
                        placeholder="Please input reviews"
                        value={this.state.review}
                        onChange={(e) => { this.setState({ review: e.target.value }) }} />
                </div>

            </div>
        );
    }
}

export default TutorInfoCollection;
