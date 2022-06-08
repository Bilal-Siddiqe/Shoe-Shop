import React from 'react';
import Homeimg from './images/Home-image.jpg'
import review1 from './images/review1.jpg'
import review2 from './images/review2.jpg'
import review3 from './images/review3.jpg'
import item1 from './images/item1.jpg'
import item2 from './images/item2.jpg'
import item3 from './images/item3.jpg'
import item4 from './images/item4.jpg'
import shoe13 from './images/shoe13.jpg'

const Bodysection = () => {
  return (
    <>
      <div className='body-div1'>
        <section className='div1-sec-Right'>

          <h1>Leap to</h1>
          <h1>Comfort.</h1>
          <br />
          <p>
            Comfort is our first priority
            Bless your feet with comfortable shoe.
            Buy now to get
            25% Off.
          </p>
          <br />
          <section className='div1secRight-inner-sec'>
            <button className="btnbuy btn-all">BUY NOW</button>
            <h5>25% Off</h5>
          </section>
        </section>
        <section className='div1-sec-Left'>
          <img src={Homeimg} alt="" className='shoe1' />
        </section>
      </div>
      {/* Brek line and Review Heading */}
      <hr />
      <h4 className='heading'>Reviews from our client </h4>

      {/* Reviews Work Start */}

      <div className='body-div2'>
        <section className='div2-sec-reviews'>
          <img src={review1} alt="" className='review' />
          <section  >
            <h5>John Cena</h5>
            <p className='review-para'>
              Wow its an amazing shopoing side
              i ma very glad
            </p>
          </section>
        </section>
        <section className='div2-sec-reviews'>
          <img src={review2} alt="" className='review' />
          <section  >
            <h5>John Cena</h5>
            <p className='review-para'>
              Wow its an amazing shopoing side
              i ma very glad
            </p>
          </section>
        </section>
        <section className='div2-sec-reviews'>
          <img src={review3} alt="" className='review' />
          <section  >
            <h5>John Cena</h5>
            <p className='review-para'>
              Wow its an amazing shopoing side
              i ma very glad
            </p>
          </section>
        </section>
      </div>

      <button className="see-more btn-all"> See more</button>

      {/* New Arrivals Works Start */}

      <div>
        <h4 className='heading' id='Shop'>New arrivals</h4>

        <div className='body-div3'>
          <section className='div3-sec-items'>
            <center>
              <h3 className='item-text'>Blakish snakers</h3>
              <h5 className='item-text'>Super Buckle</h5>

              <img src={item1} alt="" className='Ar-items-img' />
              <h5 className='item-text price'>$150</h5>
              <button className="btn-all Ar-item-btnbuy">BUY NOW</button>
            </center>
          </section>
          <section className='div3-sec-items'>
            <center>
              <h3 className='item-text'>Blakish snakers</h3>
              <h5 className='item-text'>Super Buckle</h5>

              <img src={item2} alt="" className='Ar-items-img' />
              <h5 className='item-text price'>$80</h5>
              <button className="btn-all Ar-item-btnbuy">BUY NOW</button>
            </center>
          </section>
          <section className='div3-sec-items'>
            <center>
              <h3 className='item-text'>Blakish snakers</h3>
              <h5 className='item-text'>Super Buckle</h5>

              <img src={item3} alt="" className='Ar-items-img' />
              <h5 className='item-text price'>$100</h5>
              <button className="btn-all Ar-item-btnbuy">BUY NOW</button>
            </center>
          </section>
          <section className='div3-sec-items'>
            <center>
              <h3 className='item-text'>Blakish snakers</h3>
              <h5 className='item-text'>Super Buckle</h5>

              <img src={item4} alt="" className='Ar-items-img' />
              <h5 className='item-text price'>$120</h5>
              <button className="btn-all Ar-item-btnbuy">BUY NOW</button>
            </center>
          </section>

        </div>

        <button className="browse-all btn-all"> Browse all </button>
      </div>

      {/* Most Selling Product Section */}
      <h4 className='heading' id='Product'>Most selling products</h4>
      <div className='body-div4'>

        <div className='div4-mainsecleft'>
          <div className='div4-secleft'>
            <section className='body-div4-leftsec'>
              <img src={item1} alt="" className='Sell-Prod-img' />
              <section  >
                <h5>World Wear</h5>
                <p className='Sell-Item-type'>
                  Sport Shoes
                </p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </section>
              <button className='btn-all btn-SellProd'>BUY NOW</button>
            </section>

            <section className='body-div4-leftsec'>
              <img src={item2} alt="" className='Sell-Prod-img' />
              <section  >
                <h5>World Wear</h5>
                <p className='Sell-Item-type'>
                  Sport Shoes
                </p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </section>
              <button className='btn-all btn-SellProd'>BUY NOW</button>
            </section>
          </div>
          <div className='div4-secleft'>
            <section className='body-div4-leftsec'>
              <img src={item3} alt="" className='Sell-Prod-img' />
              <section  >
                <h5>World Wear</h5>
                <p className='Sell-Item-type'>
                  Sport Shoes
                </p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </section>
              <button className='btn-all btn-SellProd'>BUY NOW</button>
            </section>

            <section className='body-div4-leftsec'>
              <img src={item4} alt="" className='Sell-Prod-img' />
              <section  >
                <h5>World Wear</h5>
                <p className='Sell-Item-type'>
                  Sport Shoes
                </p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </section>
              <button className='btn-all btn-SellProd'>BUY NOW</button>
            </section>
          </div>

          <button className='btn-all btn-SellPro-browse'> Browse All</button>
        </div>

        <img src={shoe13} alt="Sheo-image" className='M-S-P-img' />
      </div>
      <div className='body-div5'>
        <img src={shoe13} alt="shoe-image" className='M-S-P-img div5-img' />
        <section className='div5-sectext'>
          <h4>Our Story</h4>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?

            Lorem ipsum dolor sit amet.
          </p>
        </section>
      </div>
      <div className='body-div5 div5part2'>
        <div className="container">
          <button className='btn-new btn-all'>New</button>
          <img src={shoe13} alt="shoe-image" className='M-S-P-img div5-img Blog-img' />
          <div>
            <h4 className='blog-text'>Blog</h4>
            <h5 className="blog-text-2">Fashion Guid</h5>
            <button className='btn btn-all'>Read Now</button>
          </div>
        </div>
        <section className='div5-sectext'>
          <h4>News and Blogs</h4>
          <br />
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ad?
          </p>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <section className="contact" id='Contact'>
          <h2 className="text-center">Contact Us</h2>
          <div className="form">
            <input className='from-input' type="text" name="name" id="name" placeholder="Enter Your Name" />
            <input className='from-input' type="text" name="phone" id="phone" placeholder="Enter Your Phone" />
            <input className='from-input' type="email" name="name" id="email" placeholder="Enter Your Email" />
            <textarea className='from-input' name="text" id="text" cols="108" rows="12"
              placeholder='Ellobrate your concern'></textarea>
            <br />
            <button className='btn-all btn-dark'> Submit </button>
          </div>
        </section>
      </div>
    </>
  )
}
export default Bodysection
