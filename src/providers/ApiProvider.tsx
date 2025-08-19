import { createContext, useContext, useMemo } from 'react';
import { ApiService } from '../api/apiService';
import MockClient from '../api/clients/MockClient';
import OpenWeatherMapClient from '../api/clients/OpenWeatherMapClient';

interface ApiContextType {
    apiService: ApiService;
}

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    // Для корректной работы Fast Refresh
    const apiService = useMemo(() => new ApiService(MockClient), []);
    const value = useMemo(() => ({ apiService }), [apiService]);

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// Мда, Fast Refresh корректно заработал, только при CamelCase названии экспортируемой функции
export function UseApi() {
    // Тоже для корректной работы Fast Refresh
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error(`useApi must be used within ApiProvider`);
    }
    return context.apiService;
};
