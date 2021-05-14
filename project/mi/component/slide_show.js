import styles from '../styles/slide_show.module.css'

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class CustomSlide extends Component {
    render() {
      const { src, ...props } = this.props;
  
      
      /*style 处理不同大小图片*/
      return (
        <div {...props} >
          <img src={src} style={{margin:"0 auto",width:"1250px",height:"440px"}} />
        </div>
      );
    }
}
export default function Slide_show(){
    let src_list=["slide_1.jpg","slide2.jpeg","slide_3.jpg"]
    let left_bar_content=["手机 电话卡","电视 盒子","笔记本 显示器",
    "家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音箱","生活 箱包"]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,           
        lazyLoad:"ondemand"  /*懒加载*/
    };
    
    return (
        <div className={styles.slide_show}>
             <ul className={styles.left_bar}>
               {
                    left_bar_content.map(
                        (content)=>{
                                return (
                                    <li className={styles.list_title}>
                                        <a className={styles.left_bar_content}>
                                            {content} 
                                        </a>
                                    </li>
                                )
                            } 
                    )
                }
            </ul>
            {/* <a className={styles.background}>
                <img className={styles.background_img} src={src_list[2]}>
                </img>
            </a> */}
            <div>
                <Slider {...settings}>
                    <CustomSlide src={src_list[2]} />
                    <CustomSlide src={src_list[1]} />
                    <CustomSlide src={src_list[0]} />
                </Slider>
            </div>

        </div>
    )
}