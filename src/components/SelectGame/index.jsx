import './styles.css'

export const SelectGame = () => {
    return (
        <div className='select-game'>
            <div className='select-game-img'>
                <img src='/src/assets/sword-icon.svg' alt='sword-icon' />
            </div>
            <div className='select-game-name'>
                <span>Select game</span>
            </div>
            <div className='select-game-arrow'>
                <img src='/src/assets/arrow-down2.svg' alt='arrow' />
            </div>
        </div>
    );
}
