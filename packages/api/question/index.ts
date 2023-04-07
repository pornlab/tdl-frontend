import axios from "axios";
import { CreateParams, Question, Questions } from "./interfaces";
import { BaseService } from "../base/BaseService";

export class TestService extends BaseService {
    private readonly url: string = `${this.baseUrl}/question`;

    public get = (id: number): Promise<Question> =>
        axios.get(`${this.url}/${id}`);
    
    public getList = (params?): Promise<Questions> =>
        this.http.get(`${this.url}/getList`, { params })
            .then(res => res.data)

    public create = (params: CreateParams) =>
        this.http.post(`${this.url}/create`, params)
}
