import rootApi from '../root';

const postForm = (data) => {
  return rootApi.post('/partners/become-partner', data);
}


export default postForm;
