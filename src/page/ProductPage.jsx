import { Space, Table, Tag , Flex, Button  , message, Popconfirm , Drawer  } from 'antd';
import { useEffect, useState } from 'react';
import { deleteProductApi, findProductApi, getAllBrandApi, getAllCategory, getProductApi } from '../service/api.service';
import ModalAddProduct from '../component/product/ModalAdd';
import ProductDetail from '../component/product/DrawerProduct';
import ModalEditProduct from '../component/product/ModalEdit';
// import { Button,  } from 'antd';

const ProductPage = () => {

    // use State 
    const [listProduct , setProductList] = useState([]);
    const [isModalAddProductOpen , setModalAddProductOpen] = useState(false);
    const [isModalEditProductOpen , setModalEditProductOpen] = useState(false);
    const [listBrand , setListBrand] = useState([]);
    const [listCategory , setListCategory] = useState([]);
    const [open, setOpen] = useState(false); // để mở drawer
    const [productDetail , setProductDetail] = useState(null);
    // const []

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setProductDetail(null);
        setOpen(false);
    };

    useEffect(() => {
        // console.log(listProduct);
        loadingData();
        
    } , [])

    const confirm = async e => {
        const rs = await deleteProductApi(e);
        if(rs.status == 201) {
            message.success(rs.data.message);
            loadingData();
        }
        else {
            message.error(rs.data.message);
        }
       

    };

    const cancel = e => {
        // console.log(e);
        message.success('Cảm ơn bạn đã lựa chọn');
    };

    // call api

    const loadingData = async () => {
        const rs = await getProductApi();
        const rs1 = await getAllCategory();
        const rs2 = await getAllBrandApi();
        setProductList(rs.data);
        setListBrand(rs2.data);
        setListCategory(rs1.data);
    }      


    // open modal edit
    const handleCancleModalAdd = () => {
        setModalAddProductOpen(false);
    }


    const handleCancleModalEdit = () => {
        setModalEditProductOpen(false);
        setProductDetail(null);

    }
    


    const columns = [
    {
        title: 'ID',
        // dataIndex: 'id',
        key: 'id',
        render: (_, record) => <a href='javascript:void(0)' onClick={async () => {
            const pro = await findProductApi(record.id);
            setProductDetail(pro.data);
            // console.log(pro.data);
            // console.log(productDetail);
            showDrawer()    
        }}>{record.id}</a>,
    },
    {
        title: 'Tên Sản Phẩm',
        dataIndex: 'product_name',
        key: 'product_name',
        width : 200
    },
    {
        title: 'Tên Danh Mục',
        dataIndex: 'name_category',
        key : 'name_category',
        width : 190
    },
    {
        title : 'Tên Thương Hiệu',
        dataIndex : 'name_brand',
        key : 'name_brand'
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
        title: 'Mô Tả',
        // dataIndex: 'description',
        key: 'description',
        render: (_ , record) => (
            <>
                <div dangerouslySetInnerHTML={{ __html: record.description }} />
            </>
        )
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
                const pro = await findProductApi(record.id);
                setModalEditProductOpen(true);
                setProductDetail(pro.data);
                }}  variant="solid">
                Sửa
            </Button>
              <Popconfirm
                title="Xóa danh mục"
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

    return (
        <>
        <Flex style={{marginBottom : '20px'}} justify={'space-between'} align='center'>
            <h1 >Quản Lý Sản Phẩm</h1>
            <Button type='primary' onClick={() => setModalAddProductOpen(true)} >Thêm Sản Phẩm</Button>
        </Flex>
        
        
        <Table columns={columns} rowKey={'id'} dataSource={listProduct} scroll={{ x: 'max-content' }} pagination={{
        pageSize: 10, // Giới hạn 10 dòng mỗi trang
        }}/>

        <ModalAddProduct listBrand={listBrand} listCategory={listCategory} isModalAddProductOpen={isModalAddProductOpen} loadingData={loadingData} handleCancleModalAdd={handleCancleModalAdd} />

        <ModalEditProduct isModalEditProductOpen={isModalEditProductOpen}  handleCancleModalEdit={handleCancleModalEdit} loadingData={loadingData} listBrand={listBrand} listCategory={listCategory} productDetail={productDetail} />

        <ProductDetail onClose={onClose} open={open} productDetail={productDetail} />
        
        </>
    )
}


export default ProductPage