import * as React from 'react';
import classNames from 'classnames';

import { inputStyles, inputWrapper, errorTextStyles } from './input.styles';

type InputProps = {
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: 'text' | 'password' | 'email' | 'number';
	name?: string;
	disabled?: boolean;
	error?: string;
	extraInputStyles?: string;
	extraWrapperStyles?: string;
};

const Input: React.FunctionComponent<InputProps> = ({
	value,
	onChange,
	placeholder = '',
	type = 'text',
	name,
	disabled = false,
	error,
	extraInputStyles,
	extraWrapperStyles,
}) => {
	return (
		<div className={classNames(inputWrapper, extraWrapperStyles)}>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				className={classNames(
					inputStyles(Boolean(error)),
					extraInputStyles,
				)}
			/>
			{error && <span className={errorTextStyles}>{error}</span>}
		</div>
	);
};

export default Input;
