import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from '~modules/abouts- us/page/abouts-us.page';
import AI from '~modules/ai/ai.page';

import { LoginPage } from '~modules/auth/pages';
import FindUsPage from '~modules/find/page/find-us.page';
import { HomePage } from '~modules/home/pages/home.page';
import KitchenPage from '~modules/kitchen/page/kitchen.page';
import LivingRoomPage from '~modules/livingRoom/components/page/LivingRoom.page';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = (
	<Routes>
		<Route path={ROUTER_KEYS.HOME} element={<HomePage />} />
		<Route path={ROUTER_KEYS.KITCHEN} element={<KitchenPage />} />
		<Route path={ROUTER_KEYS.LIVING_ROOM} element={<LivingRoomPage />} />
		<Route path={ROUTER_KEYS.ABOUT_US} element={<AboutUsPage />} />

		<Route path={ROUTER_KEYS.FIND_US} element={<FindUsPage />} />

		<Route path={ROUTER_KEYS.AI} element={<AI />} />

		<Route path={ROUTER_KEYS.LOGIN} element={<LoginPage />} />
		<Route
			path={ROUTER_KEYS.ALL_MATCH}
			element={<Navigate to={ROUTER_KEYS.HOME} />}
		/>
	</Routes>
);

export const privateRoutes = (
	<Routes>
		<Route
			path={ROUTER_KEYS.ALL_MATCH}
			element={<Navigate to={ROUTER_KEYS.HOME} />}
		/>
	</Routes>
);
