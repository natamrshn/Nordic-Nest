import * as React from 'react';
import PromoBanner from '~modules/home/components/promoBanner/promoBanner.component';

import { MainRouter } from '~router/main-router';
import Footer from '~shared/components/footer/footer.component';
import Header from '~shared/components/header/header.component';

const App = (): React.ReactNode => {
	return (
    <>
      <PromoBanner/>
			<Header />
			<MainRouter />
			<Footer />
		</>
	);
};

export default App;
