import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY':'cb39fae7-bd72-4a3d-9db8-d2a2516d4811'
    },
    data:{}
})

export const userApi = {
    getUsers(pageSizeUsers:number,currentPage:number) {
       return instance.get(`users?count=${pageSizeUsers}&page=${currentPage}`)
            .then(response =>  response.data)
    },
    setPage(pageSizeUsers:number,page:number){
        return instance.get(`users?count=${pageSizeUsers}&page=${page}`)
            .then(response => response.data)
    },
    follow(id:string){
        return  instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id:string){
        return  instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

}
export const headerApi = {
    AuthUser(){
       return  instance.get('auth/me')
           .then(response => response.data)
    }
}

export const profileApi = {
    setProfileUser(params:string){
       return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params}`)
            .then(response => {
                return  response.data
            })
    }

}





