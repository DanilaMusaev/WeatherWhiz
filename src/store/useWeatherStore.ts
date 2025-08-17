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

            setCurrWeatherData: (data) => {
                set({
                    current: data.current ?? null,
                });
            },

            setForecastData: (data) => {
                set({
                    forecast: data.forecast ?? null,
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

            setLoading: (loading) => {
                set({ isLoading: loading });
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
