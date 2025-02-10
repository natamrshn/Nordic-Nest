import * as React from 'react';

import {
	box,
	container,
	form,
	inputContainer,
	loginButton,
} from './login.styles';
import Button from '~shared/components/button/button.component';
import { AuthService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { LoginData } from '../types';
import { ROUTER_KEYS } from '~shared/keys';
import Input from '~shared/components/input/input.component';
import useAuthStore from '~shared/stores/auth.store';

export const LoginPage = (): React.ReactNode => {
	const [error, setError] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const { setTokens, setAuth } = useAuthStore();
	const navigate = useNavigate();

	// const loginMutation = useMutation({
	// 	mutationFn: ({ email, password }: LoginData) =>
	// 		AuthService.login(email, password),
	// 	onSuccess: (data) => {
	// 		if (data) {
	// 			setTokens(data.accessToken, data.refreshToken);
	// 			setAuth(true);
	// 			navigate(ROUTER_KEYS.PRODUCTS);
	// 		}
	// 	},
	// 	onError: (error) => {
	// 		console.error('Login failed:', error);
	// 		setError('Incorrect email or password');
	// 	},
	// });

	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
	// 	event.preventDefault();
	// 	try {
	// 		loginMutation.mutate({ email, password });
	// 	} catch (error: unknown) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className={box}>
			<div className={container}>
				<form className={form}>
					<div className={inputContainer}>
						<label>Email</label>
						<Input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Password</label>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							error={error ? error : ''}
						/>
					</div>

					<Button text="Login" extraButtonStyles={loginButton} />
				</form>
			</div>
		</div>
	);
};
