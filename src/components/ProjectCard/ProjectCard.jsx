import styles from './ProjectCard.module.css'
import {Star, GitFork, Eye} from '@phosphor-icons/react'
import codeIcon from '../../assets/images/code.png'

function ProjectCard({name, description, watchers, forks, stars, date, url, language}){

    const languageIcons = (item) => {
        if(item !== null && item !== undefined){
             const lowerCase = item.toLowerCase();
             if(lowerCase === 'jupyter notebook'){
                 return <div><img src=' https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg' alt={item} title={item} className={styles.icon}/></div>
             } else if(item === 'HTML'){
                 return <img src=' https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' alt='HTML5' title='HTML5' className={styles.icon}/>
             } else if(item === 'CSS'){
                 return <img src=' https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' alt='CSS3' title='CSS3' className={styles.icon}/>
             }else{
             const lower = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lowerCase}/${lowerCase}-original.svg`
             return <img src={lower} alt={item} title={item} className={styles.icon}/>
         }
         } else{
             return <span><img src={codeIcon} alt='Linguagem não informada' title='Linguagem não informada' className={styles.icon} /></span>
         }
     }

    return(
        <div className={styles.container}>
          
                <h3 className={styles.title}><a href={url} target='_blank'>{name}</a></h3>
   
            <p className={styles.description}>{description? description : `Projeto feito em ${language}`}</p>
            <ul className={styles.list}>
                <li title='Watchers'> <Eye/> {watchers}</li>
                <li title='Forks'><GitFork/> {forks}</li>
                <li title='Stars'><Star/> {stars}</li>
            </ul>

            {languageIcons(language)}

            <a href={url} className={styles.buttonLink} target='_blank'><button className={styles.button}>Visitar</button></a>
        </div>
    )
}

export default ProjectCard;