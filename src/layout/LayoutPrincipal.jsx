import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const LayoutPrincipal = () => {
  return (
    <>
        <Header />
            <main className='container mx-auto my-10'>
                <Outlet />
            </main>
        <Footer />
    </>
  )
}

export default LayoutPrincipal;