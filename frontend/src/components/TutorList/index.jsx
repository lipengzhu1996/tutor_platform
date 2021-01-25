/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Layout, Divider } from 'antd';
import qs from 'query-string';

import SideFilter from './SideFilter';
import TopFilter from './TopFilter';

import './less/antMotionStyle.less';
import TutorInfoCard from './TutorInfoCard';

const { Content, Sider } = Layout;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  state = {
    collapsed: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      filter: qs.parse(this.props.searchString)
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
    this.props.queryTutors(this.props.filter)
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.props.queryTutors(this.props.filter)
      this.setState({ filter: qs.parse(this.props.searchString) })
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  _onFilterChange = (filter) => {
    this.props.setTutorFilter(filter)
    const searchString = qs.stringify(filter);
    this.props.history.push({
      pathname: '/tutors',
      search: searchString
    });
  }

  render() {
    console.log(this.props.tutors)
    const { filter } = this.state;
    const children = [
      <Layout className="site-layout-background" >
        <Sider className="site-layout-background" width={300}>
          <SideFilter
            filter={filter}
            setTutorFilter={this._onFilterChange} />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <TopFilter
            filter={filter}
            setTutorFilter={this._onFilterChange} />
          <Divider key="divider" />
          <TutorInfoCard />
        </Content>
      </Layout>
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
