import React, { useState } from 'react';
import { AuthService } from '../services/auth.service';
import * as styles from './registration.styles';
import { useNavigate } from 'react-router-dom'; // Для перенаправления
import { a } from '~shared/components/footer/footer.styles';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [agreeTerms, setAgreeTerms] = useState(false);
	const [subscribe, setSubscribe] = useState(false);
	const navigate = useNavigate(); // Для перенаправления

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setSuccess(false);

		// Валидация
		if (!email.includes('@') || !email.includes('.')) {
			setError('Invalid email');
			return;
		}
		if (password.length < 8) {
			setError('Password must be at least 8 characters');
			return;
		}
		if (password !== repeatPassword) {
			setError('Passwords do not match');
			return;
		}
		if (!firstName.trim() || !secondName.trim()) {
			setError('First name and second name are required');
			return;
		}

		try {
			const data = {
				email,
				password,
				repeatPassword,
				firstName,
				secondName,
			};
			console.log('Sending data:', data);
			await AuthService.register(data);
			setSuccess(true);
			// Перенаправляем на главную страницу или другую
			setTimeout(() => navigate('/'), 1000); // Задержка для показа сообщения
		} catch (err) {
			const errorMessage = err.response?.data?.error || 'Try again';
			setError(`Registration failed: ${errorMessage}`);
			console.error('Error details:', err.response?.data || err.message);
		}
	};

	return (
		<>
			<h2 className={styles.title}>CREATE AN ACCOUNT</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formFieldsWrapper}>
					<label className={styles.label}>First Name</label>
					<input
						type="text"
						placeholder="First Name"
						className={styles.input}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					<label className={styles.label}>Second Name</label>
					<input
						type="text"
						placeholder="Second Name"
						className={styles.input}
						value={secondName}
						onChange={(e) => setSecondName(e.target.value)}
						required
					/>
					<label className={styles.label}>Email</label>
					<input
						type="mail"
						placeholder="Email"
						className={styles.input}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label className={styles.label}>Password</label>
					<input
						type="password"
						placeholder="Password"
						className={styles.input}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label className={styles.label}>Repeat Password</label>
					<input
						type="password"
						placeholder="Repeat Password"
						className={styles.input}
						value={repeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
						required
					/>

					{/* Чекбоксы */}
					<label className={styles.checkboxLabel}>
						<input
							type="checkbox"
							checked={agreeTerms}
							onChange={() => setAgreeTerms(!agreeTerms)}
							style={{
								width: '24px',
								height: '24px',
								cursor: 'pointer',
							}}
						/>
						I want to receive special offers via email.
					</label>

					<label className={styles.checkboxLabel}>
						<input
							type="checkbox"
							checked={subscribe}
							onChange={() => setSubscribe(!subscribe)}
							style={{
								width: '24px',
								height: '24px',
								cursor: 'pointer',
              }}
              required
						/>
						I agree with the privacy policy
					</label>
				</div>

				{error && <p className={styles.error}>{error}</p>}
				{success && (
					<p className={styles.success}>Registration successful!</p>
				)}

				<button type="submit" className={styles.button}>
					Create account
				</button>
			</form>
		</>
	);
};

export default RegisterForm;
