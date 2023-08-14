import React from "react";
import { useLocation } from "react-router-dom";

// components
import { Header, Sidebar } from "./index";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen flex flex-row gap-8">
      {location.pathname === "/" && <Header />}
      {location.pathname !== "/" && <Sidebar />}

      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
