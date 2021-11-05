import rootApi from '../root';

const giveawayPayment = (paymentdata, token) => {
  return rootApi.post('/payments/package', paymentdata, {
    headers: {
      'x-auth-token': token
    }
  });
}


export default giveawayPayment;
