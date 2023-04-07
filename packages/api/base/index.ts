import axios from "axios";
import {Configuration} from "./interfaces";

export class BaseService {
    public baseURL: string;
    public instance;

    constructor({instance}) {
        this.baseURL = instance.config.baseURL + '/api';
        this.createAxiosInstance(instance.config);
    }

    private createAxiosInstance(config: Configuration) {
        this.instance = axios.create(config)
    }
}