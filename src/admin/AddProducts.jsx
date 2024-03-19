import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='mb-5'>Add Product</h4>
            <Form>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type="text" placeholder='Product Name' value={enterTitle} onChange={(e) => setEnterTitle(e.target.value)} required />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='short-info....' value={enterShortDesc} onChange={(e) => setEnterShortDesc(e.target.value)} required />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Description</span>
                <input type="text" placeholder='Description....' value={enterDescription} onChange={(e) => setEnterDescription(e.target.value)} required />
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
                <FormGroup className='form__group w-50'>
                  <span>Price</span>
                  <input type="number" placeholder='100 &#8377;' value={enterPrice} onChange={(e) => setEnterPrice(e.target.value)} required />
                </FormGroup>
                <FormGroup className='form__group w-50'>
                  <span>Category</span>
                  <select className='w-100 p-2' value={enterCategory} onChange={(e) => setEnterCategory(e.target.value)} required>
                    <option>Select</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="grains">Grains</option>
                    <option value="sea">Sea Food</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className='form__group'>
                  <span>Product Image</span>
                  <input type="file" required/>
                </FormGroup>
              </div>

              <button type='submit' className="buy__btn">Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts