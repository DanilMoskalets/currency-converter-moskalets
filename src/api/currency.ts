import {LatestRateResponse} from '../types/apiTypes';
import {instance} from './instance';

const currencyApi = {
    getLatestRate: async (from: string, to: string) => {
        const response = await instance.get<LatestRateResponse>(
            `latest?symbol=${from}/${to}&access_key=${process.env.REACT_APP_API_KEY}`
        );

        return response.data;
    },
};

export default currencyApi;
