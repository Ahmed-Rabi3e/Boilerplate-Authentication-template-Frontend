import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ hideHeader, hideFooter }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen text-white">
      {!hideHeader && <Header />}

      <main className="flex-grow bg-mainbackground">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
