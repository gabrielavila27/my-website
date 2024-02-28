import { useState, useEffect} from 'react'
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import Languages from './components/Languages/Languages';
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {

  const[profileData, setProfileData] = useState(null);
  // const[repoData, setRepoData] = useState(null)
  


  useEffect(() => {

    const gitApiUrl = 'https://api.github.com/users/gabrielavila27'

    const getGitHubApi = async () => {
      try{
      // const [getData, getDataRepo] = await Promise.all([fetch(gitApiUrl), fetch(`${gitApiUrl}/repos`)])
      const getData = await fetch(gitApiUrl);
      // const getDataRepo = await fetch(`${gitApiUrl}/repos`)
      const dataJson = await getData.json()
      // const dataRepoJson = await getDataRepo.json();
      console.log(dataJson) ;  
      // console.log(dataRepoJson)
      setProfileData(dataJson)
      // setRepoData(dataRepoJson)
    }
      catch(error){
        console.log('erro = ' + error)
    }}
     getGitHubApi()
}, []);
  


  return (
    <div>
      <Header/>

      <Main image={profileData? profileData.avatar_url : ''} text={profileData? profileData.name : ''}/>

      <AboutMe />

      <Languages/>

      <Projects />
      
      <Footer/>
    </div>
  )
}

export default App
