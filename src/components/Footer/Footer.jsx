import styles from './Footer.module.css'
import Header from '../Header/Header'

function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={`${styles.footerContainer} container`}>

                <section>
                    <nav className={styles.navMenu}>
                        <ul className={styles.list}>
                            <li> <a href="#aboutMe">Sobre</a> </li>
                            <li> <a href="#projects">Projetos</a> </li>
                            <li> <a href="#contact">Contato</a> </li>
                         </ul>
                    </nav>
                </section>
                <section className={styles.sectionContact}>
                    <h3>Minhas Redes Sociais:</h3>
                    <ul className={styles.listContact}>
                        <li><a href="https://www.linkedin.com/in/gabriel-avila-10a077218/" target='_blank' rel='external'><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='LinkedIn' title='LinkedIn'/></a></li>
                        <li><a href="mailto:mmercia.menezes@gmail.com" target='_blank' rel='external'><img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Gmail' title='Gmail'/></a></li>
                        <li><a href="https://www.github.com/gabrielavila27" target='_blank' rel='external'><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='GitHub' title='GitHub'/></a></li>
                    </ul>
                </section>

            </div>

        </footer>
    )
}

export default Footer