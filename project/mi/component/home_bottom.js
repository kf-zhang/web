import styles from '../styles/home_bottom.module.css'
export default function Home_bottom(){
    return (
        <div className={styles.home_bottom}>
            <ul className={styles.left}>
                <li>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_1.png">
                        </img>
                        小米秒杀
                    </a>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_2.png">
                        </img>
                        企业团购
                    </a>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_3.png">
                        </img>
                        F码通道
                    </a>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_4.png">
                        </img>
                        米粉卡
                    </a>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_5.png">
                        </img>
                        以旧换新
                    </a>
                    <a className={styles.left_content}>
                        <img className={styles.left_image} src="icon_6.png">
                        </img>
                        话费充值
                    </a>
                </li>
            </ul>
            <div className={styles.right}>
                <ul className={styles.right_image_list}>
                    <li className={styles.right_item}>
                        <img src="right_1.jpg" className={styles.right_image}>

                        </img>
                    </li> 
                    <li>
                        <img src="right_2.jpg" className={styles.right_image}>

                        </img>
                    </li> 
                    <li>
                        <img src="right_3.jpg" className={styles.right_image}>

                        </img>
                    </li> 
                </ul>
            </div>
        </div>
    )
}