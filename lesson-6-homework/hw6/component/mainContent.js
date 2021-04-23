import styles from "../styles/mainContent.module.css"
import Music_list from "./music_list"
function UpContent(props){
    return (
        <div className={styles.up_content}>
        <img className={styles.album_fig} src="fig.jpg"/>
        <div className={styles.album_container}>
            <div className={styles.album_info}>
                <h3 className={styles.album_name}>
                    Fearless
                </h3>
                <p className={styles.album_artist}>
                    Taylor Swift
                </p>
            </div>
            <div className={styles.album_icon}>
                <img className={styles.album_play_icon}src="play.svg"/>
                <img className={styles.album_add_icon} src="add.svg"/>
            </div>
        </div>
    </div>
    )
}
export default function MainContent(props){
    return (
        <div className={styles.main_content}>

            <div className={styles.right_content}>
                {UpContent(props)}
                {Music_list(props.music_list)}
            </div>
        </div>
    )
}