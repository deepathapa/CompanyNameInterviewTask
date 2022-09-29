import React from 'react';
import Button from 'react-bootstrap/Button';
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const CartItem = ({ data }) => {
  let localCart = localStorage.getItem('cart');
  const cartItem = JSON.parse(localCart);

  // let [cart, setCart] = useState([]);

  const removeItem = (product) => {
    let cartCopy = [...cartItem];
    cartCopy = cartCopy.filter((item) => item.id !== product.id);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
  };
  return (
    <>
      <tr>
        <td>
          <div className="mobile_img">
            <img src={data.image} alt="" />
          </div>
        </td>
        <td>
          <p className="card_des">{data.title}</p>

          <div className="table_desc">
            <p>{data.description}</p>
          </div>
        </td>
        <td>
          <h5>
            <strong>{data.price}</strong>
          </h5>
        </td>
        <td>
          <div>
            <div>
              {' '}
              <div className="incremtn_title">
                    <div className="plus_icon">
                      <AiOutlineMinus />
                    </div>
                    <div>1</div>
                    <div className="plus_icon">
                      <AiOutlinePlus />
                    </div>
                  </div>
            </div>
            <div className="d-flex">
            <div className="move_Title mt-2 text-center">
              <Button variant="success">
                {' '}
                {' '}
                <span className="px-1">
                  <FaHeart />
                </span>
              </Button>{' '}
            </div>
            <div className="mt-2 text-center px-1">
              {' '}
              <Button variant="danger" onClick={() => removeItem(data)}>
               
                <span className="px-1">
                  <AiFillDelete />
                </span>
              </Button>{' '}
            </div>
            </div>
          
          </div>
        </td>
      </tr>
      
    </>
  );
};

export default CartItem;
