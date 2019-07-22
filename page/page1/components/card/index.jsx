import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'aop-ui';
import './index.scss';

class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: ''
        };
    }

    request = () => {
        window.bridge.call('open.api.request', {
            version: '1',
            namespace: 'com.alibaba.product',
            name: 'alibaba.product.get',
            data: {
                productID: 54321,
                webSite: '1688'
            }
        }, (res) => {
            this.setState({
                txt: JSON.stringify(res)
            });
        });
    };

    proxy = () => {
        window.bridge.call('open.api.proxy', {
            url: 'http://gw.open.1688.com/openapi/param2/1/system/currentTime/1323',
            method: 'GET',
            // headers: {},
            // body: {}
        }, (res) => {
            this.setState({
                txt: JSON.stringify(res)
            });
        });
    };

    render() {
        const { txt } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.request}>修改</Button> &nbsp; &nbsp;
                <Button type="primary" onClick={this.proxy}>删除</Button>
                <div>
                    {txt}
                </div>
            </div>
        );
    }
}

export default MyCard;
