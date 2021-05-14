import styles from '../styles/topbar.module.css'

export default function Topbar(){
    return (
        <div className={styles.site_topbar}>
                        <div className={styles.container}>
                            <div className={styles.topbar_nav}>
                                <a rel="nofollow" href="#" className={styles.topbar_nav_a}>小米商城</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>MIUI</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>IoT</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>云服务</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>金融</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>有品</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>小爱开放平台</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>企业团购</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>资质证照</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>协议规则</a>
                                {/* <span class="sep">|</span> */}
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>下载app</a>
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>智能生活</a>
                                <a rel="nofollow" href="#" target="_blank" className={styles.topbar_nav_a}>Select location</a>
                            </div>
                            <div class={styles.topbar_info} id="J_siteUserInfo">
                                <a href="#" class="link">登录</a>
                                
                                <a href="#" class="link">注册</a>
                                <a href="#" class="link">消息通知</a>
                            </div>
                            <div class={styles.topbar_cart} id="J_miniCartTrigger">
                                <a rel="nofollow" class="cart-mini" id="J_miniCartBtn">
                                    <em class="iconfont-cart"></em><em class="iconfont-cart-full hide"></em>购物车<span class="cart-mini-num J_cartNum"></span>
                                    <em class="iconfont-cart-full-hide"></em>
                                    <span class="cart-mini-num-J_cartNum">(0)</span>
                                </a>
                                <div class={styles.cart_menu} id="J_miniCartMenu">
                                    <div class="menu-content">
                                        <div class="loading"><div class="loader"></div></div>
                                        <ul class="cart-list-hide" id="J_miniCartList"></ul>
                                        <div class="cart-total-clearfix-hide" id="J_miniCartListTotal"></div>
                                        <div class="msg-msg-error-hide"></div>
                                        <div class="msg-msg-empty-hide">购物车中还没有商品，赶紧选购吧！</div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
    )
}