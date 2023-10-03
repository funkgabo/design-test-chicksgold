import './styles.css'

export const Card = () => {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='sale-container'>
                    <div className='on-sale-container'>
                        <img src='./src/assets/circle.svg' alt='circle' />
                        <span className='on-sale'>ON SALE</span>
                    </div>
                    <div className='in-stock-button'>In stock</div>
                </div>
                <div className='input-number-container'>
                    <input type='number' value={1} />
                    <div className='arrows-container'>
                        <img src='./src/assets/arrow-up.svg' />
                        <img src='./src/assets/downn.svg' />
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <div className='card-img'>
                    <img src='./src/assets/item.png' alt='asset-img' />
                </div>
                <div className='card-content'>
                    <div className='card-body-title-container'>
                        <h6>Blue Partyhat</h6>
                        <img src='./src/assets/wow.png' alt='card-game-logo' />
                    </div>
                    <div className='card-price-container'>
                        <span>$450.00</span>
                        <span className='card-discount'>$522.50</span>
                    </div>
                    <span className='card-description'>Lorem ipsum dolor sit amet consetetur sadipscing elirt.</span>
                </div>
            </div>
            <div className='card-footer'>
                <div className='details-buttion'>
                    <span>DETAILS</span>
                </div>
                <div className='add-buttion'>
                <span>ADD</span>
                <div className='card-cart-container'>
                        <img src='./src/assets/cart.svg' alt='cart image' />
                    </div>
                </div>
            </div>

        </div>
    );
}
