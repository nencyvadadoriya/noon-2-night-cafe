import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  darkHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, darkHeader = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Header dark={darkHeader} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
