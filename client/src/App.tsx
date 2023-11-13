import { Navbar } from './components';
import { About, Footer, Header, Projects, Skills } from './containers';
import './App.scss';
import { AppWrapper } from './wrapper';

function App() {
  return (
    <div className='app'>
      <AppWrapper>
        <Navbar />
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
