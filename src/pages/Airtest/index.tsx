import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SelectDevice from '../../components/SelectDevice';
import TestUpload from '../../components/TestUpload';
import { Link } from 'react-router-dom';
import { Select, Form, Input, Upload, Icon, Button, Modal } from 'antd';
import Api from '../../api/test';

const Option = Select.Option;
const Dragger = Upload.Dragger;
const TextArea = Input.TextArea;

interface IProps {
    form: any;
}

interface IState {
    fileList: any[];
    file: any;
    visible: boolean;
}

@observer
class Airtest extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            visible: false,
            file: null
        };

        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.down = this.down.bind(this);
    }
    down() {
        Api.testdown().then(console.log);
    }
    handlerSubmit() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var { file } = this.state;
                const formdata = new FormData();
                formdata.append('file', file);
                formdata.append('desc', values.desc);
                formdata.append('os', values.os);
                formdata.append('up_user', 'this.props.userId');
                console.log(file);
                var q = '?desc=xxxacce-query&os=adr&up_user=ccc';
                q = '';
                Api.testup('/api/case/upload' + q, formdata).then(console.log);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
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
                <br />
                <Button onClick={this.down}>down</Button>
                <Button onClick={() => this.setState({ visible: true })}>up modal</Button>
                <br />
                <Modal
                    title='上传脚本'
                    visible={this.state.visible}
                    onCancel={() => this.setState({ visible: false })}
                    footer={null}
                    okText='上传'
                    style={{ padding: 20 }}
                    afterClose={() => {
                        this.props.form.resetFields();
                        this.setState({ fileList: [], file: null });
                    }}
                >
                    <Form labelCol={{ span: 5 }}>
                        <Form.Item label='平台'>
                            {getFieldDecorator('os', {
                                rules: [{ required: true, message: '请选择平台！' }]
                            })(
                                <Select style={{ marginLeft: 10, width: 300 }} placeholder='请选择'>
                                    <Option value='ios'>ios</Option>
                                    <Option value='adr'>android</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label='描述'>
                            {getFieldDecorator('desc', {
                                rules: [{ required: true, message: '请输入描述！' }]
                            })(
                                <TextArea
                                    style={{ marginLeft: 10, width: 300 }}
                                    placeholder='输入脚本的描述，如此脚本测试的功能点'
                                    autosize={true}
                                    rows={4}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label='上传文件'>
                            {getFieldDecorator('file', {
                                rules: [{ required: true, message: '请传入zip文件！' }]
                            })(
                                <Dragger
                                    name='file'
                                    accept='.zip'
                                    fileList={this.state.fileList}
                                    beforeUpload={(file, fileList) => {
                                        if (file.type.indexOf('zip') < 0) {
                                        } else {
                                            if (this.state.fileList.length) {
                                                this.setState({ fileList: [file], file });
                                            } else {
                                                this.state.fileList.push(file);
                                                this.setState({ file });
                                            }
                                        }
                                        return false;
                                    }}
                                >
                                    <p className='ant-upload-drag-icon'>
                                        <Icon type='inbox' />
                                    </p>
                                    <p className='ant-upload-text'>点击或将文件拖拽到这里上传</p>
                                    <p className='ant-upload-hint'>支持扩展名： .zip</p>
                                </Dragger>
                            )}
                        </Form.Item>
                        <Button onClick={this.handlerSubmit}>upup</Button>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(Airtest);
