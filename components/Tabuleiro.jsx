import styles from '../styles/Tabuleiro.module.css'
import Black_1st from './Black_1st'
import Black_2st from './Black_2st'
export default function Tabuleiro(){
  return (
    <div >
      <div className={styles.background}>
      <div className={styles.line}>
      <Black_1st />
      <Black_1st />
      <Black_1st />
      <Black_1st />
      </div>
      <div className={styles.line}>
      <Black_2st />
      <Black_2st />
      <Black_2st />
      <Black_2st />
      </div>
      <div className={styles.line}>
      <Black_1st />
      <Black_1st />
      <Black_1st />
      <Black_1st />
      </div>
      <div className={styles.line}>
      <Black_2st />
      <Black_2st />
      <Black_2st />
      <Black_2st />
      </div>
      <div className={styles.line}>
      <Black_1st />
      <Black_1st />
      <Black_1st />
      <Black_1st />
      </div>
      <div className={styles.line}>
      <Black_2st />
      <Black_2st />
      <Black_2st />
      <Black_2st />
      </div>
      <div className={styles.line}>
      <Black_1st />
      <Black_1st />
      <Black_1st />
      <Black_1st />
      </div>
      <div className={styles.line}>
      <Black_2st />
      <Black_2st />
      <Black_2st />
      <Black_2st />
      </div>
      </div>
    </div>
  )
}