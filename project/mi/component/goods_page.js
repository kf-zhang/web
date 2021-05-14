import styles from '../styles/goods_page.module.css'
import React, { useState } from "react"
let props={
    name:"Redmi K40 游戏增强版",
    goods_des:"「火热预约中！5月7日上午10:00再次开售」天玑1200年度旗舰处理器｜弹出式肩键｜航天立体散热｜JBL立体声双扬声器｜64MP旗舰三摄",
    goods_price:"2399元"
}
export default function Goods_page(props){
    const [price_1,setPrice_1]=useState(0)
    const [price_2,setPrice_2]=useState(0)
    const [click_item_1,set_click_item_1]=useState(0)
    const [click_item_2,set_click_item_2]=useState(0)
    const onClick1=(e)=>{setPrice_1(e.target.value);console.log(e.target.value);}
    return (
        <div className={styles.goods_page}>
            <div className={styles.left}>
                <img src="goods.png" className={styles.left_image}>

                </img>
            </div>
            <div className={styles.right}>
                <div className={styles.right_up}>
                    <h3 className={styles.goods_name}>
                        {props.name}
                    </h3>
                    <p className={styles.goods_des}>
                        {props.goods_des}
                    </p>
                    <p className={styles.goods_price}>
                        {props.goods_price}
                    </p>
                </div>
                <div className={styles.right_bottom}>
                    <div className={styles.choose_version}>
                        <p>选择版本</p>
                        <ul className={styles.version_list}>
                            <li key={1} className={styles.version_item} style={click_item_1==1?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_1(1000);set_click_item_1(1); }}> 12GB+256G</li>
                            <li key={2} className={styles.version_item} style={click_item_1==2?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_1(1100);set_click_item_1(2);}}> 8GB+128G</li>
                            <li key={3} className={styles.version_item} style={click_item_1==3?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_1(1200);set_click_item_1(3);}}> 8GB+256G</li>
                            <li key={4} className={styles.version_item} style={click_item_1==4?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_1(1300);set_click_item_1(4);}}> 6GB+256G</li>
                            <li key={5} className={styles.version_item} style={click_item_1==5?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_1(1400);set_click_item_1(5);}}> 6GB+128G</li>
                        </ul>
                    </div>
                    <div className={styles.choose_color}>
                        <p>选择颜色</p>
                        <ul className={styles.color_list}>
                            <li key={1} className={styles.color_item} style={click_item_2==1?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_2(999);set_click_item_2(1); }}>暗影</li>
                            <li key={2}className={styles.color_item} style={click_item_2==2?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_2(1099);set_click_item_2(2); }}>光刃</li>
                            <li key={3} className={styles.color_item} style={click_item_2==3?{color:"#ff5700",border:"1px solid #ff5700"}:{} } onClick={e=>{setPrice_2(1199);set_click_item_2(3); }}>银翼</li>
                        </ul>
                    </div>
                    <div className={styles.total_price}>
                        <p className={styles.total_price_des}>
                            {props.name}
                        </p>
                        <p className={styles.total_price_content}>
                            总计:{price_1+price_2}元
                        </p>
                    </div>
                    <p className={styles.pay}>
                            购买
                    </p>
                </div>
            </div>
        </div>
    )
}