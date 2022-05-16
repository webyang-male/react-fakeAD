import React, { useState, useEffect } from 'react';
import {
    Modal, Radio, Form, InputNumber, Input, Divider, RadioChangeEvent,
} from 'antd';
// import { RadioChangeEvent } from 'antd/lib/radio';
import './style.scss';

const initialValues = {
    plan: {
        name: '2',
        autoOpenValue: 0,
    },
};

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} 是必填项!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

interface Iprops {
    visible: boolean;
    onBtnClick?: (type: number, values?: any) => void;
}

function AutoModal(props: Iprops) {
    const { visible } = props;
    const [goOnPromotionValue, setGoOnPromotionValue] = useState(0);
    const [form] = Form.useForm();

    const handelOk = () => {
        form.validateFields().then((values: any) => {
            console.log('values', values);
            const { onBtnClick } = props;
            if (onBtnClick) {
                onBtnClick(1, values);
            }
        }).catch((errorInfo: any) => {
            console.log('errorInfo', errorInfo);
        });
    };

    const handleCancel = () => {
        const { onBtnClick } = props;
        if (onBtnClick) {
            onBtnClick(0);
        }
    };

    const onRadioChange = (e: RadioChangeEvent) => {
        setGoOnPromotionValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div className="auto-modal-component-box">
            <Modal
                title="是否继续推广"
                visible={visible}
                onOk={handelOk}
                onCancel={handleCancel}
                className="auto-modal"
                okText="确定"
                cancelText="暂不处理"
            >
                <div className="prompt-area">
                    您的推广计划-XXX已到期，请选择是否继续推广？
                </div>
                <div className="go-on-promotion-area">
                    <Radio.Group onChange={onRadioChange} value={goOnPromotionValue}>
                        <Radio value={0}>暂停推广</Radio>
                        <Radio value={1}>继续推广</Radio>
                    </Radio.Group>
                </div>
                {
                    goOnPromotionValue === 1 && (
                        <div className="form-area">
                            <Divider />
                            <Form
                                {...layout}
                                form={form}
                                name="nest-messages"
                                onFinish={onFinish}
                                validateMessages={validateMessages}
                                initialValues={initialValues}
                            >
                                <Form.Item
                                    name={['plan', 'budget']}
                                    label="日预算"
                                    rules={[{
                                        type: 'number', min: 0, max: 99, required: true,
                                    }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item name={['plan', 'city']} label="推广城市" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Form>
                        </div>
                    )
                }
            </Modal>
        </div>
    );
}

export default AutoModal;
