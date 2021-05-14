import styles from '../styles/good_list..module.css'
import Card from './goods_card'
export default function Goods_list(props_list){
    return (
        <div className={styles.container}>
            <div class = 'home-banner-box'>
                <a href="#">
                    <img  className={styles.card_image} src="red_mi.jpg" alt=""/>
                </a>
            </div>
            <div className={styles.goods_list_head}>
                <h2 className={styles.list_name}>手机</h2>
                <a href="#" target="_blank" class={styles.more_link}>
                    查看更多
                    <i className={styles.arrow_right}></i>
                </a>
            </div>
            <div className={styles.goods_list}>
                {
                    props_list.map(
                        (prop)=>{
                            return Card(prop)
                        }
                    )
                }
            </div>
        </div>
    )
}

// export default function Goods_list(props_list){}