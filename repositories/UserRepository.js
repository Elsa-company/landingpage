import Repository, {
    baseUrl
} from './Repository';
import Cookie from 'js-cookie';

class UserRepository {
    login(values) {
        const res = Repository.post(`${baseUrl}/auth/login`, values)
        return res;
    }

    async register(values) {
        const reponse = await Repository.post(`${baseUrl}/users/register`, values)
        .then((response) => {
            return response;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
        
    }

    async getUser(userId, token) {
       
        const response = await Repository.get(`${baseUrl}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.data.status == 200){
            return response.data.data
        } else {
            return null
        }
        
    }

    updateUser({payload}) { 
        const res = Repository.post(`${baseUrl}/users/${payload.userId}`, payload.values, {
            headers: {
                'Authorization': `Bearer ${payload.token}`,
            }
        })
        return res
        
    }
}

export default new UserRepository();