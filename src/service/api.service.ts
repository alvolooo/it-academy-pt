import {ApiUsers} from './api/Api'
import { http as httpInstance } from './api/config';
import {AxiosInstance} from "axios";


interface ApiServiceInterface {
    [key: string]: any;
}

class ApiService implements ApiServiceInterface {
    private users: ApiUsers

    constructor(http: AxiosInstance) {
        this.users = new ApiUsers(http, 'users')
    }
}

export const api = new ApiService(httpInstance);