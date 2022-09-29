import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";
import CartItem from './CartItem';

const ShoppingCard = () => {
  let localCart = localStorage.getItem('cart');
  const cartItem = JSON.parse(localCart);
  let totlaCartPrice = 0;

  useEffect(() => {
    console.log('Item Deleted');
  }, [cartItem]);

  const ProceedSucess = () => {
    Swal.fire({
      title: "Success",
      text: "Payment successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  return (
    <Container className="mt-4 mb-5">
      <h1 className="head_title heading_h1">YOUR SHOOPING CART</h1>

      {cartItem != null && cartItem.length != 0 ? (
        <Row>
          <Col lg={9}>
            <Card className="p-3">
              <Table responsive bordered>
                <thead className="table_head">
                  <tr>
                    <th>Your Items</th>
                    <th></th>
                    <th>Price</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item) => {
                    // eslint-disable-next-line no-lone-blocks
                    { (totlaCartPrice += item.price) }
                    return (
                      <>
                        <CartItem  key={item.id} data={item} />
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="p-3">
              <Table responsive className="table_details">
                <thead>
                  <tr>
                    <th colspan="2">Order Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Item</td>
                    <td>{cartItem.length}</td>
                  </tr>
                  <tr>
                    <td>Tax Price</td>
                    <td>0.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Total Amount</strong>
                    </td>
                    <td>
                      <strong>Rs {totlaCartPrice}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            <div className="mt-3">
              <Button className="proceed_btn" onClick={ProceedSucess}> Proceed to Chcek out </Button>{' '}
            </div>
          </Col>
        </Row>
      ) : (
        <h1>No Item in Cart</h1>
      )}
    </Container>
  );
};

export default ShoppingCard;
