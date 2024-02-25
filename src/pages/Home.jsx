import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import Hero from '../assets/images/hero-rip.png'
import '../styles/home.css'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import CounterImg from '../assets/images/onionrip.png'
import Clock from '../components/UI/Clock'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [popularproducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'Organic');
    const filteredBestSalesProducts = products.filter(item => item.category === 'Vegetables');
    const filterednew = products.filter(item => item.category === 'new');
    const filteredpopular = products.filter(item => item.category === 'new');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setNewArrivals(filterednew);
    setPopularProducts(filteredpopular);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle" style={{ userSelect: "none" }}>Started in {year}</p>
                <h2 style={{ userSelect: "none" }}>Nature itself is the best physician</h2>
                <p style={{ userSelect: "none" }}>
                  HarvestLink connects farmers with consumers, fostering local,
                  sustainable food networks, supporting communities, and promoting
                  healthy eating habits worldwide.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            {/* breakline */}
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={Hero} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title' style={{ userSelect: "none" }}>Hot Sellers</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title' style={{ userSelect: "none" }}>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Onions</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductList data={newArrivals} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Popluar in Category</h2>
            </Col>
            <ProductList data={popularproducts} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home