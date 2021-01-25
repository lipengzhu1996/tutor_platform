import React from 'react';
import { Typography, Space, Select, Radio, Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Subjects } from '../../constants/constants.js';

const { Option } = Select;
const { Title } = Typography;

const LESSON_TYPE = ['Online', 'In-person']

class TopFilter extends React.PureComponent {
    state = {
        subject: this.props.filter.subject,
        lessonType: this.props.filter.lessonType
    }

    render() {
        return (
            <Row justify="space-around">
                <Col >
                    <Space style={{ margin: '32px 16px' }} direction="horizontal" align="baseline">

                        <Title level={5}>Subject:</Title>
                        <Select
                            showSearch
                            style={{ margin: '0 16px', width: 300 }}
                            defaultValue={this.props.filter.subject}
                            placeholder="Select a subject"
                            optionFilterProp="children"
                            onChange={(value) => { this.setState({ subject: value }) }}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            size='large'
                        >
                            {Subjects.map(subject => <Option value={subject}>{subject}</Option>)}
                        </Select>
                        <Title level={5}>Lesson Type:</Title>
                        <Radio.Group
                            defaultValue={this.props.filter.lessonType}
                            size="large"
                            style={{ margin: '0 16px' }}
                            onChange={(value) => { this.setState({ lessonType: value }) }}>
                            {LESSON_TYPE.map(lesson => <Radio.Button value={lesson}>{lesson}</Radio.Button>)}
                        </Radio.Group>
                    </Space>
                </Col>
                <Col >
                    <Button
                        style={{ margin: '32px 0' }}
                        type="primary" shape="round"
                        icon={<SearchOutlined />}
                        size={'large'}
                        onClick={() => {
                            this.props.setTutorFilter({
                                ...this.props.filter,
                                subject: this.state.subject,
                                lessonType: this.state.lessonType
                            })
                        }}
                    >
                        Search
                    </Button>
                </Col>

            </Row>
        );
    }
}

export default TopFilter;
