import React, { useState } from 'react';
import { AuthService } from '../services/auth.service';
import * as styles from './registration.styles';
import { useNavigate } from 'react-router-dom'; // Для перенаправления

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
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
		<form onSubmit={handleSubmit} className={styles.form}>
			<h2 className={styles.title}>Register</h2>
			<input
				type="text"
				placeholder="First Name"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				className={styles.input}
				required
			/>
			<input
				type="text"
				placeholder="Second Name"
				value={secondName}
				onChange={(e) => setSecondName(e.target.value)}
				className={styles.input}
				required
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className={styles.input}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className={styles.input}
				required
			/>
			<input
				type="password"
				placeholder="Repeat Password"
				value={repeatPassword}
				onChange={(e) => setRepeatPassword(e.target.value)}
				className={styles.input}
				required
			/>
			{error && <p className={styles.error}>{error}</p>}
			{success && (
				<p className={styles.success}>Registration successful!</p>
			)}
			<button type="submit" className={styles.button}>
				Register
			</button>
		</form>
	);
};

export default RegisterForm;
