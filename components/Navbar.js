import Link from 'next/link'
import styles from '../assets/css/Navbar.module.css'

const Navbar = () => (
    <div className={styles.nav}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link href="/">
                    <a className="nav-item nav-link active">Home<span className="sr-only">(current)</span></a>
                </Link>
                <Link href="/about">
                    <a className="nav-item nav-link">About</a>
                </Link>
            </div>
        </div>
        </nav>
    </div>
);

export default Navbar