import './styles.css'

export const QuickFilter = ({icon, TitleLabel, settedLabel}) => {
    return (
        <div className='quick-filter-container'>
            <div className='quick-filter-img'>
                <img src={icon} alt='sword-icon' />
            </div>
            <div className='quick-filter-name'>
                <span className='quick-filter-text'>{TitleLabel}</span>
                <span>{settedLabel}</span>
            </div>
            <div className='quick-filter-arrow'>
                <img src='./src/assets/arrow-down2.svg' alt='arrow' />
            </div>
        </div>
    );
}
