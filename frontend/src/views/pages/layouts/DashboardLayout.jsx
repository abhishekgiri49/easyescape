import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../../components";

import { useState, createContext, useContext } from "react";
const DashboardContext = createContext();
const Dashboard = () => {
  const user = { name: "john" };
  const [isActive, setIsActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        isActive,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Sidebar />
      <main className={`main ${isActive ? "active" : ""}`}>
        <div>
          <Navbar />
          <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
