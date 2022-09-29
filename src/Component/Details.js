import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import axios from './axios';

import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { productId, productList } = location.state;

  console.log('+++++++++++++++++++++++++++++++++++++++++');
  console.log(productList);

  const [productdetail, setProductdetail] = useState({});

  const [productError, setProductError] = useState('');

  const getProductData = async () => {
    try {
      const res = await axios.get(`/${productId}`);
      setProductdetail(res.data);
    } catch (error) {
      setProductError(error.message);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Container>
        <h1>Product Details</h1>

        {productError !== '' && <h2>{productError}</h2>}
        <Card className="Card ">
          <Row className="p-3">
            <Col lg={5}>
              <div className="product_img p-5">
                <img src={productdetail.image} alt="" />
              </div>
            </Col>

            <Col lg={6}>
              <div className="p-5">
                <div>
                  <h3>{productdetail.title}</h3>
                  <p>{productdetail.category}</p>

                  <p className="table_desc"> {productdetail.description}</p>
                  <div>
                    <h4>
                      <strong>Rs</strong> {productdetail.price}
                    </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div className="incremtn_title">
                    <div className="plus_icon">
                      <AiOutlineMinus />
                    </div>
                    <div>1</div>
                    <div className="plus_icon">
                      <AiOutlinePlus />
                    </div>
                  </div>
                  <div>
                    <Button className="py-2 add_Cart">
                      <FaCartPlus /> Add to cart
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    active
                    className="view_btn"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container className="py-3">
        <h1 className="text-center">Similar Product</h1>

        <Row>
          {productList.map((curtItem) => {
            const { id, title, price, image, rating } = curtItem;

            return (
              <Col lg={3} key={id}>
                <Card className="Card img_wrapper">
                  <div className="img_Containter">
                    <Card.Img src={image} />
                    <div className="overlay">
                      <Link className="icon" to="/productdetails">
                        <FaShoppingCart />
                      </Link>
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title className=" d-flex justify-content-between">
                      <div className="title">
                        {title}
                      </div>


                      <div className="ratinting_title">
                        {rating.rate}
                        <span>
                          <AiTwotoneStar className="star" />
                        </span>
                        |10
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <div className="d-flex justify-content-between ">
                        <div>
                          <strong>Rs.{price}</strong>
                        </div>

                        <div >
                          <button className="cart_btn" type="submit" form="form1" value="Submit">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Details