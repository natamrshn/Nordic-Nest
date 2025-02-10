import * as React from 'react';

import { MainRouter } from '~router/main-router';
import Footer from '~shared/components/footer/footer.component';
import Header from '~shared/components/header/header.component';

const App = (): React.ReactNode => {
	return (
		<>
			<Header />
			<MainRouter />
			<Footer />
		</>
	);
};

export default App;
