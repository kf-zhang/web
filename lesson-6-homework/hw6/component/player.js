import styles from '../styles/player.module.css'

export default function Player(props){
    console.log(props)
    return (
        <div className={styles.player}>
        <img className={styles.music_img} src={props.img_src}/>
        <div className={styles.music_info}>
            <h3 className={styles.music_name}>{props.music_name}</h3>
            <h3 className={styles.musician}>{props.singer}</h3>
        </div>
        <div className={styles.player_icon}>
            <img src="Arrow-left.svg"/>
            <img src="pause.svg"/>
            <img src="Arrow-right.svg"/>
        </div>
    </div>
    )
}