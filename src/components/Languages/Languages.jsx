import styles from './Languages.module.css'

function Languages(){

    return(
        
    <section className={styles.containerPl}>

        <section id='#languages' className={`${styles.divPl} container`}>

            <div className={styles.divStats}>
                <a href="https://github.com/gabrielavila27" rel='external' target='_blank'>
                    <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabrielavila27&theme=dark" alt='Gráfico Linguagens mais usadas' title = 'Gráfico de linguagens'/>
                </a>
            </div>
        
            <div className={styles.divTxtStats}>
                <h2 className={styles.titleTxtStats}>Tecnologias</h2>
                <p className={styles.txtStats}>Estas são as tecnologias/linguagens de programação que mais tenho utilizado em meus projetos: Javascript, Java, CSS, Python e HTML.</p>
                <br/>
                <p>Além das tecnologias citadas acima, também tenho conhecimento em PostgreSQL, React e ReactNative</p>
        
                <div className={styles.divPlImage}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='HTML5' title='HTML5'  className={styles.plImage}/>
        
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' alt='CSS3' title='CSS3' className={styles.plImage}/>
        
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' alt='Javascript' title='Javascript' className={styles.plImage}/>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' alt='React' title='React' className={styles.plImage}/>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' alt='Java' title='Java' className={styles.plImage}/>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' alt='Python' title='Python' className={styles.plImage}/>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' alt='PostgreSQL' title='PostgreSQL' className={styles.plImage}/>
        
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git' title='Git' className={styles.plImage}/>
        
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub' title='GitHub' className={styles.plImage} style={{backgroundColor: '#fff', borderRadius: '2rem'}}/>
                </div>

            </div>

        </section>

    </section>
    )
}

export default Languages;