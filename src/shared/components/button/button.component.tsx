import * as React from 'react';
import Loader from '../loader/loader.component';
import classNames from 'classnames';

import { btnContentWrapper, btnStyles, iconWrapper, mr } from './button.styles';
import { cx } from '@emotion/css';

type ButtonProps = {
	text: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	extraButtonStyles?: string;
	icon?: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = ({
	text,
	type = 'submit',
	onClick,
	loading,
	disabled,
	extraButtonStyles,
	icon,
}) => {
	const isDisabled = Boolean(loading ?? disabled);

	const handleClick = (): void => {
		if (isDisabled) {
			return;
		}

		onClick?.();
	};

	return (
		<button
			disabled={isDisabled}
			type={type}
			onClick={handleClick}
			className={cx(btnStyles(Boolean(disabled)), extraButtonStyles)}
		>
			{loading ? (
				<Loader />
			) : (
				<p className={btnContentWrapper}>
					{icon && (
						<p
							className={classNames(iconWrapper, {
								[mr]: Boolean(text),
							})}
						>
							{icon}
						</p>
					)}
					{text}
				</p>
			)}
		</button>
	);
};

export default Button;
