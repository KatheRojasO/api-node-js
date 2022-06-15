import { axiosInstance } from '../helpers/axios-config';

export const getInventory = () => {
    return axiosInstance.get('inventory', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const createInventory = (data) => {
    return axiosInstance.post('inventory', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const editInventory = (inventoryId, data) => {
    return axiosInstance.patch(`inventory/${inventoryId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const getInventoryById = (inventoryId, data) => {
    return axiosInstance.get(`inventory/${inventoryId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}