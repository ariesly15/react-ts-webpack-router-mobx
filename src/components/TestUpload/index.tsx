import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Upload, message, Button, Icon } from "antd";

const props = {
    name: "file",
    action: "/api/upload",
    multiple: true,
    headers: {
        authorization: "authorization-text"
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};

@inject("appStore")
@observer
export default class TestAntd extends Component {
    static defaultProps = {
        value: "test static"
    };

    testPost(){
        
    }

    render() {
        return (
            <div className="antd-container">
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}
