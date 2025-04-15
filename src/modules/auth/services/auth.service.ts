import axios from 'axios';

const API_URL = 'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com';

interface RegisterData {
	email: string;
	password: string;
	repeatPassword: string;
	firstName: string;
	secondName: string;
}

interface RegisterResponse {
	accessToken: string;
	id: number;
	email: string;
	firstName: string;
	secondName: string;
}

export class AuthService {
	static async register(data: RegisterData): Promise<RegisterResponse> {
		try {
			const response = await axios.post<RegisterResponse>(
				`${API_URL}/auth/registration`,
				data,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			// Сохраняем токен в localStorage
			if (response.data.accessToken) {
				localStorage.setItem('accessToken', response.data.accessToken);
			}
			return response.data;
		} catch (error) {
			console.error(
				'Registration error:',
				error.response?.data || error.message,
			);
			throw error;
		}
	}

	static async login(
		email: string,
		password: string,
	): Promise<RegisterResponse> {
		try {
			const response = await axios.post<RegisterResponse>(
				`${API_URL}/auth/login`,
				{ email, password },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			// Сохраняем токен в localStorage
			if (response.data.accessToken) {
				localStorage.setItem('accessToken', response.data.accessToken);
			}
			return response.data;
		} catch (error) {
			console.error(
				'Login error:',
				error.response?.data || error.message,
			);
			throw error;
		}
	}
}
