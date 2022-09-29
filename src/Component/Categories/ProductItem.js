import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from '../axios';

const ProductItem = ({ categories, filterData }) => {
  const [item, setItem] = useState([]);
  const [itemError, setItemError] = useState('');
  var [filterItem, setFilter] = useState([]);

  let localCart = localStorage.getItem('cart');
  var [cartItem, setCartItem] = useState(
    (localCart !== null && JSON.parse(localCart)) || []
  );

  const getItemData = async () => {
    try {
      const res = await axios.get('/category/' + categories);
      setItem(res.data);
      setFilter(res.data);
    } catch (error) {
      setItemError(error.message);
    }
  };

  useEffect(() => {
    getItemData();
  }, [categories]);

  function fil() {
    const d = item.filter((data, index) => {
      if (filterData === 'all') {
        return data;
      } else if (data.title.toLowerCase().includes(filterData.toLowerCase())) {
        return data;
      } else {
      }
    });

    return d;
  }

  useEffect(() => {
    const list = fil();
    if (list !== undefined) {
      setFilter(list);
    }
  }, [filterData]);

  const addToCart = (item) => {
    let cartCopy = [...cartItem];
    let { id } = item;
    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      existingItem.price += item.price;
    } else {
      cartCopy.push(item);
    }

    setCartItem(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);

    console.log('#################### Local');
    console.log(localStorage.getItem('cart'));
  };

  return (
    <>
      <Container className="py-3">
        <h1 className="text-center heading_h1">CATEGORIES</h1>
        {itemError !== '' && <h2>{itemError}</h2>}
        <Row>
          {filterItem.map((curtItem) => {
            const { id, title, price, image, rating } = curtItem;

            return (
              <Col lg={3} key={id}>
                <Card className="Card img_wrapper mt-2">
                  <div className="img_Containter">
                    <Card.Img src={image} />
                    <div className="overlay">
                      <Link
                        className="icon"
                        to="/productdetails"
                        state={{ productId: id, productList: filterItem }}
                      >
                        <FaShoppingCart />
                      </Link>
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="title ">
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

                        <div>
                          <button className="cart_btn"
                            type="submit"
                            form="form1"
                            value="Submit"
                            onClick={() => addToCart(curtItem)}
                          >
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

export default ProductItem;
