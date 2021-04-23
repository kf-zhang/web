import styles from "../styles/music_list.module.css"
let p=[
    {music_name:"Red",singer:"Taylor Swift",time:"3:43"},
    {music_name:"Welcome to New York",singer:"Taylor Swift",time:"3:32"},
    {music_name:"Love Story",singer:"Taylor Swift",time:"3:31"}
]
{/* <li className={styles.music_list_entry}>
<p className={styles.music_list_entry_name}>item.music_name</p>
<p className={styles.music_list_entry_singer}>item.singer</p>
<p className={styles.music_list_entry_time}>item.time</p>
</li> */}
export default function Music_list(props){
    
    return (
        <ul className={styles.music_list}>
            {
                props.map(
                    (item)=>{
                        return (
                            <li className={styles.music_list_entry} key={props.indexOf(item)}>
                                <p className={styles.music_list_entry_name}>{item.music_name}</p>
                                <p className={styles.music_list_entry_singer}>{item.singer}</p>
                                <p className={styles.music_list_entry_time}>{item.time}</p>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}