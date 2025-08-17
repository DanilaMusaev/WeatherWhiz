import { createContext, useContext } from 'react';
import { ApiService } from '../api/apiService';
import MockClient from '../api/clients/MockClient';
import OpenWeatherMapClient from '../api/clients/OpenWeatherMapClient';

const apiService = new ApiService(MockClient);

const ApiContext = createContext<typeof apiService>(apiService);

export const ApiProvider = ({children}: {children: React.ReactNode}) => {
    return <ApiContext.Provider value={apiService}>
        {children}
    </ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);