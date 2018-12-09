import { ACTIONS } from "./actions";

const initialState = {
    data: null,
    error: null,
    isFetching: false
};

export const bensin = (state = initialState, action = {}) => {
    const {payload, type} = action;
    switch (type) {
        case ACTIONS.BENSIN_FETCH:
            return {
                ...state,
                isFetching: true
            };
        case ACTIONS.BENSIN_FETCH_SUCCESS:
            return {
                ...state,
                data: payload,
                isFetching: false
            };
        case ACTIONS.BENSIN_FETCH_FAILED:
            return {
                ...state,
                error: payload,
                isFetching: false
            };
        default: {
            return {
                state
            };
        }
    }
};
