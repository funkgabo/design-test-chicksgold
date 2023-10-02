import './styles.css'

export const Header = () => {
    return (
        <div className='navContainer'>
            <nav className='navigation'>
                <div className='chicksgold-brand-logo-container'>
                <div className='b-menu'>
                    <img src='/src/assets/b-menu.png' />
                </div>
                    <img src='/src/assets/chicks-logo-large.svg' alt='chicksgold-brand-logo' />
                </div>
                <div className='navigation-menu-container'>
                    <ul className='menu-options'>
                        <li>
                            <div className='menu-option'>
                                <span>CURRENCY</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>ITEMS</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>ACCOUNTS</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>SERVICES</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>SWAP</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>SELL</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                    </ul>
                    <ul className='menu-actions'>
                        <li>
                            <div className='menu-option'>
                                <span>USD</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='menu-option'>
                                <span>CART (5)</span>
                                <img src='/src/assets/arrow-down.svg' />
                            </div>
                        </li>
                        <li>
                            <div className='signin-button'>
                                <span>SIGN IN</span>
                                <img src='src/assets/profile.webp' />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
