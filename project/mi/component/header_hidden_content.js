import styles from "../styles/header_hidden_content.module.css"


export default function Hidden_content(props) {
    const card=(prop)=>
        <div className={styles.card}>
            <img className={styles.card_img} src={prop.src}></img>
            <p className={styles.card_name}> {prop.name}</p>
            <p className={styles.card_price}>{prop.price}</p>
        </div>
    ;
    return (
        <div className={styles.container}>
            { props.map( (prop)=>{return card(prop)}) }
        </div>
    )
}