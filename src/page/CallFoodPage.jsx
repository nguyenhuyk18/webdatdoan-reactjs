
import FooterComponent from '../component/navbar/FooterComponent';
import { Outlet } from 'react-router-dom';
import NavbarComponentCallFood from '../component/navbar/NavbarCallFoodComponent';
import { useEffect } from 'react';

const CallFoodPage = () => {
    useEffect(() => {
        import('../assets/vendor/bootstrap.min.css');
        import('../assets/vendor/style.css');
        import('../assets/vendor/fontawesome-free-6.7.2-web/css/all.css');
    }, []);


    return (
        <>
            <NavbarComponentCallFood/>
            < Outlet />
            <FooterComponent />
        </>
    )
}

export default CallFoodPage;