import { Footer } from '../Footer';
import { Header } from '../Header';
import './Styles.css'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
