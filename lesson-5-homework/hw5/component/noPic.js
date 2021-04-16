import styles from '../styles/noPic.module.css'
export default function NoPic(props){
    return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2>
                {props.title}
            </h2>
            <div className={styles.info}>
                {props.source} 评论 {props.comments_count} 
            </div>
        </div>
    </div>
    )
}