import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus, FaUserAlt } from 'react-icons/fa';

const NavbarComp = ({ setCategories, setFilterData }) => {
  const [navItem, setNavItem] = useState([]);

  let localCart = localStorage.getItem('cart');
  const cartItem = JSON.parse(localCart);

  const getNavData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/categories');
    setNavItem(res.data.sort().reverse());
  };

  useEffect(() => {
    getNavData();
  });

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerB2wej8GWVk9rV0jDWRN-jGwVCsHhj1RQ1n4WBFwLPdFbxFtcyjPugAY6_AAPdbFLRs&usqp=CAU"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navItem.map((item, index) => {
              return (
                <>
                  <div >
                    <Nav.Link
                      className="navlink active"
                      as={Link}
                      onClick={() => setCategories(item)}>
                      <div key={index}>
                      {item}
                      </div>
                      
                    </Nav.Link>
                  </div>

                </>

              );
            })}
          </Nav>

          <Form className="d-flex mr-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setFilterData(e.target.value)}
            />
          </Form>

          <div className="d-flex px-2 ">
            <div className="profile_titl">
              <FaUserAlt />


            </div>
            <Nav.Link className="navlink" as={Link} to="/cart">
              <div className="counter_wrapper">
                <div className="count">
                  {cartItem != null && cartItem.length}
                </div>
                <FaCartPlus />

              </div>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
