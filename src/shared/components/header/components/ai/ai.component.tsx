import React from 'react';
import AIIcon from '~/assets/ai-icon.svg?url';
import { box } from './ai.styles';
import { Link } from 'react-router-dom';

const AI = () => {
	return (
		<div className={box}>
			<img src={AIIcon} alt="ai icon" />
			<p>AI Help</p>
		</div>
	);
};

export default AI;
