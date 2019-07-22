'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
/* eslint-disable */

export default class SeekLayoutMain extends Component {
    static displayName = 'SeekLayoutMain'

    static propTypes = {
        // 容器宽度
        width: PropTypes.number,
        // 容器内边距
        padding: PropTypes.number,
        // 行之间的下边距
        blockRowSpace: PropTypes.number,
        // 列之间的右边距，默认与上面的值相等
        blockColSpace: PropTypes.number,
        // 区块自身的内边距
        blockColPadding: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
    };

    static defaultProps = {
        style: {},
        className: ''
    };

    state = {
        width: this.props.width || 990
    };

    static childContextTypes = {
        seekLayoutMainWidth: PropTypes.number,
        seekLayoutMainPadding: PropTypes.number,
        seekBlockRowSpace: PropTypes.number,
        seekBlockColSpace: PropTypes.number,
        seekBlockColPadding: PropTypes.number,
    };

    getChildContext() {
        return {
            seekLayoutMainWidth: this.state.width,
            seekLayoutMainPadding: this.props.padding,
            seekBlockRowSpace: this.props.blockRowSpace,
            seekBlockColSpace: this.props.blockColSpace,
            seekBlockColPadding: this.props.blockColPadding,
        };
    }

    componentWillMount() {
        this.hasCustomWidth = !!this.props.width;
    }

    componentDidMount() {
        // 用户没有传 width 时，需要动态获取
        if (!this.props.width) {
            setTimeout(() => {
                this.setState({
                    width: this.refs.main.getBoundingClientRect().width
                });
            });
        }
    }

    render() {
        const {
            padding,
            blockRowSpace,
            style,
            className,
            marginLeft,
            inLayout
        } = this.props;
        const { width } = this.state;
        let mainStyle = {
            ...style,
            width: this.hasCustomWidth ? width : 'auto',
            marginLeft
        };

        // 跟 Layout 一起用时，需要加上偏移值
        if (inLayout) {
            mainStyle.paddingBottom = 99999;
            mainStyle.marginBottom = -99999;
        }

        // 为了实现向上的偏移
        let contentStyle = {
            marginBottom: this.props.hasOwnProperty('blockRowSpace') ? -blockRowSpace : 0,
            padding
        };

        return (
            <div ref="main" className={`seek-layout-main ${className}`} style={mainStyle}>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
