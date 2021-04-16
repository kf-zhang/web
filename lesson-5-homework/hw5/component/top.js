import styles from '../styles/top.module.css'
import Image from 'next/image'
export default function Top(){
  return (
    <div className={styles.top}>
      <div className={styles.mail}>
            <Image src="/mail.svg" width={40} height={40}/>
      </div>
      <div className={styles.toutiaoHead}>
        今日头条
      </div>
      <div className={styles.search}>
          <Image src="/search.svg" width={40} height={40}/>
      </div>
    </div>
  )
}