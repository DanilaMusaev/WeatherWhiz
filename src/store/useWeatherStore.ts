import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { WeatherStore } from './types';

export const useWeatherStore = create<WeatherStore>()(
    persist(
        (set) => ({
            city: 'Moscow',
            unit: 'metric',
            current: null,
            forecast: null,
            isLoading: false,
            error: null,

            setWeatherData: (data) => {
                set({
                    current: data.current,
                    forecast: data.forecast,
                    city: data.city,
                    isLoading: false,
                    error: null,
                });
            },

            setCity: (city) => {
                set({ city });
            },

            setUnit: (unit) => {
                set({ unit });
            },

            setError: (error) => {
                set({ error, isLoading: false });
            },
        }),
        {
            name: 'weather-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                city: state.city,
                unit: state.unit,
            }),
        }
    )
);
