import types from '../types';

const initialState = { loading: true, data: null };

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USERS_START:
      return { ...state, loading: true };

    case types.GET_USERS_SUCCESS:
      return { data: payload, loading: false };

    case types.POST_USER_SUCCESS:
      return { data: [...state.data, payload], loading: false };

    case types.DELETE_USER_SUCCESS:
      return { data: payload, loading: false };

    case types.PUT_USER_SUCCESS:
      return {
        data: state.data.map((user) =>
          user.id === payload.id ? payload : user
        ),
        loading: false,
      };

    case types.GET_USERS_ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default users;
