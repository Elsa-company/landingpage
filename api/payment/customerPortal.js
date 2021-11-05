import rootApi from '../root';

const customerPortal = (token) => {
  return rootApi.get('/payments/stripe/create-session-customer-portal', {
    headers: {
      'x-auth-token': token
    }
  });
}


export default customerPortal;
