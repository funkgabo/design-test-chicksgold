import './styles.css'

export const Pagination = () => {
    const pagNumbers = [1, 2, 3, 4, '...', 11]
    return (
        <div className='pagination-container'>
            <div className='left-arrow-container'>
                <img src='./src/assets/left-arrow.svg' alt='left arrow' />
            </div>
            <div className='pagination-numbers-container'>
                {pagNumbers.map(item => (
                    <div key={item} className='pagination-number'>{item}</div>
                ))}
            </div>
            <div className='right-arrow-container'>
                <img src='./src/assets/right-arrow.svg' alt='left arrow' />
            </div>
        </div>
    );
}
