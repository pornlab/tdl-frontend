import { CreateParams, Question, Questions } from "./interfaces";
import { BaseService } from "../base/BaseService";

export class QuestionService extends BaseService {
    private readonly url: string = `${this.baseUrl}/question`;

    public get = (id: string): Promise<Question> =>
        this.http.get(`${this.url}/get`, {params: { _id: id }})
            .then(res => res.data)

    public getList = (params?): Promise<Questions> =>
        this.http.get(`${this.url}/getList`, { params })
            .then(res => res.data)

    public create = (params: CreateParams) =>
        this.http.post(`${this.url}/create`, params)
}
