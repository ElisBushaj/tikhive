import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, options: { navBar } }) => (
  <>
    <Navbar {...navBar} />
    <main className="min-h-[80vh] my-7 w-full flex justify-center items-center">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
