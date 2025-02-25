import React, { useState } from 'react';
import arrowUp from '~/assets/arrow-up-icon.svg';
import arrowDown from '~/assets/arrow-down.svg';
import { answerStyle, faqItemStyle, iconStyle, questionStyle } from './faqItem.styles';

interface FAQItemProps {
	question: string;
	answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);


	return (
		<div className={faqItemStyle}>
			<div className={questionStyle} onClick={() => setIsOpen(!isOpen)}>
				<span>{question}</span>
				<img
					src={isOpen ? arrowUp : arrowDown}
					alt="toggle icon"
					className={iconStyle}
				/>
			</div>
			{isOpen && <p className={answerStyle}>{answer}</p>}
		</div>
	);
};

export default FAQItem;
