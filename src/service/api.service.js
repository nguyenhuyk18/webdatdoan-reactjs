
import axios from './api.setting';
// CÁC DỮ LIỆU TRUYỀN VÀO ĐỂ UPDATE SAVE ĐỀU Ở DẠNG JSON phải stringtify nó lại !!!
// Category
const getAllCategory = async () => {
    const backendURL = '/api/v1/admin/category';
    const rs = await axios.get(backendURL);
    // console.log(rs)
    return rs;
}


const saveCategoryApi = async (data) => {
    const backendURL = '/api/v1/admin/category';
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const rs = await axios.post(backendURL, data, config);
    return rs;
}

const updateCategoryApi = async (data) => {
    const backendURL = '/api/v1/admin/category';
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const rs = await axios.put(backendURL, data, config);
    return rs;
}

const deleteCategoryApi = async (id) => {
    const backendURL = `/api/v1/admin/category/${id}`;
    const rs = await axios.delete(backendURL);
    return rs;
}

// Brand
const getAllBrandApi = async () => {
    const backendURL = 'api/v1/admin/brand';
    const rs = await axios.get(backendURL);
    return rs;
}

const saveBrandApi = async (data) => {
    const backendURL = 'api/v1/admin/brand';
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rs = await axios.post(backendURL, data, config);
    return rs;
}


const updateBrandApi = async (data) => {
    const backendURL = 'api/v1/admin/brand';

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const rs = await axios.put(backendURL, data, config);
    return rs
}

const deleteBrandApi = async (id) => {
    const backendURL = `api/v1/admin/brand/${id}`;
    const rs = await axios.delete(backendURL);
    return rs;
}



// product
// getAll Product
const getProductApi = async () => {
    const backendURL = '/api/v1/admin/product';
    const rs = await axios.get(backendURL);
    return rs;
}

// find Product
const findProductApi = async (id) => {
    const backendURL = `/api/v1/admin/product/${id}`;
    const rs = await axios.get(backendURL);
    return rs;
}


// save product
const saveProductApi = async (data) => {
    const backendURL = '/api/v1/admin/product';
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const rs = await axios.post(backendURL, data, config);
    return rs;
}

// delete product 
const deleteProductApi = async (id) => {
    const backendURL = `/api/v1/admin/product/${id}`;
    const rs = await axios.delete(backendURL);
    return rs;
}

// edit product
const updateProductApi = async (data) => {
    const backendURL = `/api/v1/admin/product`;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const rs = await axios.put(backendURL, data, config);
    return rs;
}


// staff
// get all staff
const getAllStaffApi = async () => {
    const backendURL = '/api/v1/admin/staff';
    const rs = await axios.get(backendURL);
    return rs;
}


// find staff
const findStaffApiByID = async (id) => {
    const backendURL = `/api/v1/admin/staff/${id}`;
    const rs = await axios.get(backendURL);
    return rs;
}

// lưu staff 
const saveStaffApi = async (data) => {
    const backendURL = '/api/v1/admin/staff';
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rs = await axios.post(backendURL, data, config);
    return rs;
}

// xóa staff
const deleteStaffApi = async (id) => {
    const backendURL = `/api/v1/admin/staff/${id}`;
    const rs = await axios.delete(backendURL);
    return rs
}

// lưu staff
const updateStaffApi = async (data) => {
    const backendURL = '/api/v1/admin/staff';
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const rs = await axios.put(backendURL, data, config);
    return rs;
}


// lấy hình ảnh của nhân viên 
// const getImageStaffApi = async (id) => {
//     const backendURL = `/api/v1/admin/avatar-staff/${id}`;
//     const rs = await axios.get(backendURL);
//     return rs;
// }

export { getAllCategory, saveCategoryApi, updateCategoryApi, deleteCategoryApi, getAllBrandApi, saveBrandApi, updateBrandApi, deleteBrandApi, getProductApi, findProductApi, saveProductApi, deleteProductApi, updateProductApi, getAllStaffApi, findStaffApiByID, saveStaffApi, deleteStaffApi, updateStaffApi, getImageStaffApi }