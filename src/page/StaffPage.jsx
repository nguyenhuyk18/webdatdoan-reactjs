import { Space, Table, Tag , Flex, Button  , message, Popconfirm , Drawer , Badge  } from 'antd';
import { useEffect, useState } from 'react';
import { getAllStaffApi } from '../service/api.service';



const StaffPage = () => {
    const [listStaff , setStaffList] = useState([]);

    useEffect(()=> {
        loadingData();
    } , [])

    const columns = [
    {
        title: 'ID',
        // dataIndex: 'id',
        key: 'id',
        render: (_, record) => <a>{record.id}</a>,
    },
    {
        title: 'Tên Nhân Viên',
        dataIndex: 'name',
        key: 'name',
        // width : 200
    },
    {
        title: 'Số Điện Thoại',
        dataIndex: 'mobile',
        key : 'mobile',
        // width : 190
    },
    {
        title : 'Tên Đăng Nhập',
        dataIndex : 'username',
        key : 'username'
    },
    {
        title: 'Hình Ảnh',
        // dataIndex: 'image',
        key: 'image',
        width: 150,
        render: (_ , record) => (
            <img style={{width : '100%'}} src={import.meta.env.VITE_BACKEND_URL + `/api/v1/admin/image-product/${record.id}?t=` + Date.now() } alt="" />
        )
    },
    {
        title : 'Trạng Thái',
        key : 'is_active',
        render :  (_, record) => {
            {record.is_active == 1 ? <Badge style={{backgroundColor : '#52c41a'}}>Đang Hoạt Động</Badge> : <Badge style={{backgroundColor : '#f5222d'}}>Không Hoạt Động</Badge> }
        }

    },
    {
        title: 'Các Tác Vụ',
        key: 'action',
        // dataIndex: 'action',
        render: (_, record) => (
                
        <Flex gap='small'>
            {/* {console.log()}    */}
            <Button color="cyan"  variant="solid">
                Sửa
            </Button>
              <Popconfirm
                title="Xóa danh mục"
                description="Bạn có chắc muốn xóa chứ !!!"
                // onConfirm={() => confirm(record.id)}
                // onCancel={cancel}
                okText="Đồng Ý"
                cancelText="Hủy"
            >
            <Button color="danger"  variant="solid">
                Xóa
            </Button>
            </Popconfirm>

        </Flex>
      
        ),
        },
    ];

    // call api
    const loadingData =  async () => {
        const rs = await getAllStaffApi();
        setStaffList(rs.data);
    }

    return (
        <>
        <Flex style={{marginBottom : '20px'}} justify={'space-between'} align='center'>
            <h1 >Quản Lý Nhân Viên</h1>
            <Button type='primary' >Thêm Nhân Viên</Button>
        </Flex>
        
        
        <Table columns={columns} rowKey={'id'} dataSource={listStaff} scroll={{ x: 'max-content' }} pagination={{
        pageSize: 10, // Giới hạn 10 dòng mỗi trang
        }}/>
        </>
    )
}

export default StaffPage