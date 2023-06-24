import {
    createInstance, CustomAxiosInstance,
    setHeadersForInstance,
    setInterceptorForInstance,
} from './axiosInstanceProxy';
// import { getCookieKey } from '../helpers/getCookieKey';
// import { get } from 'js-cookie';
// import env from 'configs/environment';

const config = {
    baseURL: 'http://192.168.110.247:3000',
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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBiOWM1NzQxZThlYTI0NDFmOWY0YiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTY4Mjc3MjI0MCwiZXhwIjoxNjgyODU4NjQwfQ.gfMy23r3X3123mX1ltHbUabe6wExiKNmcywyFJvnkqM';
// setToken(get(getCookieKey()));
setToken(token);

export default <T>(Service): T => new Service({ instance }) as T;
