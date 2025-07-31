import { Outlet } from 'react-router-dom';
import FooterClient from '../component/navbar/FooterClient';
import NavBarClient from '../component/navbar/NavBarClient';
import ModalLogin from '../component/client/ModalLogin';
import ModalRegister from '../component/client/ModalRegister';

const ClientPage = () => {
    import('../assets/vendor/bootstrap.min.css');
    import('../assets/vendor/style.css');
    import('../assets/vendor/fontawesome-free-6.7.2-web/css/all.css');
    return (
        <>
            <NavBarClient/>
            <Outlet/>
            <FooterClient/>
            <ModalLogin/>
            <ModalRegister/>
        </>
    )
}

export default ClientPage;