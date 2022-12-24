import { useContext } from 'react'
import Menu from './components/Menu'
import Hello from './components/Hello'
import Header from './components/Header'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ApiContext } from './utils/ApiContext'

function App() {
  const data = useContext(ApiContext)
  return (
      <div className='App'>
        <Menu/>
        <Header data={data['personal-details']} social={data['social-media']}/>
        <Hello summary={data['personal-details'].summary} cv_link={data['personal-details'].cv}/>
        <hr/>
        <Resume skills={data['skills']} education={data['education']} experience={data['experience']}/>
        <Projects projects={data['projects']} categories={data['categories']}/>
        <Footer data={data['personal-details']} social={data['social-media']}/>
      </div> 
  );
}


export default App;
