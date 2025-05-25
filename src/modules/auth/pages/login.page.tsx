import React, { useState } from 'react';
import { AuthService } from '../services/auth.service';
import { Link } from 'react-router-dom';
import * as styles from './login.styles';
import eyeIcon from '~assets/icon-eye-opened.svg?url';
import closeEyeIcon from '~assets/icon-eye-closed.svg?url';
import closeIcon from '~assets/icon-close.svg?url';

interface LoginModalProps {
	onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleChange =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setter(e.target.value);

	const toggleShowPassword = () => setShowPassword((prev) => !prev);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setSuccess(false);

		try {
			const { accessToken } = await AuthService.login(email, password);
			localStorage.setItem('accessToken', accessToken);
			setSuccess(true);

			setTimeout(onClose, 1500); // закрытие после успешного логина
		} catch (err: any) {
			const errMsg =
				err.response?.data?.error || 'Invalid email or password';
			setError(errMsg);
			console.error('Login error:', err.response?.data || err.message);
		}
	};

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={onClose}>
					<img src={closeIcon} alt="Close" />
				</button>

				<form onSubmit={handleSubmit}>
					<h2 className={styles.title}>LOG IN</h2>
					<p className={styles.subtitle}>Welcome back home!</p>

					<div className={styles.formFieldsWrapper}>
						<label className={styles.label}>Email</label>
						<input
							type="email"
							placeholder="Enter your email"
							className={styles.input}
							value={email}
							onChange={handleChange(setEmail)}
							required
						/>

						<label className={styles.label}>Password</label>
						<div className={styles.passwordWrapper}>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter your password"
								className={styles.input}
								value={password}
								onChange={handleChange(setPassword)}
								required
							/>
							<img
								src={showPassword ? eyeIcon : closeEyeIcon}
								alt={
									showPassword
										? 'Hide password'
										: 'Show password'
								}
								width="24"
								height="24"
								className={styles.eyeIcon}
								onClick={toggleShowPassword}
							/>
						</div>
					</div>

					{error && <p className={styles.error}>{error}</p>}
					{success && (
						<p className={styles.success}>Login successful!</p>
					)}

					<button type="submit" className={styles.loginButton}>
						Log In
					</button>

					<p className={styles.footer}>
						Don’t have an account yet?{' '}
						<Link
							to="/registration"
							className={styles.link}
							onClick={onClose}
						>
							Create account
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginModal;
