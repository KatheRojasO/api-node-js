import { axiosInstance } from '../helpers/axios-config';

export const getUser = () => {
    return axiosInstance.get('user', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const createUser = (data) => {
    return axiosInstance.post('user', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const editUser = (userId, data) => {
    return axiosInstance.patch(`user/${userId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const getUserById = (userId, data) => {
    return axiosInstance.get(`user/${userId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}