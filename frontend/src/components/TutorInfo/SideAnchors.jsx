import React from 'react';
import { Anchor, Typography } from 'antd';

const { Link } = Anchor;
const { Text, } = Typography;

class SideAnchors extends React.PureComponent {

    render() {
        return (
            <Anchor style={{ background: '#002766', padding: '30px', color: '#ffffff' }} >
                <Link href="#title" title={<Text style={{ color: '#d9d9d9' }}>Title</Text>} />
                <Link href="#education" title={<Text style={{ color: '#d9d9d9' }}>Education</Text>} />
                <Link href="#subjects" title={<Text style={{ color: '#d9d9d9' }}>Subjects</Text>} />
                <Link href="#bio" title={<Text style={{ color: '#d9d9d9' }}>Bio</Text>} />
                <Link href="#certificates" title={<Text style={{ color: '#d9d9d9' }}>Certificates</Text>} />
            </Anchor>
        );
    }
}

export default SideAnchors;
