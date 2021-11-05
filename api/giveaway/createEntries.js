import rootApi from '../root';

const createEntries = (paymentdata, token) => {
  return rootApi.post('/giveaways/create-entries', paymentdata, {
    headers: {
      'x-auth-token': token
    }
  });
}


export default createEntries;
