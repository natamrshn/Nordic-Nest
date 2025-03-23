
import * as React from "react";
import { useLocation } from "react-router-dom";
import PromoBanner from "~modules/home/components/promoBanner/promoBanner.component";
import { MainRouter } from "~router/main-router";
import Footer from "~shared/components/footer/footer.component";
import Header from "~shared/components/header/header.component";
import Modal from "~shared/components/modal shop/modal";
import Navigation from "~shared/components/header/components/navigation/navigation.component";
import Space from "~shared/components/space/space";
import ModalImg from "~shared/components/modalImg/modalImg";
import { useThemeStore } from "~shared/stores/theme.store";

const App = (): React.ReactNode => {
  const { pathname } = useLocation();
	console.log(pathname);
	const setIsLight = useThemeStore((state) => state.setIsLight);

	React.useEffect(() => {
		setIsLight(pathname !== '/');
	}, [pathname]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const location = useLocation(); 

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); 
  };

  React.useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const handleLinkClick = () => {
      setIsModalOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    modalRef.current?.querySelectorAll("a").forEach((link) => 
      link.addEventListener("click", handleLinkClick)
    );

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      modalRef.current?.querySelectorAll("a").forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [isModalOpen, location.pathname]);

  return (
    <>
      <PromoBanner />
      <Header onShopClick={toggleModal} />
      <Navigation isModalOpen={isModalOpen} onShopClick={toggleModal} />
      <MainRouter />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          ref={modalRef}
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '70px 80px',
          }}
        >
          <Space />
          <ModalImg />
        </div>
      </Modal>
    </>
  );
};    

export default App;
