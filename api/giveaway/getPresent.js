import rootApi from '../root';

const getPresent = async () => {
  return await rootApi.get('/giveaways/present/get');
}


export default getPresent;
