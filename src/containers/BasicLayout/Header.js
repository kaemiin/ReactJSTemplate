import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    getHeadWidth = () => {
        return '100%';
    };
    render() {
        const { visible } = this.state;
        const width = this.getHeadWidth();
        const HeaderDom = visible ? (
            <Header style={{ padding: 0, width }} className={''}>
                <div>THIS IS TEST</div>
            </Header>
        ) : null;
        return (
            {HeaderDom}
        );
    }
}

export default (HeaderView);
