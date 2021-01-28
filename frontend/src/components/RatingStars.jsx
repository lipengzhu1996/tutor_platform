import React from 'react';
import { Typography, Space,Rate } from 'antd';

const { Title, Link } = Typography;

class RatingStars extends React.PureComponent {
    render() {
        const { rate, ratings, href } = this.props;

        return (
            <Space align='baseline'>
                <Space size={4}>
                <Rate disabled allowHalf defaultValue={rate}/>
                </Space>
                <Title level={5} >{rate}</Title>
                {href != null ?
                    <Link href={href} >
                        {'('.concat(ratings).concat(' ratings)')}
                    </Link> : null}
            </Space>
        );
    }
}

export default RatingStars;
