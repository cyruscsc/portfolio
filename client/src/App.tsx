import { About, Contact, Header, Projects, Skills } from './containers';
import { AppWrapper } from './wrappers';
import { Navbar, Footer } from './components';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <AppWrapper>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </AppWrapper>
      <Footer />
    </div>
  );
}

export default App;
