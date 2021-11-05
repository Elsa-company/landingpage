import register from '../thunks/register';
import STATUS from '../../../../constant/status';

const registerExtraReducers = {
  [register.pending]: (state) => {
    state.status = STATUS.LOADING;
  },
  [register.fulfilled]: (state, action) => {

  },
  [register.rejected]: (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.error;
  },
};

export default registerExtraReducers;
