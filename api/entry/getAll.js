import rootApi from '../root';

const getAll = (token, { skip, limit }) => {
  return rootApi.get('/entries', {
    params: {
      skip,
      limit,
    },
    headers: {
      'x-auth-token': token,
    },
  });
};

export default getAll;
