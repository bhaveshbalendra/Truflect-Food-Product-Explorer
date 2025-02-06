import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-400">
      <div className="max-w-[1600px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
