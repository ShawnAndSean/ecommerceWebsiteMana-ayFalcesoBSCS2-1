const createFooter = () => {

    let footer = document.querySelector('.footer-container');

    footer.innerHTML = `
        <section class="footer-container">
            <div class="footer">
                <div class="footer-heading footer-1">
                <a class="footer-logo">
                <img src="../images/logo-2.png">
                 </a>
                    <h3>Download our App</h3>
                    <p>Download now in Android and IOS</p>
                    <br>
                    <div class="app-logo">
                        <a href="https://www.apple.com/ph/app-store/">
                            <img src="../images/misc/app-store.png">
                        </a>
                        <a href="https://play.google.com/store">
                            <img src="../images/misc/playstore.png">
                        </a>
                        <br>
                        <br>
                        <p>By Shawn Florida-Mana-ay & Glen Falceso</p>
                        <br>
                    </div> 
                </div>
                <div class="footer-heading footer-2">
                    <h3>Contact Us</h3>
                    <a href="https://www.facebook.com/">Support</a>
                    <a href="https://www.facebook.com/">Sponsorships</a>
                    <a href="https://www.facebook.com/">Partnerships</a>
                    <a href="https://www.facebook.com/">Events</a>
                </div>
                <div class="footer-heading footer-3">
                    <h3>Social Media Links</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.reddit.com/">Reddit</a>
                    <a href="https://www.youtube.com/">Youtube</a>
                    <a href="https://www.twitter.com/">Twitter</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                </div>
                <div class="footer-heading footer-email-form">
                    <h3>Join Newsletter</h3>
                    <div>
                        <input type="email" id="footer-email" placeholder="Enter your Email">
                    </div>
                    <input type="submit" value="Sign Up" name="" id="footer-email-btn">
                    <br>
                    <a href="https://www.facebook.com/">Terms and Services</a>
                    <a href="https://www.facebook.com/">Policies</a>
                    <p>© Sports & Melvin | 2022 
                </div>
                
            </div>
        </section>
    `;
}


createFooter();