import styles from '../styles/singlePic.module.css'
export default function singlePic(props){
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
            <div className={styles.pic}>
                <img src={props.image_url} alt="image"></img>
            </div>
        </div>
    )      
}