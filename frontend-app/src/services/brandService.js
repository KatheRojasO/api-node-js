import { axiosInstance } from '../helpers/axios-config';

//localhost:3000/api/v1/deviceBrand
export const getDeviceBrand = () => {
    return axiosInstance.get('deviceBrand', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const createDeviceBrand = (data) => {
    return axiosInstance.post('deviceBrand', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const editDeviceBrand = (deviceBrandId, data) => {
    return axiosInstance.patch(`deviceBrand/${deviceBrandId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const getDeviceBrandById = (deviceBrandId, data) => {
    return axiosInstance.get(`deviceBrand/${deviceBrandId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}