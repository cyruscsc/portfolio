import { Navbar } from './components';
import { About, Footer, Header, Projects, Skills } from './containers';
import './App.scss';
import { AppWrapper } from './wrappers';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <AppWrapper>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </AppWrapper>
    </div>
  );
}

export default App;
