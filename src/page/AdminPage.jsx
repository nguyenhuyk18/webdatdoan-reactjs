import React from 'react';
import { BorderHorizontalOutlined, BorderOuterOutlined, CarryOutOutlined, CodepenOutlined, DashboardOutlined, DropboxOutlined, InteractionOutlined, ProductOutlined, TabletOutlined, UploadOutlined, UserAddOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import '../assets/Admin.css'
import { Link, Outlet, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    label : <Link to={'/admin'} >Trang Chủ</Link>,
    icon : <DashboardOutlined />,
    key : 'Dashboard',
    path : '/admin'
  },
  {
    label : <Link to={'/admin/category'} >Danh Mục</Link>,
    icon : <DropboxOutlined />,
    key : 'Category',
    path : '/admin/category'
  },
  {
    label : <Link to={'/admin/brand'} >Thương Hiệu</Link>,
    icon : <CodepenOutlined />,
    key : 'Brand',
    path : '/admin/brand'
  },
  {
    label : <Link to={'/admin/product'} >Sản Phẩm</Link>,
    icon : <ProductOutlined />,
    key : 'Product',
    path : '/admin/product'
  },
  {
    label : <Link to={'/admin/staff'} >Nhân Viên</Link>,
    icon : <UserAddOutlined />,
    key : 'Staff',
    path : '/admin/staff'
  },
  {
    label : <Link to={'/admin/role'} >Vai Trò</Link>,
    icon : <CarryOutOutlined />,
    key : 'Role',
    path : '/admin/role'
  },

  {
    label : <Link to={'/admin/action'} >Các Tác Vụ</Link>,
    icon : <InteractionOutlined />,
    key : 'Action',
    path : '/admin/action'
  },


  {
    label : <Link to={'/admin/floor'} >Tầng Nhà Hàng</Link>,
    icon : <BorderOuterOutlined />,
    key : 'Floor',
    path : '/admin/floor'
  },

  {
    label : <Link to={'/admin/table'} >Quản Lý Bàn</Link>,
    icon : <TabletOutlined />,
    key : 'Table',
    path : '/admin/table'
  },

  {
    label : <Link to={'/admin/reservation'} >Quản Lý Đặt Chỗ</Link>,
    icon : <BorderHorizontalOutlined />,
    key : 'Reservation',
    path : '/admin/reservation'
  }

];

const AdminPage = () => {

  // lấy thông tin path hiện tại truy xuất đến pathname sẽ in ra path của bạn
  const currentPath = useLocation();

    // trả về key từ key này sẽ bỏ vào chỗ selectedKeys={[keySelected.key]} để chọn cái path mình đang đứng
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
        //   console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
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
export default AdminPage;