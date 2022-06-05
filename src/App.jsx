import Header from './components/Header';
import Main from './components/Main';
import styles from './App.module.css';

const App = () => (
  <div class={styles.root}>
    <Header />
    <Main />
  </div>
)

export default App;
