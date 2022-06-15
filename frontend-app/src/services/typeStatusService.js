import { axiosInstance } from '../helpers/axios-config';

//localhost:3000/api/v1/deviceType
export const getDeviceType = () => {
    return axiosInstance.get('deviceType', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const createDeviceType = (data) => {
    return axiosInstance.post('deviceType', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const editDeviceType = (deviceTypeId, data) => {
    return axiosInstance.put(`deviceType/${deviceTypeId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}