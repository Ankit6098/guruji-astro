function Footer() {
  return (
    <footer>
        <div className="inner-footer-container">
            <div className="section1">
                <div className="footer-logo">
                    <img src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg" alt="logo" />
                    <span>Guruji</span>
                </div>
                <p>About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works</p>
                <div className="social">
                    <img src="   https://cdn-icons-png.flaticon.com/512/3128/3128304.png " alt="" />
                    <img src="   https://cdn-icons-png.flaticon.com/512/4138/4138124.png " alt="" />
                    <img src="   https://cdn-icons-png.flaticon.com/512/733/733579.png " alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" />
                </div>
                <div className="trusted-container">
                    <span>Trusted & Seals</span>
                    <div className="trusted">
                        <img src="https://user-images.githubusercontent.com/99132893/233533868-98a66dee-e89a-4808-a063-6950d56e44ee.png" alt="" />
                    </div>
                    <div className="trusted">
                        <img src="https://user-images.githubusercontent.com/99132893/233534257-7f116a53-c2ce-4b77-8968-e645ea695572.png" alt="" />
                    </div>
                    <div className="trusted">
                        <img src="https://user-images.githubusercontent.com/99132893/233534524-2b9740c3-06a5-4eb1-a4e3-2ef496d8475a.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="section2">
                <h4>Company</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">T & C</a></li>
                    <li><a href="">Verified Payment</a></li>
                </ul>
                <h4>Collabrate</h4>
                <ul>
                    <li><a href="">Clear Top</a></li>
                    <li><a href="">Exotel</a></li>
                    <li><a href="">Faceboox</a></li>
                    <li><a href="">Quora</a></li>
                    <li><a href="">Google</a></li>
                    <li><a href="">Youtube</a></li>
                </ul>
            </div>
            <div className="section3">
                <h4>Support</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">T & C</a></li>
                    <li><a href="">Verified Payment</a></li>
                </ul>
                <h4>Important Link</h4>
                <ul>
                    <li><a href="">Tarot Reader</a></li>
                    <li><a href="">Vedic Astrology</a></li>
                    <li><a href="">Palmistry</a></li>
                    <li><a href="">Gemology</a></li>
                    <li><a href="">Vastu</a></li>
                    <li><a href="">Numerology</a></li>
                </ul>
            </div>
            <div className="section4">
                <input type="text" placeholder="Name" required className="name-input"/>
                <input type="email" name="" id="" placeholder="Email" required className="email-input"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="message-input"></textarea>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    </footer>
  );
}

export default Footer;