import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthStoreState = {
	accessToken: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
	setTokens: (accessToken: string, refreshToken: string) => void;
	logout: () => void;
	setAuth: (status: boolean) => void;
};

const useAuthStore = create<AuthStoreState>()(
	persist(
		(set) => ({
			accessToken: null,
			refreshToken: null,
			isAuthenticated: false,
			setAuth: (status: boolean) => set({ isAuthenticated: status }),
			setTokens: (accessToken, refreshToken) =>
				set({ accessToken, refreshToken }),
			logout: () =>
				set({
					accessToken: null,
					refreshToken: null,
					isAuthenticated: false,
				}),
		}),
		{
			name: 'auth-storage',
		},
	),
);

export default useAuthStore;
