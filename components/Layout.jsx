import Navbar from './navbar/Navbar';
import Meta from './Meta';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
