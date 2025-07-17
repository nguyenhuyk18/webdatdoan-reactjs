import { Modal , Form , Input, Button , notification  } from "antd"
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { use, useEffect, useState } from "react";
import { updateCategoryApi } from "../../service/api.service";

const ModalEditCategory = (props) => {

    const [dataEdit, setDataEdit] = useState();
    const {loadingData , isModalEditOpen  , handleEditCancle , dataEditCategory } = props;
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    

    useEffect(() => {
        if(dataEditCategory) {
            form.setFieldsValue({
                id : dataEditCategory.id,
                name_category: dataEditCategory.name_category,
            });
            setDataEdit(dataEdit)
        }
        else {
            form.resetFields();
            setDataEdit(null)
        }
    }, [dataEditCategory])

    // console.log(dataEdit)
    const onFinish = async (values) => {
        // console.log(values)
        const dataJson = JSON.stringify(values);

        const rs = await updateCategoryApi(dataJson);

        if(rs.status == 201) {
            openNotificationSuccess(rs.data.message);
            loadingData();
            handleEditCancle();
            form.resetFields();
        }
        else {
            openNotificationError(rs.data.message);
            handleEditCancle();
            form.resetFields();
        }
    }

    const openNotificationSuccess = (descrip) => {
        api.open({
            message: 'Cập Nhật Danh Mục',
            description: descrip,
            icon: <CheckOutlined />,
        });
    };


    const openNotificationError = (descrip) => {
        api.open({
            message: 'Cập Nhật Danh Mục',
            description: descrip,
            icon: <CloseOutlined /> ,
        });
    };

    return (
        <>
        
        {contextHolder}
        <Modal
        footer={false}
        // layout={layout}
        title="Thêm Danh Mục"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalEditOpen}
        // onOk={handleAddOk}
        onCancel={handleEditCancle}
        >
        <Form
            form = {form}
            name="nest-messages"
            onFinish={onFinish}
            style={{ paddingTop: '20px' }}
        >

        <Form.Item name='id'   label="Mã Danh Mục" rules={[{ required: true , message: 'Vui lòng nhập tên danh mục' }]}>
            <Input  disabled />
        </Form.Item>
        
        <Form.Item name='name_category'  label="Tên Danh Mục" rules={[{ required: true , message: 'Vui lòng nhập tên danh mục' }]}>
            <Input   />
        </Form.Item>
        <Form.Item label={null} style={{marginTop: '20px'}} >
            <Button type="primary" htmlType="submit">
                Lưu
            </Button>
        </Form.Item>
        </Form>
        </Modal>
        </>
    )
}

export default ModalEditCategory;