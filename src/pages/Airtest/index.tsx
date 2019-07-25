import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SelectDevice from '../../components/SelectDevice';
import TestUpload from '../../components/TestUpload';
import { Link } from 'react-router-dom';

@observer
export default class Airtest extends Component<object, object> {
    render() {
        return (
            <div>
                <br />
                <Link to={{ pathname: '/airtest/log', state: { id: 21 } }}>Go To AirtestLog</Link>
                <br />
                <br />
                <SelectDevice />
                <div>upload</div>
                <TestUpload />
                <div>/api/case/upload</div>
                <TestUpload action='/api/case/upload' />
            </div>
        );
    }
}
