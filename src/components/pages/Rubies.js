import React from 'react'
import data from './RubiesData'
import './Rubies.css'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

function Rubies() {

  const Filters = [
    {
      type: 'Price',
      labels: [
        "Below 100$",
        "100$ - 499$",
        "500$ - 999$",
        "1000$ - 2999$",
        "3000 - 4999$",
        "Above 5000$",
      ]
    },
    {
      type: 'Weight (Carats)',
      labels: [
        "0 - 0.99 ",
        "1.00 - 2.99 ",
        "3.00 - 4.99 ",
        "5.00 - 9.99 ",
        "10.00 and Higher"
      ]
    },
    {
      type: 'Origin',
      labels: [
        "Burma",
        "Ceylon",
        "Mouzambique",
        "Madagascar",
        "Tanzania",
        "Thailand"
      ]
    },
    {
      type: 'Clarity',
      labels: [
        "Internally\u00a0Flawless",
        "Loupe Clean",
        "VVS",
        "VS",
        "S"
      ]
    },
    {
      type: 'Color',
      labels: [
        "Pigeon Blood",
        "Vivid Red",
        "Pinkish Ruby",
        "Royal Red"
      ]
    }
  ]

    return (
        <>
          <section className="list-page-wrapper">
            <div className='nav-bar-backdrop-ruby'>
            {'\u00a0'}
            </div>
            <div className="top-of-wrapper">
              <h2 className='top-of'> Rubies </h2>
            </div>
            <div className='mobile-filter-area'>
              <Accordion row style={{boxShadow: "none"}}>
                <AccordionSummary style={{ fontWeight: "700"}} expandIcon={<i className="fas fa-chevron-down"></i>}>
                  Sort & Filter
                </AccordionSummary>
                <AccordionDetails>
                <div className='make-mobile-column'>  
                  <div className='sorting-mobile'>
                    <label for="sorting">Sort By:{'\u00a0'}</label>
                      <select className="sort-options" id="sort-options">
                        <option value="Newest">Newest</option>
                        <option value="Featured">Featured</option>
                        <option value="Size">Weight: Low to High</option>
                        <option value="Price">Weight: High to Low</option>
                        <option value="Price">Price: Low to High</option>
                        <option value="Price">Price: High to Low</option>
                      </select>
                  </div>
                  <div>
                  { Filters.map( Filter =>
                    <div className='filter-mobile'>
                      <h4 style={{marginBottom: '10px'}}> {Filter.type} </h4>
                    <FormGroup row style={{textAlign:"center"}}>
                      { Filter.labels.map(Label =>
                      <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label={<h4> {Label} </h4>}/>
                      )}
                    </FormGroup>
                    </div>
                  )}
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </section>
          <section className='product-section'>
            <div className="filter-area">
              <div className='sorting'>
                <label for="sorting">Sort By:{'\u00a0'}</label>
                  <select className="sort-options" id="sort-options">
                    <option value="Newest">Newest</option>
                    <option value="Featured">Featured</option>
                    <option value="Size">Weight: Low to High</option>
                    <option value="Price">Weight: High to Low</option>
                    <option value="Price">Price: Low to High</option>
                    <option value="Price">Price: High to Low</option>
                  </select>
              </div>
              <div className='filtering'>
                <label className ="filtering-label"><i className="fas fa-filter"></i> {"\u00a0"} Filter By:</label>
                <div className='filter-type'>
                {
                  Filters.map(Filter => 
                <Accordion  style={{boxShadow: "none"}}>
                    <AccordionSummary style={{ fontWeight: "700"}} expandIcon={<i className="fas fa-chevron-down"></i>}>
                      {Filter.type}
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup column style={{textAlign:"center"}}>
                        { Filter.labels.map(Label =>
                        <FormControlLabel
                          control={<Checkbox name="checkedA" />}
                          label={<h4> {Label} </h4>}/>
                        )}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                  )}
                </div> 
              </div>
            </div>
            <div className="products-list">
              {
                data.products.map(product =>
                  <div className="product-card">
                    <a href={"/product" + product.__id }> 
                      <div className="product-image-wrapper">
                        <img className='product-image' src={product.image} alt="Rubies"/>  
                      </div>
                    </a>
                    <div className="product-details-wrapper">
                      <a href={"/product" + product.__id } className='product-name-ruby'> <h4>{product.name}</h4> </a> 
                      <p className='product-description'>{product.description}</p>
                      <p>{product.price} </p>
                    </div>
                  </div>
                )}
            </div>
          </section>
        </>
    )
}

export default Rubies
