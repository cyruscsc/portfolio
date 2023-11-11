import { Navbar } from './components';
import { About, Footer, Header, Projects, Skills } from './containers';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
