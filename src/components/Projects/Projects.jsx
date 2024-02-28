import styles from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useEffect, useState } from 'react'

function Projects(){

    const [projectData, setProjectData] = useState(null)

  
    useEffect(() => {

        const gitHubApiUrl = 'https://api.github.com/users/gabrielavila27/repos'

        const getProjectData = async () => {
            const getData = await fetch(gitHubApiUrl)
            const data = await getData.json()
            console.log(data)
            setProjectData(data)
        }

        getProjectData()
    }, [])

    return(
        <section id='projects' className={`${styles.sectionProjects} container`}>

            <div className={styles.divProjects}>
    
                <h2>Meus projetos</h2>
    
                    <div className={styles.cards}>
                        {
                            projectData ? projectData.map((item) => <ProjectCard key={item.id} name={item.name} description={item.description} watchers={item.watchers_count} forks={item.forks_count} stars={item.stargazers_count} date={item.created_at} url={item.clone_url} language={item.language}/>)
                            : 'Erro'
                        }
                    </div>
            </div>
                
          
            
        </section>
    )
}

export default Projects