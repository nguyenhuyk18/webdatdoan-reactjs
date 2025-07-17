import React from 'react';
import { CodepenOutlined, DashboardOutlined, DropboxOutlined, ProductOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import './App.css'
import { Link, Outlet, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }


const items = [
  {
    label : <Link to={'/'} >Trang Chủ</Link>,
    icon : <DashboardOutlined />,
    key : 'Dashboard',
    path : '/'
  },
  {
    label : <Link to={'/category'} >Danh Mục</Link>,
    icon : <DropboxOutlined />,
    key : 'Category',
    path : '/category'
  },
  {
    label : <Link to={'/brand'} >Thương Hiệu</Link>,
    icon : <CodepenOutlined />,
    key : 'Brand',
    path : '/brand'
  },
  {
    label : <Link to={'/product'} >Sản Phẩm</Link>,
    icon : <ProductOutlined />,
    key : 'Product',
    path : '/product'
  },
  {
    label : <Link to={'/staff'} >Nhân Viên</Link>,
    icon : <ProductOutlined />,
    key : 'Staff',
    path : '/staff'
  }
  // {
  //   label : <Link to={'/brand'}>Brand</Link>
  // }
];

const App = () => {

  const currentPath = useLocation();

  const keySelected = items.find(row => {
    if(row.path === currentPath.pathname) {
      return row.key;
    }
  })

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu selectedKeys={[keySelected.key]} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }} >

            
          <div style={{ color: '#000', fontSize: '18px' }}>Ứng dụng của tôi</div>
          
          
          <div>
            <Button type="primary" style={{ marginRight: '8px' }}>
              Hành động 1
            </Button>
            <Button>Hành động 2</Button>
          </div>
          </Header>
        <Content style={{ margin: '24px 16px 0px'}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 'calc(100vh - 64px - 65px)'
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Nguyễn Đức Huy Buffet Ngon Nhất Thế Giới
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;