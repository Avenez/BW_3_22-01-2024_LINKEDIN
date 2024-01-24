import { SET_JOBS } from "../action/jobs";

const initialState = {
  jobs: null,
  isLoading: true,
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
