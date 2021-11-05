import rootApi from '../root';

const login = (email, password) =>
  rootApi.post('/users/login', {
    email,
    password,
  });

export default login;
