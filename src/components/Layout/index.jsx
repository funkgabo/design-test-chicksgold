import { Footer } from '../Footer';
import { Header } from '../Header';
import './styles.css'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
