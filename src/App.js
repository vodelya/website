import { Layout, Menu, Space } from 'antd';
import { Contacts } from './components/Contacts';

import './App.scss';
import { About } from './components/About';
import { Research } from './components/Research';
import { Art } from './components/Art';

import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
  const menuItems = ['About', 'Research', 'Art', 'Contact'];
  const [current, setCurrent] = useState('About');

  const onClick = e => {
    setCurrent(e.key);
  };

  return (
    <Layout className='layout'>
      <Header style={{ marginBottom: '20px' }}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['0']}
          onClick={onClick}
          selectedKeys={[current]}
          items={menuItems.map((item, idx) => ({
            key: idx,
            label: <a href={`#${item.toLowerCase()}`}>{item}</a>
          }))}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Space direction='vertical' size='large' style={{ display: 'flex' }}>
          <About />
          <Research />
          <Art />
          <Contacts />
        </Space>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      />
    </Layout>
  );
}

export default App;
