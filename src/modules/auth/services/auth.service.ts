import { HttpFactoryService } from '~shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '~shared/services/http-auth.service';
import { Tokens } from '../types/tokens.type';

export class AuthService {
	private static authHttpService: EnhancedWithAuthHttpService =
		new HttpFactoryService().createAuthHttpService();

	static async login(email: string, password: string): Promise<Tokens> {
		const data = { email, password };
		return this.authHttpService.post<Tokens, typeof data>(
			'auth/admin/signin',
			data,
		);
	}

	static async refreshTokens(refreshToken: string): Promise<Tokens> {
		const config = {
			headers: {
				Authorization: `Bearer ${refreshToken}`,
			},
		};

		return this.authHttpService.get<Tokens>('auth/refresh', config);
	}

	static async logout(accessToken: string): Promise<{ message: string }> {
		const config = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		};

		return this.authHttpService.get<{ message: string }>(
			'auth/logout',
			config,
		);
	}
}

export default AuthService;
