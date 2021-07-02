import axios from "axios";

const USERS_REST_API_URL="http://localhost:8080/api/users";

class UserServices{
    getUsers(){
       return axios.get(USERS_REST_API_URL);
    }
}

export default new UserServices();