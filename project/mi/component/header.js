import styles from "../styles/header.module.css"
export default function Herder(){
    const [hoverable, hovered] = useHover(element);

    return (
        <div className={styles.site_header}>
            <div className={styles.header_logo}>
                <a href="//www.mi.com/index.html" title="小米官网" class="logo ir">
                    <img src="xiaomi_logo.png" className={styles.xiaomi_logo}>
                    </img>
                </a>
            </div>
            <div className={styles.header_items}>
                <a className={styles.a_item}>
                    <span>
                        小米手机
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        Redmi 红米
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        电视
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        笔记本
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        家电
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        路由器
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        智能硬件
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        服务
                    </span> 
                </a>
                <a className={styles.a_item}>
                    <span>
                        社区
                    </span> 
                </a>
            </div>
            <div className={styles.header_search} >
                <input type="search" className={styles.search_input}></input>
                {/* <input type="submit" value="" className={styles.search_submit} ></input> */}
                <input type="image" src="search.png" name="search" className={styles.search_submit}></input>
            </div>
        </div>
    )
}