import styles from './AboutMe.module.css'
import crv from '../../assets/images/gabriel_avila_crv_2024.jpg'
import crvPdf from '../../assets/gabriel-avila-crv-2024.pdf'

function AboutMe(){

    const graduation = () =>{
        const time = new Date();
        const year = time.getFullYear();

        if(year >= 2026){
            const graduationMenssage = 'No inicio do ano de 2021 decidi aprender sobre programação. Comecei a aprender uma linguagem chamada Python, através de aulas no youtube. A partir daí, posso dizer que fiquei encantado pelo mundo da programação e tecnologia. A ideia de poder criar programas, sites me pareceu incrível. Na metade do mesmo ano decidi começar a faculdade de ciência da computação, na qual me graduei no fim de 2025.'
            console.log(graduationMenssage)
            return graduationMenssage
        } else{
            const menssage = 'No inicio do ano de 2021 decidi aprender sobre programação. Comecei a aprender uma linguagem chamada Python, através de aulas no youtube. A partir daí, posso dizer que fiquei encantado pelo mundo da programação e tecnologia. A ideia de poder criar programas, sites me pareceu incrível. Na metade do mesmo ano decidi começar a faculdade de ciência da computação, na qual me encontro atualmente no 6º período, com previsão de conclusão para o fim de 2025.'
            return menssage
        }
    }

    
    return(
        <section className={`${styles.containerAboutMe} container`}>

            <div id='aboutMe' className={styles.divAboutMe}>

                <div className={styles.divTxtAboutMe}>
                    <h2>Sobre mim</h2>

                    <p>{graduation()}</p>

                    <br/>

                    <p>Clique no botão abaixo para realizar o download do meu currículo</p>

                    <br/>

        
                    <a href={crvPdf} download={true}>

                        <button>Download</button>

                    </a>

                </div>

                <div className={styles.divCrv}>

                    <a href={crvPdf} rel='me' target='_blank'> 

                        <img src={crv} alt='Currículo Download' title='Currículo Gabriel Ávila'/>

                    </a>

                </div>

            </div>

        </section>
    )
}

export default AboutMe;