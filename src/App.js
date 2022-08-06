import { Layout, Menu, Space } from 'antd';
import { Contacts } from './components/Contacts';

import './App.scss';
import { About } from './components/About';
const { Header, Content, Footer } = Layout;

function App() {
  const menuItems = ['About', 'Research', 'Art', 'Contact'];

  return (
    <Layout className='layout'>
      <Header style={{ marginBottom: '20px' }}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['0']}
          items={menuItems.map((item, idx) => ({
            key: idx,
            label: item
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
