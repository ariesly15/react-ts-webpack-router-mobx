import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SelectDevice from '../../components/SelectDevice';
import TestUpload from '../../components/TestUpload';

@observer
export default class Airtest extends Component<object, object> {
    render() {
        return (
            <div>
                <SelectDevice />
                <div>upload</div>
                <TestUpload />
                <div>/api/case/upload</div>
                <TestUpload action="/api/case/upload" />
            </div>
        );
    }
}
