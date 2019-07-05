import React, { Component } from 'react';
import { Select } from 'antd';
import { getDeviceInfo } from '../../api/device';

const { Option } = Select;

interface Device {
    deviceId: string;
    brand: string;
    model?: string;
}

interface IState {
    deviceList: Device[];
}

export default class Airtest extends Component<object, IState> {
    constructor(props) {
        super(props);
        this.state = {
            deviceList: [
                {
                    brand: 'huawei',
                    deviceId: ''
                },
                {
                    brand: 'xiaomi',
                    deviceId: ''
                },
                {
                    brand: 'nubia',
                    deviceId: ''
                }
            ]
        };
    }
    clickA() {}
    async componentDidMount() {
        console.log('..........Airtest:componentDidMount:\n', this);
        const result: any = await getDeviceInfo();
        console.log('componentDid>>>>>>>', result);
        this.setState({ deviceList: result.deviceList });
    }
    onSelectChange(value) {
        console.log('onSelectChange', value);
    }
    onSelectFocus() {
        console.log('onSelectFocus');
    }
    onSelectBlur() {
        console.log('onSelectFocus');
    }
    onSelectSearch(value) {
        console.log('onSelectSearch:::', value);
    }
    render() {
        const { deviceList } = this.state;
        console.log('...........deviceList:::', deviceList);
        return (
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder='Select a person'
                optionFilterProp='children'
                onChange={this.onSelectChange}
                onFocus={this.onSelectFocus}
                onBlur={this.onSelectBlur}
                onSearch={this.onSelectSearch}
                // filterOption={(input, option) =>
                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
            >
                {deviceList.map((item, idx) => (
                    <Option key={idx} value={item.brand}>
                        {item.brand}
                    </Option>
                ))}
            </Select>
        );
    }
}
