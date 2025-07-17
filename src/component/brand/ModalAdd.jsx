import { Modal , Form , Input, Button , notification  } from "antd";
import { saveBrandApi } from "../../service/api.service";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const ModalAddBrand = (props) => {

    const [form] = Form.useForm();

    const { isModalAddOpen , loadingData , handleCancelAdd } = props;

    const [api, contextHolder] = notification.useNotification();

    const onFinish = async (values) => {
        const dataJson = JSON.stringify(values);
        const rs = await saveBrandApi(dataJson);

        if(rs.status == 201) {
            openNotificationSuccess(rs.data.message);
            loadingData();
            handleCancelAdd();
            form.resetFields();
            
        }
        else {
            openNotificationError(rs.data.message);
            form.resetFields();
            handleCancelAdd();
        }
    }

    const openNotificationSuccess = (descrip) => {
        api.open({
        message: 'Thêm Thương Hiệu Thành Công',
        description: descrip,
        icon: < CheckOutlined  />,
        });
    };


    const openNotificationError = (descrip) => {
        api.open({
        message: 'Thêm Thương Hiệu Thất Bại',
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
        title="Thêm Thương Hiệu"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalAddOpen}
        // onOk={handleAddOk}
        onCancel={handleCancelAdd}
      >
        <Form
            form = {form}
            // {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ paddingTop: '20px' }}
            // validateMessages={validateMessages}
        >
            <Form.Item name='name_brand' label="Tên Thương Hiệu" rules={[{ required: true , message: 'Vui lòng nhập tên thương hiệu' }]}>
                <Input />
            </Form.Item>
            <Form.Item label={null} style={{marginTop: '20px'}}>
                <Button type="primary" htmlType="submit">
                    Lưu
                </Button>
            </Form.Item>
        </Form>
        </Modal>
        </>
    )
}

export default ModalAddBrand