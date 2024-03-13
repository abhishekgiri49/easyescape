import { Outlet } from "react-router-dom";
import { UserNavbar, UserSidebar, Footer } from "../../components";
import styled from "styled-components";

import "../../../assets/css/pages/app-email.css";
import NavWrapper from "../../../assets/wrappers/Navbar";
const HomeLayout = () => {
  return (
    <Wrapper>
      <div className="app-content content ecommerce-application">
        <NavWrapper>
          <div className="main-navbar shadow-sm sticky-top">
            <UserNavbar />
            <div class="my-account-wrapper mt-no-text">
              <div class="container container-default-2 custom-area">
                <div class="row">
                  <div class="col-lg-12 col-custom">
                    <div class="myaccount-page-wrapper">
                      <div class="row">
                        <UserSidebar />

                        <div class="col-lg-9 col-md-8 col-custom">
                          <Outlet />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavWrapper>
        <Footer />
      </div>
    </Wrapper>
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
