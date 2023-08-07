import httpService from '../services/httpService';
import handleHttpError from './errorHandler';

export const githubService = {
    getUserByName,
    httpList
};

export function getUserByName(username, config = {}) {
    return httpService.get(`/users/${username}`, config)
        .then(response => response.data)
        .catch(handleHttpError);
}


export function httpList(url, config = {}) {
    return httpService.get(url, config)
        .then((response) => response.data)
        .catch(handleHttpError);
};
