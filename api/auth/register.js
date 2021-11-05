import rootApi from '../root';

const register = (userdata) =>
  rootApi.post('/users/register', userdata);

export default register;
