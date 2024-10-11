import Image from "next/image";
import styles from "./page.module.css";
import Posts from "@/app/posts/page";
import Wallets from "@/app/wallets/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wallets />
      </main>

    </div>
  );
}
