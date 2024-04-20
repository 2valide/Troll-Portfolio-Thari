import Link from "next/link";
import Styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <div className={`${Styles.Container}`}>
          <ul>
            <Link href="/">
              <li className={Styles.FirstContent}>ImThari</li>
            </Link>
            <Link href="/produit">
              <li>Produit</li>
            </Link>
            <Link href="/panier">
              <li>Panier</li>
            </Link>
            <Link href="/aligato">
              <li>Merci !</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}
