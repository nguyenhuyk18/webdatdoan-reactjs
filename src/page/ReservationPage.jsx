import { Space, Table, Tag , Flex, Button  , message, Popconfirm , Drawer  } from 'antd';
import { useEffect, useState } from 'react';
import { findReservationApi, getAllStaffApi, getCustomerApi, getReservationApi, getTableApi } from '../service/api.service';
import ModalAddReservation from '../component/reservation/ModalAdd';
import ModalEditReservation from '../component/reservation/ModalEdit';
import ReservationDetail from '../component/reservation/DrawerReservation';


const ReservationPage = () => {
    const [open, setOpen] = useState(false); // để mở drawer
    const [ listReservation , setListReservation ] = useState([]);
    const [reservationDetail , setReservation] = useState(null);
    const [isModalAddOpen , setModalAddOpen] = useState(false);
    const [isModalEditOpen , setModalEditOpen ] = useState(false);
    const [listStaff  , setListStaff] = useState([]);
    const [listCustomer , setListCustomer] = useState([]);
    const [listTable  , setListTable] = useState([]);

    // const []
 
    useEffect(() => {
        loadingData();
    } , []);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        // setProductDetail(null);
        setOpen(false);
    };

    const confirm = async e => {
        message.success(rs.data.message);
        // const rs = await deleteProductApi(e);
        // if(rs.status == 201) {
        //     message.success(rs.data.message);
        //     loadingData();
        // }
        // else {
        //     message.error(rs.data.message);
        // }
    };

    const cancel = e => {
        // console.log(e);
        message.success('Cảm ơn bạn đã lựa chọn');
    };


    const columns = [
    {
        title: 'Mã Đặt Bàn',
        // dataIndex: 'id',
        key: 'id',
        render: (_, record) => <a onClick={async () => {
            await handleOpenDrawer(record.id);
        }} >{record.id}</a>,
    },
    {
        title: 'Ngày Đặt',
        dataIndex: 'reservation_date',
        key: 'reservation_date',
        // width : 200
    },
    {
        title: 'Yêu Cầu Kèm Theo',
        dataIndex: 'note',
        key : 'note',
        // width : 190
    },
    {
        title: 'Trạng Thái',
        // dataIndex: 'status',
        key : 'status',
        // width : 190
        render: (_ , record) => (
            record.status == 3 ?  <p>Đã Đến</p> : record.status == 2 ? <p>Đã Hủy</p> : record.status == 1 ? <p>Đã Đặt</p> : ''
        ),
    },
    {
        title: 'Các Tác Vụ',
        key: 'action',
        // dataIndex: 'action',
        render: (_, record) => (
                
        <Flex gap='small'>
            {/* {console.log()}    */}
            <Button color="cyan" onClick={async () => {
                // showModalEditCategory(record.id);
                const pro = await findReservationApi(record.id);
                setModalEditOpen(true);
                setReservation(pro.data);
                }}  variant="solid">
                Sửa
            </Button>
              <Popconfirm
                title="Xóa Sản Phẩm"
                description="Bạn có chắc muốn xóa chứ !!!"
                onConfirm={() => confirm(record.id)}
                onCancel={cancel}
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


    const loadingData = async () => {
        const rs = await getReservationApi();
        const rs1 = await getCustomerApi();
        const rs2 = await getAllStaffApi();
        const rs3 = await getTableApi();
        setListReservation(rs.data);
        setListCustomer(rs1.data);
        setListStaff(rs2.data);
        setListTable(rs3.data);
    }


    const handleCancleModalAdd = () => {
        setModalAddOpen(false);
    }


    const handleCancleModalEdit = () => {
        setModalEditOpen(false);
    }

    const handleOpenDrawer = async (id) => {
        const rs =  await findReservationApi(id);
        setReservation(rs.data);
        setOpen(true);
    }

    return (
        <>
        <Flex style={{marginBottom : '20px'}} justify={'space-between'} align='center'>
        <h1>Lịch Sử Đặt Bàn</h1>
        <Button type='primary' onClick={ () => {
            setModalAddOpen(true)
        }} >Thêm Đặt Bàn Mới</Button>
        </Flex>


        <Table columns={columns} rowKey={'id'} dataSource={listReservation} scroll={{ x: 'max-content' }} pagination={{
        pageSize: 10, // Giới hạn 10 dòng mỗi trang
        }}/>

 
        <ModalAddReservation isModalAddOpen={isModalAddOpen} handleCancleModalAdd={handleCancleModalAdd} loadingData={loadingData} listStaff={listStaff} listCustomer={listCustomer} listTable={listTable} />


        <ModalEditReservation reservationDetail={reservationDetail} loadingData={loadingData} isModalEditOpen={isModalEditOpen} handleCancleModalEdit={handleCancleModalEdit} listStaff={listStaff} listCustomer={listCustomer} listTable={listTable} />


        <ReservationDetail open={open} showDrawer={showDrawer} onClose={onClose} reservationDetail={reservationDetail}  />

        </>
    )
}

export default ReservationPage;