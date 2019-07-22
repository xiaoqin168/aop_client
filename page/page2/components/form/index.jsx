import React, { Component } from 'react';
import './index.scss';
import { TreeSelect } from 'aop-ui'
// const TreeNode = TreeSelect.Node;
const treeData = [{
    label: '服装',
    value: '1',
    selectable: false,
    children: [{
        label: '男装',
        value: '2',
        children: [{
            label: '外套',
            value: '4'
        }, {
            label: '夹克',
            value: '5',
            disabled: true
        },
        {
            label: '夹克',
            value: '6',
        }]
    }, {
        label: '女装',
        value: '3',
        children: [{
            label: '裙子',
            value: '6'
        }]
    }]
}];
export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['4', '6']
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }
    render() {
        return (
            <TreeSelect treeDefaultExpandAll treeCheckable showSearch dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
            // <TreeSelect treeDefaultExpandAll showSearch dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
            // <TreeSelect treeDefaultExpandAll dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
        );
    }

    // render() {
    //     return (
    //         <TreeSelect treeDefaultExpandAll onChange={this.handleChange} style={{ width: 200 }}>
    //             <TreeNode key="1" value="1" label="服装">
    //                 <TreeNode key="2" value="2" label="男装">
    //                     <TreeNode key="4" value="4" label="外套" />
    //                     <TreeNode key="5" value="5" label="夹克" disabled />
    //                     <TreeNode key="7" value="4" label="牛仔裤" />
    //                     <TreeNode key="8" value="5" label="皮鞋" />
    //                 </TreeNode>
    //                 <TreeNode key="3" value="3" label="女装">
    //                     <TreeNode key="6" value="6" label="裙子" />
    //                     <TreeNode key="6" value="6" label="帽子" />
    //                     <TreeNode key="6" value="6" label="短裤" />
    //                 </TreeNode>
    //             </TreeNode>
    //         </TreeSelect>
    //     );
    // }
}



