import React from 'react'

export default function Footer() {
  const handleClick = () => {
    window.open("https://www.facebook.com/");
  };
  const handleClick1 = () => {
    window.open("https://twitter.com/?lang=en");
  };
  const handleClick2 = () => {
    window.open("https://www.youtube.com/");
  };
  const handleClick3 = () => {
    window.open("https://web.whatsapp.com/");
  };
  const handleClick4 = () => {
    window.open("https://www.instagram.com/?hl=en");
  };
  const handleClick5 = () => {
    window.open("https://mail.google.com/");
  };
  const handleClick6 = () => {
    window.open("https://www.google.com/maps");
  };
    return (
        <div className='footer'>
            <section>
            <h3 className='contactus'>Contact Us</h3>
            <center>
            <a href="#" class="fa fa-facebook icons" onClick={handleClick}></a>
            <a href="#" class="fa fa-twitter icons" onClick={handleClick1}></a>
            <a href="#" class="fa fa-youtube icons" onClick={handleClick2}></a>
            <a href="#" class="fa fa-whatsapp icons" onClick={handleClick3}></a>
            <a href="#" class="fa fa-instagram icons" onClick={handleClick4}></a>     
            </center>
            <section className='phone-sec'>
            <a href="#" class="fa fa-phone icons"></a>
            <h5 className='num'>0310-2097912</h5>  
            </section>
            <section className='mail-sec'>
            <a href="#" class="fa fa-envelope icons" onClick={handleClick5}></a>
            <h5 className='mail'>bilalsiddqiue817@gmail.com</h5>  
            </section>
            <section className='map-sec'>
            <a href="#" class="fa fa-map-marker icons" onClick={handleClick6}></a>
            <h5 className='mapmarker'>Plot 806 3rd floor Habib buliding</h5>  
            
            </section>
            </section>
        </div>
    )
}
