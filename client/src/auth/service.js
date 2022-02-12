import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
}
    signup = (email, avatar,username, password) => {
        return this.service.post('/signup', 
        { email, username, password, avatar })
        .then(response => response.data);
    };
}
const authService = new AuthService();

export default authService;
