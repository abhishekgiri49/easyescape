import { Outlet } from "react-router-dom";
import { UserNavbar, LoadingScreen, Footer } from "../../components";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import NavWrapper from "../../../assets/wrappers/Navbar";
const HomeLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <LoadingScreen loading={loading} setLoading={setLoading} />
      <Wrapper>
        <div className="app-content content ecommerce-application">
          <NavWrapper>
            <div className="main-navbar shadow-sm sticky-top">
              <UserNavbar />

              <Outlet />
            </div>
          </NavWrapper>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  .content {
    padding: 0 !important;
    position: relative;
    transition: 300ms ease all;
    backface-visibility: hidden;
    min-height: calc(100% - 3.35rem);
    margin-left: 0;
  }

  .carousel-div {
    padding: 40px;
  }
`;
export default HomeLayout;
