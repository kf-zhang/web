import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Topbar from '../component/topbar'
import Header from '../component/header_test'
import Hidden_content from '../component/header_hidden_content'
import Slide_show from '../component/slide_show'
import Home_bottom from '../component/home_bottom'
import Goods_list from '../component/goods_list'
import Goods_page from '../component/goods_page'
import {  Carousel  } from 'antd'

const contentStyle = {
    margin:'0 auto',
    width:'1250px',
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


export default function Goods(){
  let props={
    name:"Redmi K40 游戏增强版",
    goods_des:"「火热预约中！5月7日上午10:00再次开售」天玑1200年度旗舰处理器｜弹出式肩键｜航天立体散热｜JBL立体声双扬声器｜64MP旗舰三摄",
    goods_price:"2399元"
}

    return (
        <div>
            {Topbar()}
            {Header()}
            {Goods_page(props)}
            {/* {Slide_show()}
            {Home_bottom()}
            {Goods_list(props)}
            {Goods_list(props)} */}
        </div>
     
      )
}