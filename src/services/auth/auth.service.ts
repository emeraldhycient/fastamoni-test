import axiosClient from "../../helpers/apiClient";


class authService {
    async login({email,password}:{email:string,password:string}) {
        const response = await axiosClient.post('/login', {email,password});
        return response;
    }

    async createAccount({ email, password }: { email: string, password: string }) {
        const response = await axiosClient.post('/register', { email, password });
        return response;
    }
}