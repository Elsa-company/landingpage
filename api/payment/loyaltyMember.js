import rootApi from '../root';

const loyaltyMember = (paymentdata, token) => {
  return rootApi.post('/payments/stripe/loyalty-member', paymentdata, {
    headers: {
      'x-auth-token': token
    }
  });
}


export default loyaltyMember;
