import styles from './Header.module.css'

function Header(){
    return(
    <header className={styles.header}>
        <nav className={styles.navMenu}>
            <ul className={styles.list}>
                <li> <a href="#aboutMe">Sobre</a> </li>
                <li> <a href="#projects">Projetos</a> </li>
                <li> <a href="#contact">Contato</a> </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;