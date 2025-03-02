import { Link } from 'react-router-dom';
import { button, navigation, navigationItem } from './navigation.styles';
import { useThemeStore } from '~shared/stores/theme.store';
import React from 'react';


const NAV_LINKS = [
    { path: '/shop', label: 'Shop', isModal: true }, 
    { path: '/about', label: 'About Us' },
    { path: '/find-us', label: 'Find Us' },
];

interface NavigationProps {
    onShopClick: () => void; 
}

const Navigation: React.FC<NavigationProps> = React.memo(({ onShopClick }) => {
    const isLight = useThemeStore((state) => state.isLight);

    return (
        <ul className={navigation}>
            {NAV_LINKS.map(({ path, label, isModal }) => (
                <li key={path} className={navigationItem(isLight)}>
                    {isModal ? (
                        <button className={button(isLight)} onClick={onShopClick}>
                           {label} 
                        </button>
                    ) : (
                        <Link to={path}>{label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
});

export default Navigation;
