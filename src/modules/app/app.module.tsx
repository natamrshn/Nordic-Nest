import * as React from 'react';
import PromoBanner from '~modules/home/components/promoBanner/promoBanner.component';
import { MainRouter } from '~router/main-router';
import Footer from '~shared/components/footer/footer.component';
import Header from '~shared/components/header/header.component';
import Modal from '~shared/components/modal shop/modal';
import Navigation from '~shared/components/header/components/navigation/navigation.component';
import Space from '~shared/components/space/space';
import Furniture from '~shared/components/furniture/furniture';
import ModalImg from '~shared/components/modalImg/modalImg';

const App = (): React.ReactNode => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleShopClick = () => {
        setIsModalOpen(true); 
    };

    return (
        <>
            <PromoBanner />
            <Header onShopClick={handleShopClick}/>
            <Navigation onShopClick={handleShopClick} /> 
            <MainRouter />
            <Footer />

  
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <>
                <div onClick={() => setIsModalOpen(false)} 
                  style={{ cursor: 'pointer', position: 'absolute', top: '30px', fontSize: '24px' }}
                > x
                </div>
                <div style={{ display: 'flex', gap: '120px',  width: '100%'}} >
                  <Space />
                  <Furniture />
                  <ModalImg />
                </div>
              </>
            </Modal>
        </>
    );
};

export default App;