import React, { useRef } from 'react';
import { box, button, text } from './ai.styles';
import { h2 } from '~shared/styles';

const AI = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			console.log('Выбранный файл:', file.name);
		}
	};

	return (
		<div className={box}>
			<h2 style={h2}>Let AI Help You Choose</h2>
			<p className={text}>
				Upload a photo to let our AI analyze your style and suggest the
				perfect match. Get <br /> personalized recommendations
				instantly!
			</p>
			<input
				type="file"
				ref={fileInputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
			<button onClick={handleButtonClick} className={button}>Select file</button>
		</div>
	);
};

export default AI;
