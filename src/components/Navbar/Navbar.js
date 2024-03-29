import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/images/backcountrylogo.png";
import style from "./Navbar.module.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderSlider from "../HeaderSlider";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { IoCall, IoPersonCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import {
  fetchProducts,
  searchProducts,
} from "../../store/reducers/productReducer";
import { useDispatch } from "react-redux";
import UseQuery from "../../utils/hooks/UseQuery";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = UseQuery();
  const searchTerm = query.get("search");
  const [search, setSearch] = useState("");

  const searchProduct = (search) => {
    console.log(search);
    if (search) {
      dispatch(search ? searchProducts(search) : fetchProducts());
      navigate(search ? `?search=${search}` : "/");
    } else {
      setSearch("");
      dispatch(fetchProducts());
    }
  };

  useEffect(() => searchProduct(), []);

  return (
    <>
      <style type="text/css">
        {`
            .navbar-toggler:focus{
                box-shadow: none
            }
            .nav-link {
                padding-right: 1.5rem !important;
                padding-left: 1.5rem !important;
                padding-top: 0.7rem !important;
                padding-bottom: 0.7rem !important;
                font-size: 14px;
                font-weight: bold;
            }
            .navlink_container::after {
                border-bottom: solid 3px #ea2129;  
                transform: scaleX(0);  
                transition: transform 250ms ease-in-out;
            }
            .navlink_container:hover::after {
                transform: scaleX(1);
            }
        `}
      </style>
      <div className={style.mainContainer}>
        <HeaderSlider />
        <Container fluid>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="none"
            variant="light"
            className={style.navbarMainContainer}
            // fixed="top"
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                <img src={Logo} width="220px" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <div className={style.centerNav}>
                    <div className={style.inputAndBtnContainer}>
                      <div className={style.inputAndBtnInnerContainer}>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            searchProduct(search);
                          }}
                        >
                          <input
                            type="text"
                            className={style.joinInput}
                            placeholder="Search gear and apparel"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                          <button className={style.joinBtn}>
                            <BiSearch style={{ fontSize: "24px" }} />
                          </button>
                          {search && (
                            <div
                              className={style.cancelBtn}
                              onClick={() => {
                                // setSearch("");
                                searchProduct("");
                              }}
                            >
                              <MdCancel style={{ fontSize: "24px" }} />
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                    <div className={style.chatMainContainer}>
                      <div>
                        <HiChatAlt2 />
                      </div>
                      <div>Chat</div>
                    </div>
                    <div className={style.numberMainContainer}>
                      <div>
                        <IoCall />
                      </div>
                      <div>1-800-409-4502</div>
                    </div>
                  </div>
                </Nav>
                <Nav>
                  <div className={style.rightNav}>
                    <div>
                      <p>
                        {" "}
                        My account{" "}
                        <IoPersonCircleSharp
                          style={{ fontSize: "40px", color: "#c1c1c1" }}
                        />
                      </p>
                    </div>
                    <div>
                      <FaShoppingCart style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <div style={{ marginTop: 20 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
