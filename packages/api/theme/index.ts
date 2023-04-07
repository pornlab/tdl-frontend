import axios from "axios";
import {CreateParams, Theme, Themes} from "./interfaces";
import { BaseService } from "../base/BaseService";

export class ThemeService extends BaseService {
    private readonly url: string = `${this.baseUrl}/theme`;

    public get = (id: number): Promise<Theme> =>
        axios.get(`${this.url}/${id}`);
    
    public getList = (params?): Promise<Themes> =>
        this.http.get(`${this.url}/getList`, { params })
            .then(res => res.data)

    public create = (params: CreateParams) =>
        this.http.post(`${this.url}/create`, params)
}
