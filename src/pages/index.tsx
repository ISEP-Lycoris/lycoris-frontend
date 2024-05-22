import styles from "./index.module.css";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          Hello World !
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '200px', }}>
        </div>
      </main>
    </>
  )
}
