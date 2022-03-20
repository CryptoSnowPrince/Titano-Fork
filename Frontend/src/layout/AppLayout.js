import React, { Suspense, useState } from 'react';

import Sidebar from "./Sidebar";
import Header from "./Header";
import AppSpinner from '../pages/loading/AppSpinner';

const AppLayout = (props) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const sidebarToggle = () => {
    setSidebarStatus(!sidebarStatus);
  }
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Sidebar sidebarStatus={sidebarStatus} sidebarToggle={sidebarToggle} />
      <div className="flex-lg-1 h-screen overflow-y-lg-auto">
        <Header sidebarToggle={sidebarToggle} />
        <main className="mt-4">
          <div className="container text-white">
            <Suspense fallback={<AppSpinner absolute />}>
              {props.children}
            </Suspense>
          </div>
        </main >
      </div >
    </div >
  );
};

export default AppLayout;