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
        <img src={src} style={{margin:"0 auto",width:"70%",height:"20vw"}} />
      </div>
    );
  }
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,           
      lazyLoad:"ondemand"  /*懒加载*/
    };
    return (
      <div>
        <h2>Custom Slides</h2>
        <Slider {...settings}>
          <CustomSlide src={"https://www.venafi.com/sites/default/files/content/blog/2016-07/SSL-TLS-Tunnel-600x200.jpg"} />
          <CustomSlide src={"https://www.ladancechronicle.com/wp-content/uploads/2019/09/thumbnail.jpg"} />
          <CustomSlide src={"https://tse4-mm.cn.bing.net/th/id/OIP.xWBFMFrxKh9wNLt9vd0CzAHaDt?pid=ImgDet&amp"} />
        </Slider>
      </div>
    );
  }
}