import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { Nav, Icon } from 'aop-ui';
import Main from './components/Main';
import './index.scss'; // 重写了next组件的样式

const { SubNav, Item } = Nav;

class CustomLayout extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        location: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: ''
        };
    }

    goto(link) {
        hashHistory.push(link);
    }

    handleClick(openKeys) {
        this.setState({
            openMenuKey: openKeys
        });
    }
    render() {
        const { selectedKey, openMenuKey } = this.state;

        return (
            <div>
                <Nav style={{ width: '200px', float: 'left' }} hasArrow={true}>
                    <Item icon="account" onClick={() => this.goto('page1')}>api实例</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account" onClick={() => this.goto('page3')}>卡片</Item>
                        <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    </SubNav>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account" onClick={() => this.goto('page1')}>api实例</Item>
                        <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    </SubNav>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account" onClick={() => this.goto('page1')}>api实例</Item>
                        <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    </SubNav>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account" onClick={() => this.goto('page1')}>api实例</Item>
                        <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    </SubNav>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account" onClick={() => this.goto('page1')}>api实例</Item>
                        <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    </SubNav>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                    <Item icon="account" onClick={() => this.goto('page2')}>表单示例</Item>
                </Nav>
                <Main padding={20} blockRowSpace={-50} blockColSpace={20} blockColPadding={10}>
                    {this.props.children}
                    {/* // 页面内容区，根据不同的路由家在不同的页面。 */}
                </Main>
            </div>
        );
    }
}


export default CustomLayout;
