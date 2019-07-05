import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SelectDevice from '../../components/SelectDevice'

@observer
export default class Airtest extends Component<object, object> {
    render() {
        return (
            <div>
                <SelectDevice />
            </div>
        );
    }
}
