import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import tdImg from '../assets/images/tomatoes.jpg'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? <h2 className='fs-4 text-center'>No Items added to the cart</h2> : <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td><img src={tdImg} alt="" /></td>
                      <td>Tomatoes</td>
                      <td>&#8377; 27</td>
                      <td>2Kg</td>
                      <td><i class="ri-delete-bin-line"></i></td>
                    </tr>
                  </tbody>
                </table>
              }
            </Col>

            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart