import axios from "axios";
import {FormDataTypeLogin} from "../components/Login";

type AuthorizeUserResponseType = {
    data: {
        userId: number
    },
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}
type DeleteLoginMe = {
    resultCode: number
    messages: Array<string>
        data: {}
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '523f3afc-9394-4d5e-8a49-5b44c559d911'
    },
    data: {}
})

export const userApi = {
    getUsers(pageSizeUsers: number, currentPage: number) {
        return instance.get(`users?count=${pageSizeUsers}&page=${currentPage}`)
            .then(response => response.data)
    },
    setPage(pageSizeUsers: number, page: number) {
        return instance.get(`users?count=${pageSizeUsers}&page=${page}`)
            .then(response => response.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

}

export const headerApi = {
    AuthUser() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(dataForm: FormDataTypeLogin) {
        return instance.post<AuthorizeUserResponseType>('/auth/login', {...dataForm})
            .then(resolve => resolve.data)
    },
    logOut() {
        return instance.delete<DeleteLoginMe>('/auth/login')
            .then(response => response.data)
    }

}

export const profileApi = {
    setProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatusUser(userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatusUser(status: string) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data)
    }

}





