import './styles.css'

export const Footer = () => {
    return (
        <footer>
            <div className='payment-methods-container'>
                <div className='payment-methods'>
                    <div>
                        <img src='/src/assets/visa.png' />
                    </div>
                    <div>
                        <img src='/src/assets/m-card.png' />
                    </div>
                    <div>
                        <img src='/src/assets/a-express.png' />
                    </div>
                    <div>
                        <img src='/src/assets/skrill.png' />
                    </div>
                    <div>
                        <img src='/src/assets/b-coins.png' />
                    </div>
                    <span>and 50+ more</span>
                </div>
            </div>
            <div className='social-media-container'>
                <div className='social-media'>
                    <div>
                        <img src='/src/assets/fb.png' />
                    </div>
                    <div>
                        <img src='/src/assets/ig.png' />
                    </div>
                    <div>
                        <img src='/src/assets/twt.png' />
                    </div>
                    <div>
                        <img src='/src/assets/dc.png' />
                    </div>
                </div>
            </div>
            <div className='services-container'>
                <div className='services'>
                    <div className='others responsive-grow'>
                        <div className='others-title'>
                            <img src='/src/assets/chicks-logo-large.svg' alt='Chicksgold Brand Logo' />
                        </div>
                        <span className='support-email'>support@chicksgold.com</span>
                    </div>
                    <div className='others'>
                        <div className='others-title'>
                            <p>Chicks Gold</p>
                            <span>Games</span>
                            <span>About Us</span>
                            <span>Blog</span>
                            <span>Sitemap</span>
                        </div>
                    </div>
                    <div className='others'>
                        <div className='others-title'>
                            <p>Support</p>
                            <span>Contact Us</span>
                            <span>FAQ</span>
                        </div>
                    </div>
                    <div className='others'>
                        <div className='others-title'>
                            <p>Legal</p>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Copyright Policy</span>
                        </div>
                    </div>
                    <div className='others flex-direction'>
                        <div className='trust-stars-container'>
                            <img className='star' src='/src/assets/star.png' alt='Star' />
                            <img className='star' src='/src/assets/star.png' alt='Star' />
                            <img className='star' src='/src/assets/star.png' alt='Star' />
                            <img className='star' src='/src/assets/star.png' alt='Star' />
                            <img className='star' src='/src/assets/star.png' alt='Star' />
                        </div>
                        <div>
                            <span className='trusted'>Trustpilot Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rights'>
                <p>© 2017 - 2023 Chicksgold.com. All Rights Reserved</p>
            </div>
        </footer>
    );
}
