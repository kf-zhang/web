import styles from '../styles/labels.module.css'
export default function Labels(){
    return (
        <div className={styles.labelContainer}>
            <div className={styles.label}>
                <a>推荐</a>
            </div>
            <div className={styles.label}>
                <a>视频</a>
            </div>
            <div className={styles.label}>
                <a>热点</a>
            </div>
            <div className={styles.label}>
                <a>社会</a>
            </div>
            <div className={styles.label}>
                <a>娱乐</a>
            </div>
            <div className={styles.label}>
                <a>军事</a>
            </div>
        </div>
    )
}