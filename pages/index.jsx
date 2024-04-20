import Header from "../components/Header";
import Styles from "../styles/Page.module.css";

export default function Page() {
  return (
    <>
      <Header />
      <main className={`${Styles.main}`}>
        <h1>Bonsoir,</h1>
        <h1>Vous chercher de l'or ?</h1>
      </main>
    </>
  );
}
