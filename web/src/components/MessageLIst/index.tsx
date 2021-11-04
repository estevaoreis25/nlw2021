import styles from './style.module.scss'
import logoImg from '../../assets/logo.svg'


export function MessageList(){
  return(
    <div className= {styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021"/>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento</p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/estevaoreis25.png" alt="Estevao Reis" />
            </div>
            <span>Estevao Reis</span>

          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento</p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/estevaoreis25.png" alt="Estevao Reis" />
            </div>
            <span>Estevao Reis</span>

          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento</p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/estevaoreis25.png" alt="Estevao Reis" />
            </div>
            <span>Estevao Reis</span>

          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento</p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/estevaoreis25.png" alt="Estevao Reis" />
            </div>
            <span>Estevao Reis</span>

          </div>
        </li>
      </ul>
    </div>
  )
}