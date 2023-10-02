import { QuickFilter } from '../QuickFilter';
import { Searcher } from '../Searcher';
import { SelectGame } from '../SelectGame';
import './styles.css'

export const Home = () => {
    return (
        <main className='main-container'>
            <div className='condimentum-container'>
                <h1 className='title-condimentum'>Condimentum consectetur</h1>
                <div className='filter-bar-container'>
                    <SelectGame />
                    <Searcher />
                    <QuickFilter icon={'/src/assets/bag.svg'} label='Price' />
                    <QuickFilter icon={'/src/assets/feather.svg'} label='Item Type' />
                </div>
                <div className='results-table-container'>
                </div>
            </div>
        </main>
    );
}
