import React from 'react';
import { Menu, Slider, Checkbox, Typography, Space, Select } from 'antd';
import {
    DEFAULT_AVAILABILITY,
    DEFAULT_GENDER,
    STUDENT_LEVELS,
} from '../../reducers/tutorReducer'

const { Option } = Select;
const { Text } = Typography;

class SideFilter extends React.PureComponent {
    state = {
        hourlyRate: [this.props.filter.minHourlyRate, this.props.filter.maxHourlyRate],
    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <Menu.ItemGroup key="g1" title={"Hourly rate: $" + this.state.hourlyRate[0] + ' - $' + this.state.hourlyRate[1]}>
                    <Slider
                        style={{ margin: '16px 16px', width: 240 }}
                        range
                        max={200}
                        imn={0}
                        defaultValue={[this.props.filter.minHourlyRate, this.props.filter.maxHourlyRate]}
                        disabled={false}
                        onAfterChange={value => {
                            this.setState({ hourlyRate: value })
                            this.props.setTutorFilter({
                                ...this.props.filter,
                                minHourlyRate: value[0],
                                maxHourlyRate: value[1]
                            })
                        }} />
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title={'Availability'}>
                    <Checkbox.Group
                        style={{ margin: '16px 16px' }}
                        onChange={value => {
                            this.props.setTutorFilter({
                                ...this.props.filter,
                                availability: value,
                            })
                        }}
                        defaultValue={this.props.filter.availability}>
                        <Space direction="vertical">
                            {DEFAULT_AVAILABILITY.map(day => {
                                return (
                                    <Checkbox value={day}><Text style={{ color: '#d9d9d9' }}>{day}</Text></Checkbox>
                                )
                            })}
                        </Space>
                    </Checkbox.Group>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g3" title={'Gender'}>
                    <Checkbox.Group
                        style={{ margin: '16px 16px' }}
                        onChange={value => {
                            this.props.setTutorFilter({
                                ...this.props.filter,
                                gender: value,
                            })
                        }}
                        defaultValue={this.props.filter.gender}>
                        <Space direction="vertical">
                            {DEFAULT_GENDER.map(gender =>
                                <Checkbox value={gender}><Text style={{ color: '#d9d9d9' }}>{gender}</Text></Checkbox>
                            )}
                        </Space>
                    </Checkbox.Group>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g4" title={'Student\'s level'}>
                    <Select
                        style={{ margin: '16px 16px', width: 240 }}
                        defaultValue={this.props.filter.studentsLevel}
                        onChange={value => {
                            this.props.setTutorFilter({
                                ...this.props.filter,
                                studentsLevel: value,
                            })
                        }}>
                        {STUDENT_LEVELS.map(level =>
                            <Option value={level}>{level}</Option>
                        )}
                    </Select>
                </Menu.ItemGroup>
            </Menu>
        );
    }
}

export default SideFilter;
