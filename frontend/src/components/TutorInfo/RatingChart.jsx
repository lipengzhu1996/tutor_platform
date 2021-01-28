import React from 'react';
import { Typography, Space, Progress } from 'antd';

const { Text } = Typography;

class RatingChart extends React.PureComponent {
    render() {
        return (
            <Space align='baseline' direction='vertical'>
                <Space>
                    <Text strong>5 star</Text>
                    <Progress style={{ width: '300px' }} percent={96} />
                </Space>
                <Space>
                    <Text strong>4 star</Text>
                    <Progress style={{ width: '300px' }} percent={3} />
                </Space>
                <Space>
                    <Text strong>3 star</Text>
                    <Progress style={{ width: '300px' }} percent={0} />
                </Space>
                <Space>
                    <Text strong>2 star</Text>
                    <Progress style={{ width: '300px' }} percent={1} />
                </Space>
                <Space>
                    <Text strong>1 star</Text>
                    <Progress style={{ width: '300px' }} percent={0} />
                </Space>
            </Space>
        );
    }
}

export default RatingChart;
