import {
    createInstance, CustomAxiosInstance,
    setHeadersForInstance,
    setInterceptorForInstance,
} from './axiosInstanceProxy';
// import { getCookieKey } from '../helpers/getCookieKey';
// import { get } from 'js-cookie';
// import env from 'configs/environment';

const config = {
    baseURL: 'http://10.0.1.123:3000',
};

const instance: CustomAxiosInstance = createInstance(config);

export const setInterceptors = (axiosResolveFn, axiosRejectFn) =>
    setInterceptorForInstance(axiosResolveFn, axiosRejectFn, instance);

export const setToken = (token: string) =>
    setHeadersForInstance(
        {
            Authorization: `Bearer ${token}`,
        },
        instance,
    );

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBiOWM1NzQxZThlYTI0NDFmOWY0YiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTY4MDk0MjgzNiwiZXhwIjoxNjgxMDI5MjM2fQ.qCFt-BaAI-iWOPMv5o5g93isyRZ2el6DAmaDIbx8O7E';
// setToken(get(getCookieKey()));
setToken(token);

export default <T>(Service): T => new Service({ instance }) as T;
