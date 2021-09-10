import Navigation from '../Navigation';
import { header } from './AppBar.module.css';

export default function AppBar() {
    return (
        <header className={header}>
            <Navigation />
        </header>
    );
}
