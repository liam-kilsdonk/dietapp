import styles from './page.module.css'
import Navigator from './navigator'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigator />
    </main>
  )
}
