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
  const modalRef = React.useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
    }
  };

React.useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);

  const handleShopClick = () => {
    setIsModalOpen(prevState => !prevState);
  };
    return (
      <>
        <PromoBanner />
        <Header onShopClick={handleShopClick}/>
        <Navigation  isModalOpen={isModalOpen} onShopClick={handleShopClick} /> 
        <MainRouter />
        <Footer />


        <Modal   isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div  ref={modalRef} style={{
            display: 'flex', 
            width: '100%', justifyContent: 'space-around',}}
          >
            <Space />
            <Furniture />
            <ModalImg />
          </div>
          </Modal>
      </>
    );
};

export default App;