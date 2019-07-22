import React, { Component } from 'react';
import './index.scss';
import { Slider } from 'aop-ui';

export default class  MySlides extends Component{
    render(){
        const slides = [
            { url: 'https://img.aslicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: '手机淘宝皮肤征集' },
            { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: '阿里公益T恤设计大概' },
            { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: '淘公仔设计大赛' },
            { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: '磁带播放器换肤设计大赛' },
        ];
        const itemNodes = slides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>);
        return(
            <div className='slides'>
                <Slider speed={1000} autoplay autoplaySpeed={2000}>{itemNodes}</Slider>
            </div>
        )
    }
}


