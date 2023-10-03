import { Card } from '../Card';
import { QuickFilter } from '../QuickFilter';
import { Searcher } from '../Searcher';
import { SelectGame } from '../SelectGame';
import './styles.css'

export const Home = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <main className='main-container'>
            <div className='condimentum-container'>
                <h1 className='title-condimentum'>Condimentum consectetur</h1>
                <div className='filter-bar-container'>
                    <SelectGame />
                    <Searcher />
                    <QuickFilter icon={'/src/assets/bag.svg'} TitleLabel='Price' settedLabel='All' />
                    <QuickFilter icon={'/src/assets/feather.svg'} TitleLabel='Item Type' settedLabel='All' />
                </div>
                <div className='results-table-container'>
                    <div className='header-results-table'>
                        <span className='showing-counter'>Showing 20 - from 125</span>
                        <QuickFilter icon={'/src/assets/controls.svg'} TitleLabel='Sort By' settedLabel='Featured' />
                    </div>
                    <div className='content-resutls-table'>
                        {arr.map(item => (
                            <Card />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
