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
    return axiosInstance.put(`user/${userId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}