import styles from './App.module.css';
import Parent from './layouts/Parent/Parent';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Parent />
    </div>
  );
}

export default App;
