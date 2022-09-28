import logo from './logo.svg';
import './App.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react';

function App() {
  let size = 'large'
  return (
    <>
      <Button type="primary" size={size}>
        Primary
      </Button>
      <Button size={size}>Default</Button>
      <Button type="dashed" size={size}>
        Dashed
      </Button>
    </>

  );
}

export default App;
