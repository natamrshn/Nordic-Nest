import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from '~modules/abouts- us/page/abouts-us.page';
import AI from '~modules/ai/ai.page';
import RegisterForm from '~modules/auth/pages/registration.page';



import CartPage from '~modules/card/cartPage';

import FavouritesPage from '~modules/favourites/favouritesPage';

import FindUsPage from '~modules/find/page/find-us.page';
import { HomePage } from '~modules/home/pages/home.page';

import { ROUTER_KEYS } from '~shared/keys';
import SearchResultsPage from '~modules/search/Seacrh.page';
import { Tags } from '~modules/Tags/tags.page';
import RecommendedCategories from '~modules/ai/RecommendedCategories';
import CategoryLists from '~shared/components/FakeShop/fakeShop';
import TovaryPage from '~shared/components/FakeShop/tovary';
import ProductsPage from '~shared/components/FakeShop/tovary';
import FilteredProductsPage from '~shared/components/FakeShop/FilteredShop';

export const publicRoutes = (
	<Routes>
		<Route path={ROUTER_KEYS.HOME} element={<HomePage />} />
		<Route path="/products" element={<FilteredProductsPage />} />
		<Route
			path="/recommended-categories"
			element={<FilteredProductsPage />}
		/>

		<Route path={ROUTER_KEYS.REGISTRATION} element={<RegisterForm />} />
		{/* <Route path={ROUTER_KEYS.KITCHEN} element={<KitchenPage />} /> */}
		<Route path="/products/search" element={<SearchResultsPage />} />
“
		{/* <Route path={ROUTER_KEYS.LIVING_ROOM} element={<LivingRoomPage />} />
		<Route path={ROUTER_KEYS.BED_ROOM} element={<BedRoomPage />} /> */}
		<Route path=":categoryName" element={<FilteredProductsPage />} />
		<Route path={ROUTER_KEYS.ABOUT_US} element={<AboutUsPage />} />
		<Route path={ROUTER_KEYS.FAVOURITE} element={<FavouritesPage />} />
		<Route path={ROUTER_KEYS.CART} element={<CartPage />} />

		<Route path={ROUTER_KEYS.FIND_US} element={<FindUsPage />} />

		<Route path={ROUTER_KEYS.AI} element={<AI />} />

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
