import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';


export default () => {
  const [time, setTime] = useState();

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
        onChange={(_, dateString:string) => setTime(dateString)}
      />
      选择的时间是{JSON.stringify(time)}
    </Space>
  )
}