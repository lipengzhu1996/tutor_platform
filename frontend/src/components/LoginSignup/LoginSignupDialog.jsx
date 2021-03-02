import React from 'react';
import { Tabs, Input, Checkbox, Typography, Button } from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Link } = Typography;

class LoginSignupDialog extends React.PureComponent {

    render() {
        return (
            <div style={{ marginInline: '400px', marginTop: '40px', marginBottom: '40px' }}>
                <Tabs defaultActiveKey="1" centered style={{ marginBottom: '20px' }}>
                    <TabPane tab="Account" key="1" >
                        <Input size="large" placeholder="Account" prefix={<UserOutlined />} style={{ marginBottom: '10px' }} />
                        <Input.Password
                            size="large"
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            prefix={<LockOutlined />}
                        />
                    </TabPane>
                    <TabPane tab="Phone" key="2">
                        <Input size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} style={{ marginBottom: '10px' }} />
                        <div style={{display:'flex'}}>
                            <Input size="large" placeholder="Phone Number" prefix={<MailOutlined />} />
                            <Button size='large' style={{marginLeft:'10px'}}>Get Verification Code</Button>
                        </div>
                    </TabPane>
                </Tabs>
                <div>
                    <Checkbox onChange={() => { }}>Keep me logged in</Checkbox>
                    <Link style={{ float: 'right' }} href="">
                        Forgot password
                    </Link>
                </div>
                <div >
                    <Button type="primary" shape="round" size='large' block style={{ marginTop: '20px' }}>
                        Login
                    </Button>
                    <Button shape="round" size='large' block style={{ marginTop: '20px' }}>
                        Register
                    </Button>
                </div>
            </div>
        );
    }
}

export default LoginSignupDialog