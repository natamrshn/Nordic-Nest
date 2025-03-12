import React from 'react';
import AIIcon from '~/assets/ai-icon.svg?url';
import AIIconDark from '~/assets/ai-icon-dark.svg?url';
import { box } from './ai.styles';
import { useThemeStore } from '~shared/stores/theme.store';
import { Link } from 'react-router-dom';

const AI = () => {
    const isLight = useThemeStore((state) => state.isLight);
  return (
		<Link to="/ai">
			<div className={box}>
				<img src={isLight ? AIIconDark : AIIcon} alt="ai icon" />
				<p>AI Help</p>
			</div>
		</Link>
  );
};

export default AI;
