import React from 'react';
import AIIcon from '~/assets/ai-icon.svg?url';
import AIIconDark from '~/assets/ai-icon-dark.svg?url';
import { box } from './ai.styles';
import { useThemeStore } from '~shared/stores/theme.store';

const AI = () => {
    const isLight = useThemeStore((state) => state.isLight);
	return (
		<div className={box}>
			<img src={isLight ? AIIconDark : AIIcon} alt="ai icon" />
			<p>AI Help</p>
		</div>
	);
};

export default AI;
