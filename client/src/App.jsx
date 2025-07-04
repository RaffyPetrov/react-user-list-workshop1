import {Header} from './components/common/Header.jsx';
import {Footer} from './components/common/Footer.jsx';
import {Search} from './components/search/Search.jsx';
import {UserSection} from './components/user-section/UserSection.jsx';
import './styles.css'




function App() {

    return (
      <div>
        <Header />

        <main className="main">
          <section className="card users-container">
            <Search />
          </section>

          <UserSection />
        </main>
        <Footer />
      </div>
    )}

export default App;
