import {  Drawer, Image } from 'antd';
import { useEffect } from 'react';

const ProductDetail = (props) => {
    const { productDetail , onClose , open } = props

    // console.log(productDetail);

    // const [product , setProduct ] = useState(null);

    // useEffect(() => {
    //     if(detailProduct) {

    //     }
    // } , [detailProduct]);


    return (
        <Drawer
        title="Thông tin sản phẩm chi tiết"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        <p style={{marginBottom: '20px'}}><b>Tên Sản Phẩm: </b> {productDetail?.product_name} </p>
        <p style={{marginBottom: '20px'}}><b>Tên Danh Mục: </b> {productDetail?.name_category} </p>
        <p style={{marginBottom: '20px'}}><b>Tên Thương Hiệu: </b> {productDetail?.name_brand} </p>
        <p style={{marginBottom: '20px'}}><b>Mô tả: </b> <div dangerouslySetInnerHTML={{ __html: productDetail?.description }} /> </p>
        <p style={{marginBottom: '20px'}}><b>Hình Ảnh: </b></p>
        <Image     
        width={200}
        src={import.meta.env.VITE_BACKEND_URL + `/api/v1/admin/image-product/${productDetail?.id}`} />
      </Drawer>
    )
}

export default ProductDetail;