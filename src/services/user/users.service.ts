import axiosClient from "../../helpers/apiClient";


class UsersService {
    async getUser() {
        const response = await axiosClient.get('/users/2');
        return response;
    }
    async updateAccount({ name, job }: { name: string, job: string }) {
        const response = await axiosClient.patch('/users/2', { name, job });
        return response;
    }
}

const userService = new UsersService();

export default userService;