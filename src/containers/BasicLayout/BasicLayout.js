import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import Header from './Header';

const { Sider, Content } = Layout;

class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
  
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
  
    render() {
        return (
            <Layout className="context-height">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header {...this.props} />
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
  
export default injectIntl(BasicLayout);
