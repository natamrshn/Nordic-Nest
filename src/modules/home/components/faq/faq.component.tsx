import React from 'react';
import FAQList from './components/faqList/faqList.component';

import img from '~/assets/faq-image.png';
import { contentStyle, faqStyle, imageStyle } from './faq.styles';

const FAQ: React.FC = () => {
	return (
		<div className={faqStyle}>
			<div className={contentStyle}>
				<FAQList />
				<img src={img} className={imageStyle} />
			</div>
		</div>
	);
};

export default FAQ;
