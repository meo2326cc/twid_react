import Nav from './component/nav'
import News from './component/news'
import { Candidate } from './component/candidate';
import { Banner , Footer, Intro , Intro2 } from './component/component';
import './scss/all.scss';


function App() {

  return (
<>
    <Nav/>
    <Banner/>
    <News/>
    <Intro/>
    <Candidate/>
    <Intro2/>
    <Footer/>
</>
  )
}
export default App
