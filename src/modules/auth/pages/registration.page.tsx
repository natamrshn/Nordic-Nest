import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth.service';
import * as styles from './registration.styles';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		firstName: '',
		secondName: '',
	});
	const [agreeTerms, setAgreeTerms] = useState(false);
	const [subscribe, setSubscribe] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	const handleChange =
		(field: keyof typeof formData) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData({ ...formData, [field]: e.target.value });
		};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setSuccess(false);

		const { email, password, repeatPassword, firstName, secondName } =
			formData;

		// Валидация
		if (!email.includes('@') || !email.includes('.')) {
			return setError('Invalid email');
		}
		if (password.length < 8) {
			return setError('Password must be at least 8 characters');
		}
		if (password !== repeatPassword) {
			return setError('Passwords do not match');
		}
		if (!firstName.trim() || !secondName.trim()) {
			return setError('First name and second name are required');
		}
		if (!subscribe) {
			return setError('You must agree with the privacy policy');
		}

		try {
			await AuthService.register(formData);
			setSuccess(true);
			setTimeout(() => navigate('/'), 1000);
		} catch (err: any) {
			const errorMessage = err?.response?.data?.error || 'Try again';
			setError(`Registration failed: ${errorMessage}`);
			console.error('Error:', err?.response?.data || err.message);
		}
	};

	const InputField = ({
		label,
		type,
		value,
		onChange,
		required = true,
		placeholder,
	}: {
		label: string;
		type: string;
		value: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
		required?: boolean;
		placeholder?: string;
	}) => (
		<>
			<label className={styles.label}>{label}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder || label}
				className={styles.input}
				required={required}
			/>
		</>
	);

	const CheckboxField = ({
		checked,
		onChange,
		label,
		required = false,
	}: {
		checked: boolean;
		onChange: () => void;
		label: string;
		required?: boolean;
	}) => (
		<label className={styles.checkboxLabel}>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				style={{ width: '24px', height: '24px', cursor: 'pointer' }}
				required={required}
			/>
			{label}
		</label>
	);

	return (
		<>
			<h2 className={styles.title}>CREATE AN ACCOUNT</h2>
			<p className={styles.subtitle}>Welcome to NORDICNEST</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formFieldsWrapper}>
					<InputField
						label="First Name"
						type="text"
						value={formData.firstName}
						onChange={handleChange('firstName')}
					/>
					<InputField
						label="Second Name"
						type="text"
						value={formData.secondName}
						onChange={handleChange('secondName')}
					/>
					<InputField
						label="Email"
						type="email"
						value={formData.email}
						onChange={handleChange('email')}
					/>
					<InputField
						label="Password"
						type="password"
						value={formData.password}
						onChange={handleChange('password')}
					/>
					<InputField
						label="Repeat Password"
						type="password"
						value={formData.repeatPassword}
						onChange={handleChange('repeatPassword')}
					/>

					<CheckboxField
						checked={agreeTerms}
						onChange={() => setAgreeTerms(!agreeTerms)}
						label="I want to receive special offers via email."
					/>
					<CheckboxField
						checked={subscribe}
						onChange={() => setSubscribe(!subscribe)}
						label="I agree with the privacy policy"
						required
					/>
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
