import React from 'react';
import { Select, Button } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';
import { Subjects } from '../../constants/constants.js';

const { Option } = Select;

class Banner extends React.PureComponent {
  state = {
    subject: null
  }
  render() {
    const { ...currentProps } = this.props;
    const { dataSource, searchTutors } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
              dataSource.title.children.match(isImg) ? (
                <img src={dataSource.title.children} width="100%" alt="img" />
              ) : (
                dataSource.title.children
              )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Select
            showSearch
            style={{ margin: '0 16px', width: 400 }}
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
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size={'large'}
            onClick={()=>{searchTutors(this.state.subject)}}
          >
            Search
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
