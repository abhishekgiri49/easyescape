import { Outlet } from "react-router-dom";
import { UserNavbar, Carousel } from "../../components";
import styled from "styled-components";
const HomeLayout = () => {
  return (
    <Wrapper>
      <UserNavbar />
      <div className="app-content content ecommerce-application">
        <div className="content-overlay"></div>

        <Outlet />
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
