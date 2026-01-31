import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://img.freepik.com/fotos-gratis/carro-de-super-heroi-em-estilo-vintage_23-2151636133.jpg?semt=ais_user_personalization&w=740&q=80">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
