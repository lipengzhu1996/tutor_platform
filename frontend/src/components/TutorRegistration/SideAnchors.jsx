import React from 'react';
import { Anchor, Typography } from 'antd';

const { Link } = Anchor;
const { Text, } = Typography;

class SideAnchors extends React.PureComponent {

    render() {
        return (
            <Anchor style={{ background: '#f0f0f0', padding: '30px' }} >
                <Link href="#title" title={<Text >Title</Text>} />
                <Link href="#education" title={<Text >Education</Text>} />
                <Link href="#subjects" title={<Text >Subjects</Text>} />
                <Link href="#bio" title={<Text >Bio</Text>} />
                <Link href="#certificates" title={<Text >Certificates</Text>} />
                <Link href="#price" title={<Text >Price</Text>} />
                <Link href="#schedule" title={<Text >Schedule</Text>} />
                <Link href="#tools" title={<Text >Tools</Text>} />
                <Link href="#reviews" title={<Text >Ratings and Reviews</Text>} />
            </Anchor>
        );
    }
}

export default SideAnchors;
