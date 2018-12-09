import { RSAA } from 'redux-api-middleware';

export const ACTIONS = {
    BENSIN_FETCH: 'BENSIN_FETCH',
    BENSIN_FETCH_SUCCESS: 'BENSIN_FETCH_SUCCESS',
    BENSIN_FETCH_FAILED: 'BENSIN_FETCH_FAILED'
};

export const fetchBensin = () => ({
    [RSAA]: {
        types: [
            ACTIONS.BENSIN_FETCH,
            ACTIONS.BENSIN_FETCH_SUCCESS,
            ACTIONS.BENSIN_FETCH_FAILED
        ],
        endpoint: 'https://apis.is/petrol',
        method: 'GET'
    }
});