import React, { Component } from 'react';
import TestApi from '../../../api/test';
import { Button } from 'antd';

export default class TestCORS extends Component {
    async clickB() {
        const result = await TestApi.testCORS();
        console.log('..........result:::', result);
    }

    render() {
        return (
            <div>
                <div>
                    <p style={{ color: 'red', fontSize: '24px' }}>Open Dev Tool</p>
                </div>
                <div>
                    <Button onClick={this.clickB}>TestCORS</Button>
                </div>
            </div>
        );
    }
}
