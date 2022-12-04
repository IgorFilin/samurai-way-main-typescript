import axios from "axios";
import {FormDataTypeLogin} from "../components/Login/Login";
import {ProfileUserType} from "../redux/ProfileReducer";

//====Types========================================================
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

export type modelUpdateProfile = {
    userId: number
    aboutMe: string | null
    lookingForAJob: boolean
    LookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

}
//=================================================================

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '523f3afc-9394-4d5e-8a49-5b44c559d911'
    },
    data: {}
})

export const userApi = {
    getUsers(pageSizeUsers: number, currentPage: number,term?:string,friend?:boolean | null) {
        return instance.get(`users`,{params:{
                count: pageSizeUsers,
                page : currentPage,
                term,
                friend
            }})
            .then(response => response.data)
    },
    setPage(pageSizeUsers: number, page: number,friend:boolean | null) {
        return instance.get(`users`,{params:{
                count: pageSizeUsers,
                page : page,
                friend:friend
            }})
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
    authUser() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(dataForm: FormDataTypeLogin) {
        return instance.post<AuthorizeUserResponseType>('/auth/login', {...dataForm})

    },
    logOut() {
        return instance.delete<DeleteLoginMe>('/auth/login')
    },
    getCapcha(){
        return instance.get<{url:string}>('/security/get-captcha-url')
    }

}

export const profileApi = {
    setProfileUser(userId: string) {
        return instance.get<ProfileUserType>(`profile/${userId}`)
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
    },
    uploadPhoto(file: any) {
        const form = new FormData()
        form.append('image', file)
        console.log(form.getAll('image'))
        return instance.put('/profile/photo', form, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    updateProfile(modelProfile: modelUpdateProfile) {
        return instance.put<DeleteLoginMe>('/profile', modelProfile)
    }

}





