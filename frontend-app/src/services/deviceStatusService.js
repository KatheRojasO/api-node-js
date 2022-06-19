import { axiosInstance } from '../helpers/axios-config';

//localhost:3000/api/v1/deviceStatus
export const getDeviceStatus = () => {
    return axiosInstance.get('deviceStatus', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const createDeviceStatus = (data) => {
    return axiosInstance.post('deviceStatus', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const editDeviceStatus = (deviceStatusId, data) => {
    return axiosInstance.patch(`deviceStatus/${deviceStatusId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const getDeviceStatusById = (deviceStatusId, data) => {
    return axiosInstance.get(`deviceStatus/${deviceStatusId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}