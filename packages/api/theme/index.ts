import axios from "axios";
import {CreateParams, Theme, Themes} from "./interfaces";
import { BaseService } from "../base/BaseService";

export class ThemeService extends BaseService {
    private readonly url: string = `${this.baseUrl}/theme`;

    public get = (id: string): Promise<Theme> =>
        this.http.get(`${this.url}/get`, {params: {_id: id}})
            .then(res => res.data)
    
    public getList = (params?): Promise<Themes> =>
        this.http.get(`${this.url}/getList`, { params })
            .then(res => res.data)

    public create = (params: CreateParams) =>
        this.http.post(`${this.url}/create`, params)
}
