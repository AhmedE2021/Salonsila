class Footer extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = `
        <footer>
        <div class="footer-section">
     
      <div class="footer-right-side">
        <div class="footer-right-side-row1">
        <div class="footer-right-side-box1">
          <h1 id="contact-us" class="footer-header">Get in touch</h1>
    <h2 class="footer-text" ><a href="tel:+4571816112" class="clickable fa fa-phone" style="font-size:25px"></a>  &nbsp;  +45 71 81 61 12</h2>
    <h2 class="footer-text"><a href="tel:+4552395237" class="clickable fa fa-phone" style="font-size:25px"></a>   &nbsp; +45 52 39 52 37</h2>
    <h2 class="footer-text"><a href="mailto:silasalon@gmail.com" class="clickable fa fa-envelope" style="font-size:25px"></a>   &nbsp; silasalon@gmail.com</h2>
        </div>
        <div class="footer-right-side-box3">
          <h1 class="footer-header">Opening hours</h1>
         <h2 class="footer-text">Mon - Fri  &nbsp; &nbsp; &nbsp;&nbsp;12:00 - 18:00</h2>
         <h2 class="footer-text">Sat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10:00 - 15:00</h2>
        </div>
    
    </div>
    <div class="footer-right-side-row2">
      <div class="footer-right-side-box2">
        <h1 class="footer-header">Links</h1>
        <h2><a  href="#" class="clickable footer-text">Price</a></h2>
        <h2><a  href="gallery.html" class="clickable footer-text">Our Gallery</a></h2>
        <h2><a  href="book1.html" class="clickable footer-text">Book Time</a></h2>
      </div>
    
    <div class="footer-right-side-box4">
      <h1 class="footer-header">Follow us</h1>
      <a href="https://www.facebook.com/salonsila87" target="_blank" class="clickable fa  fa-facebook" style="font-size:25px"></a>
      <a href="https://www.instagram.com/salonsila_aarhus/" target="_blank" class="clickable fa  fa-instagram" style="font-size:25px"></a>
    
    </div>
    </div>
      </div>
    
      <div class="footer-left-side">
        <h1 class="footer-header">Find us at</h1>
        <h2 class="footer-text"><i class="fa fa-map-marker" style="font-size:25px"></i> Guldsmedgade 19, 8000 Aarhus C</h2>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="387" height="305" id="gmap_canvas" src="https://maps.google.com/maps?q=Guldsmedgade%2019,%208000%20Aarhus%20C&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe><br><a href="https://www.embedgooglemap.net"></a></div></div>
          </div>
    </div>
      <div class="footer-data">
        <div class="footer-policy">
       <a class="footer-policy-terms-text" href="error404.html">Privacy policy</a>
        </div>
        <div class="footer-rights">
        <p>© 2022 Salon Sila. All rights reserved.</p>
        </div>
        <div class="terms">
          <a class="footer-policy-terms-text" href="error404.html">Terms of use</a>
        </div>
      </div>
      </footer>
        `;
    }
}
window.customElements.define('footer-page' , Footer)