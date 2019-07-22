import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Field, Dialog } from 'aop-ui';
import './index.scss';
import { Card } from 'aop-ui';
export default class Mytest extends Component{
    render(){
        const commonProps = {
            title: '父亲节快乐',
            style: { width: 300 },
            subTitle: '6月30日',
            extra: '更多',
        };
        return(
        <div className='imageItems'>
            <Card className="image-card" {...commonProps} contentHeight="auto">
            <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"alt="father day" />
            <div className="custom-card">
                <h3>父亲节</h3>
                <p>Father's Day</p>
            </div>
            </Card>  
            <Card className="image-card" {...commonProps} contentHeight="auto">
            <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"alt="father day" />
            <div className="custom-card">
                <h3>父亲节</h3>
                <p>Father's Day</p>
            </div>
            </Card>
            <Card className="image-card" {...commonProps} contentHeight="auto">
            <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"alt="father day" />
            <div className="custom-card">
                <h3>父亲节</h3>
                <p>Father's Day</p>
            </div>
            </Card>  
            <Card className="image-card" {...commonProps} contentHeight="auto">
            <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"alt="father day" />
            <div className="custom-card">
                <h3>父亲节</h3>
                <p>Father's Day</p>
            </div>
            </Card>  
        </div>
           
        );
    }
}
