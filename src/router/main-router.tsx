import * as React from 'react';
import { privateRoutes, publicRoutes } from './routes';
import useAuthStore from '~/stores/auth.store';

export const MainRouter: React.FunctionComponent = () => {
	const auth = false;

	return <div>{auth ? privateRoutes : publicRoutes}</div>;
};
