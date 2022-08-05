import { Layout, Menu, Typography } from 'antd';
import { Contacts } from './components/Contacts';

import './App.scss';
const { Header, Content, Footer } = Layout;
const { Paragraph } = Typography;

function App() {
  const menuItems = ['About', 'Research', 'Art', 'Contact'];

  return (
    <Layout className='layout'>
      <Header>
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
        <Paragraph>Hello, World!</Paragraph>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <Contacts />
      </Footer>
    </Layout>
  );
}

export default App;
