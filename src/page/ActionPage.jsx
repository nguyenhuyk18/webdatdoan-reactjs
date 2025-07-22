import { Space, Table, Tag , Flex, Button  , message, Popconfirm  } from 'antd';
import { useEffect, useState } from 'react';
import { getActionApi } from '../service/api.service';


const ActionPage = () => {
    const [listAction , setListAction] = useState([]);
    
    useEffect(() => {
        loadingData()
    } , []);


    const columns = [

    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tên Tác Vụ',
        dataIndex: 'name_action',
        key: 'name_action',
    },
    {
        title: 'Mô Tả',
        dataIndex: 'description',
        key: 'description'
    },

    ];


    // call api
    const loadingData = async () => {
        const rs = await getActionApi();
        setListAction(rs.data);
    }

    return (
        <>
        <Flex style={{marginBottom : '20px'}} justify={'space-between'} align='center'>
        <h1 >Quản Lý Tác Vụ</h1>
        {/* <Button type='primary' onClick={showModalCategory} >Thêm tác vụ</Button> */}
        </Flex>
        
        
        <Table columns={columns} rowKey={'id'} dataSource={listAction} scroll={{ x: 'max-content' }} pagination={{
        pageSize: 10, // Giới hạn 10 dòng mỗi trang
        }}/>
        </>
    )
}

export default ActionPage