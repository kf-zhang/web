import styles from '../styles/goods_card.module.css'
import Link from 'next/link'
export default function Card(props){
    return (
        <div className={styles.card}>
            <Link href="/goods">
                <a>
                    <img className={styles.image} src={props.src}></img>
                    <p className={styles.card_name}> {props.name}</p>
                    <p className={styles.card_price}>{props.price}</p>
                </a>
            </Link>
        </div>
    )
}