import styles from './Main.module.css'

function Main({image}){

    const graduation = () =>{
        const time = new Date();
        const year = time.getFullYear();

        if(year >= 2026){
            const graduationMenssage = 'Olá, Bem vindo ao meu website! Me chamo Gabriel Ávila! sou de Maceió-AL. Sou desenvolvedor, bacharel em ciência da computação. Aqui neste site você poderá conferir um pouco dos meu projetos e algumas curiosidades.'
            return graduationMenssage
        } else{
            const menssage = 'Olá, Bem vindo ao meu website! Me chamo Gabriel Ávila! sou de Maceió, Alagoas. Sou desenvolvedor e estudante de ciência da computação. Aqui neste site você poderá conferir um pouco dos meu projetos e algumas curiosidades.'
            return menssage
        }
    }

    return(
        <main className={styles.mainContainer} >

            <section className={`${styles.main} container`}>
    
    
                <section className={styles.sectionProfile}>
    
                     <div className={styles.divProfileImage}>
                        <img src={image} className={styles.profileImage}/>
                     </div>

                    <div className={styles.divProfileTxt}>

                        <p className={styles.profileTxt}>{graduation()}</p>

                        <a href="#aboutMe">
                            <button>Saiba mais</button>
                        </a>
                        
                    </div>
    
                </section>
    
    
    
                <div className={styles.divPlImage}>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='HTML5' title='HTML5'  className={styles.plImage}/></div>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' alt='CSS3' title='CSS3' className={styles.plImage}/>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' alt='Javascript' title='Javascript' className={styles.plImage}/>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' alt='React' title='React' className={styles.plImage}/>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' alt='Java' title='Java' className={styles.plImage}/>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' alt='Python' title='Python' className={styles.plImage}/>
    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' alt='PostgreSQL' title='PostgreSQL' className={styles.plImage}/>
    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git' title='Git' className={styles.plImage}/>
    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub' title='GitHub' className={styles.plImage}/>
                </div>
            </section>

        </main>
    )
}

export default Main;