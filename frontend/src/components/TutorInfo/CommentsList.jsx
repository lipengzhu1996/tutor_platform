import React from 'react';
import { List, Comment, Tooltip } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const COMMENTS = [
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        ),
        datetime: '2 days ago'
    },
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        ),
        datetime: '3 days ago'
    },
];

class RatingChart extends React.PureComponent {
    state = {
        likes: 10,
        dislikes: 2,
        action: null,
    }
    render() {
        const actions = [
            <Tooltip key="comment-basic-like" title="Like">
                {React.createElement(this.state.action === 'liked' ? LikeFilled : LikeOutlined, {
                    onClick: () => {
                        this.setState({
                            likes: 1,
                            dislikes: 0,
                            action: 'liked',
                        })
                    }
                })}
                <span className="comment-action">{this.state.likes}</span>
            </Tooltip>,
            <Tooltip key="comment-basic-like" title="Dislike">
                {React.createElement(this.state.action === 'disliked' ? DislikeFilled : DislikeOutlined, {
                    onClick: () => {
                        this.setState({
                            likes: 0,
                            dislikes: 1,
                            action: 'disliked',
                        })
                    }
                })}
                <span className="comment-action">{this.state.dislikes}</span>
            </Tooltip>,

        ];

        return (
            <List
                className="comment-list"
                header={`${COMMENTS.length} reviews`}
                itemLayout="horizontal"
                dataSource={COMMENTS}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />)
    }
}
export default RatingChart;
