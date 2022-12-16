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
        <Header data={data['personal-details']}/>
        <Hello summary={data['personal-details'].summary}/>
        <hr/>
        <Resume skills={data['skills']} education={data['education']} experience={data['experience']}/>
        <Projects projects={data['projects']} categories={data['categories']}/>
        <Footer data={data['personal-details']}/>
      </div> 
  );
}


export default App;
