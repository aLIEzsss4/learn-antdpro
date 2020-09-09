import React from 'react';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


export default () => {

  const showPromiseConfirm=()=> {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 2 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 2000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  }

  return (
    <Space>
      <Button onClick={showPromiseConfirm}>promise modal</Button>
    </Space>
  )
}