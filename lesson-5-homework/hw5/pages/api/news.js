// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode=200;
  
  // fetch('http://localhost:8080')
  //   .then((response)=> {
  //     return response.json();
  //   })
  //   .then((myJson)=> {
  //     let data=myJson["data"];
  //     res.json=data;
  //     // console.log(res.json)
  //   }).catch( (e) => {
  //     console.log('There has been a problem with your fetch operation: ' + e.message);
  //   });

  res.json({
    code:200,
    data:[
      {
        abstract: "H&M集团以有关组织恶意抹黑中国的谎言为由，发声明称其产品所需要的棉花将不再从新疆获得，立即引发众怒，被中国消费者谴责。尽管3月24日再度发声明“找补”，但并未赢得中国消费者宽宥，反而引发了更大怒火。事实胜于雄辩。"
        ,article_genre: "article"
        ,behot_time: 1616752502
        ,chinese_tag: "国际"
        ,comments_count: 22860
        ,group_id: "6943252380641133092"
        ,group_source: 2
        ,has_gallery: false
        ,image_url: "//p1.pstatp.com/list/190x124/pgc-image/S9XCcrDJ3nLAjh"
        ,is_feed_ad: false
        ,item_id: "6943252380641133092"
        ,media_avatar_url: "//p6-tt-ipv6.byteimg.com/large/pgc-image/6f2bd8964ebe4ce18fda9bcd0e6c2f40"
        ,media_url: "/c/user/token/MS4wLjABAAAAa4jZTw8oFVgiBHDJk10547ATPToNthylT4jZwY2ik1w/"
        ,middle_image: "http://p1.pstatp.com/list/pgc-image/S9XCcrDJ3nLAjh"
        ,middle_mode: true
        ,more_mode: false
        ,single_mode: true
        ,source: "人民日报"
        ,source_url: "/group/6943252380641133092/"
        ,tag: "news_world"
        ,tag_url: "news_world"
        ,title: "一边赚我们的钱一边使坏，H&M你该掂量掂量了"
      },
      {
        abstract: "是第六个全民国家安全教育日。国家安全并非只与军事、科技等相关。有可能是你身边刚路过的陌生人。也有可能是已经潜伏在你身边许久的熟人。"
        ,article_genre: "article"
        ,behot_time: 1618551294
        ,chinese_tag: "军事"
        ,comments_count: 723
        ,group_id: "6951149987526869534"
        ,group_source: 2
        ,has_gallery: false
        ,image_url: "//p1.pstatp.com/list/190x124/pgc-image/25FB34BCEE11D72C33F19AF876D8A350"
        ,is_feed_ad: false
        ,item_id: "6951149987526869534"
        ,media_avatar_url: "//p3.toutiaoimg.com/origin/pgc-image/6567094cd4c249a487b66a43cfcd414d"
        ,media_url: "/c/user/token/MS4wLjABAAAAZ-7_bvIhGk-tKa7Z4B3GUSA0d-6Rc3qMsEsMEPPUQig/"
        ,middle_image: "http://p1.pstatp.com/list/pgc-image/25FB34BCEE11D72C33F19AF876D8A350"
        ,middle_mode: true
        ,more_mode: false
        ,single_mode: true
        ,source: "央视新闻"
        ,source_url: "/group/6951149987526869534/"
        ,tag: "news_military"
        ,tag_url: "news_military"
        ,title: "国家安全与你我息息相关！一图带你练就“火眼金睛"
      },
      {
      abstract:"党的十八大以来，习近平总书记在国内考察调研期间，一次次踏上红色热土，用脚步丈量信仰高地，安徽金寨、河南兰考、江西井冈山…"
      ,article_genre: "article"
      ,behot_time: 1618553116
      ,chinese_tag: "时政"
      ,comments_count: 65
      ,group_id: "6951543527281066534"
      ,group_source: 2
      ,has_gallery: false
      ,image_url: "//p3.pstatp.com/list/pgc-image/3f910424665f44c08ecbef3bf04771ad"
      ,is_feed_ad: false
      ,is_stick: true
      ,item_id: "6951543527281066534"
      ,media_avatar_url:"//p3.toutiaoimg.com/large/bc20000b91968707dab"
      ,media_url:"/c/user/token/MS4wLjABAAAAaezOXkHVr0_i2JvWXprb4zLGpRInnKStptFm5WsXHKU/"
      ,middle_image:"http://p3.pstatp.com/list/pgc-image/3f910424665f44c08ecbef3bf04771ad"
      ,middle_mode:true
      ,more_mode:false
      ,single_mode:false
      ,source:"央视网新闻"
      ,source_url:"/group/6951543527281066534/"
      ,tag:"news_politics"
      ,tag_url:"search/?keyword=%E6%97%B6%E6%94%BF"
      ,title:"联播+丨跟着总书记踏上红色热土 汲取奋进力量"
      },
      {
        abstract: "越南以为有美国撑腰，想对中国浑水摸鱼？最强战舰在南海开火"
        ,article_genre: "video"
        ,behot_time: 1618553108
        ,chinese_tag: "视频"
        ,comments_count: 705
        ,group_id: "6949484392532148748"
        ,group_source: 2
        ,has_gallery: false
        ,has_video: true
        ,image_url: "//p1.pstatp.com/list/190x124/tos-cn-i-0004/77be5576e04d40bf86a8c6f90b439bce"
        ,is_feed_ad: false
        ,item_id: "6949484392532148748"
        ,media_avatar_url: "//p26.toutiaoimg.com/origin/pgc-image/1ac99ae530504ad7b6e9f906359241a7"
        ,media_url: "/c/user/token/MS4wLjABAAAAO6asdk-AxT8VaCjjGgW7vf0m4bZWwHeVBlLGVLEcLzQ/"
        ,middle_image: "http://p1.pstatp.com/list/tos-cn-i-0004/77be5576e04d40bf86a8c6f90b439bce"
        ,middle_mode: true
        ,more_mode: false
        ,single_mode: true
        ,source: "种花家的评论员"
        ,source_url: "/group/6949484392532148748/"
        ,tag: "video_military"
        ,tag_url: "video"
        ,title: "越南以为有美国撑腰，想对中国浑水摸鱼？最强战舰在南海开火"
        ,video_duration_str: "03:49"
        ,video_id: "v02004g10000c1oochuphinkcuo8uhag"
        ,video_play_count: 2866187
      },
      {
        abstract: "金钱却损失了不少...2020年8月初，高新区居民小周在网上认识一名徐姓男子，对方自称是武警某部队军官。"
        ,article_genre: "article"
        ,behot_time: 1618553102
        ,comments_count: 1615
        ,group_id: "6949762647071916552"
        ,group_source: 2
        ,has_gallery: false
        ,image_list: [{url: "//p1.pstatp.com/list/pgc-image/SUFMuabDTujecy"}]
        ,image_url: "//p1.pstatp.com/list/190x124/pgc-image/SUFMuabDTujecy"
        ,is_feed_ad: false
        ,item_id: "6949762647071916552"
        ,media_avatar_url: "//p26.toutiaoimg.com/large/ef600112027c38b89ca"
        ,media_url: "/c/user/token/MS4wLjABAAAAkBInTefEXGPcS0avMIcyzcyDIb8T8hL6gUlrrWDJxIw/"
        ,middle_image: "http://p1.pstatp.com/list/pgc-image/SUFMuabDTujecy"
        ,middle_mode: true
        ,more_mode: true
        ,single_mode: true
        ,source: "北青网"
        ,source_url: "/group/6949762647071916552/"
        ,tag: "legal"
        ,tag_url: "search/?keyword=None"
        ,title: "“我觉得我现在谈的对象有问题”警方一查，还真有问题"
      },
      {
        abstract: "“人不犯我 我不犯人，人若犯我 我必犯人”，美国为巩固自身在全球的经济、政治、军事地位，频频发难中国，面对美国咄咄逼人的攻势，在国际上向来低调的中国终于在今年爆发了。"
        ,article_genre: "video"
        ,behot_time: 1618553487
        ,chinese_tag: "视频"
        ,comments_count: 275
        ,group_id: "6949110601683730975"
        ,group_source: 2
        ,has_gallery: false
        ,has_video: true
        ,image_url: "//p1.pstatp.com/list/190x124/tos-cn-i-0004/d94bcf8687a24fad99430ee0023f00b7"
        ,is_feed_ad: false
        ,item_id: "6949110601683730975"
        ,media_avatar_url: "//p5.toutiaoimg.com/large/pgc-image/8c5538e3c44f4ac085b63f49c7c47ff7"
        ,media_url: "/c/user/token/MS4wLjABAAAAjhJkoEfevr4rOzUBTg2AZFujeiSeM5Cz4ztrM4u0QPOusYlOR77Nc9TsF5L4oZJJ/"
        ,middle_image: "http://p1.pstatp.com/list/tos-cn-i-0004/d94bcf8687a24fad99430ee0023f00b7"
        ,middle_mode: true
        ,more_mode: false
        ,single_mode: true
        ,source: "资讯速递号"
        ,source_url: "/group/6949110601683730975/"
        ,tag: "video_world"
        ,tag_url: "video"
        ,title: "美国霸权走向末路！中国正式进入反攻模式，一出手就直戳美国痛处"
        ,video_duration_str: "05:47"
        ,video_id: "v03004g10000c1o1t52ebf27e2frn750"
        ,video_play_count: 1368871
      },
      {
        abstract: "“延安的城门成天开着，成天有从各个方向走来的青年，背着行李，燃烧着希望，走进这城门。”这是诗人何其芳笔下，1938年初的延安。"
        ,article_genre: "video"
        ,behot_time: 1618553497
        ,chinese_tag: "视频"
        ,comments_count: 128
        ,group_id: "6951303467780538917"
        ,group_source: 2
        ,has_gallery: false
        ,has_video: true
        ,image_url: "//p1.pstatp.com/list/pgc-image/SUdaRVyE1V5rYI"
        ,is_feed_ad: false
        ,is_stick: true
        ,item_id: "6951303467780538917"
        ,media_avatar_url: "//p6.toutiaoimg.com/origin/pgc-image/21507a12df2c4e7eb2d859c6f32dd497"
        ,media_url: "/c/user/token/MS4wLjABAAAAiAce5qhH31TeuB3UdpFMV8u-uwy2LnoiqI10uZHqAt8/"
        ,middle_image: "http://p1.pstatp.com/list/pgc-image/SUdaRVyE1V5rYI"
        ,middle_mode: true
        ,more_mode: false
        ,single_mode: false
        ,source: "新华社"
        ,source_url: "/group/6951303467780538917/"
        ,tag: "video_domestic"
        ,tag_url: "video"
        ,title: "新华全媒+|这组大数据告诉你，延安当年有多红｜4万多名知识分子奔赴延安！这里是抗战中的“光明之城”"
        ,video_duration_str: "02:21"
        ,video_id: "v0201fg10000c1s15qnlrov45qeqvs80"
        ,video_play_count: 3260
      },
      {
      abstract: "拆解iQOO原装120W充电器，对比小米120W，两者有多大的差别？"
      ,article_genre: "video"
      ,behot_time: 1618553482
      ,chinese_tag: "视频"
      ,comments_count: 247
      ,group_id: "6942048940804014624"
      ,group_source: 2
      ,has_gallery: false
      ,has_video: true
      ,image_url: "//p1.pstatp.com/list/190x124/tos-cn-i-0004/2a595c688a6a427c9a0c34fa7937d0fe"
      ,is_feed_ad: false
      ,item_id: "6942048940804014624"
      ,media_avatar_url: "//p9.toutiaoimg.com/large/a14900053556aab1d98f"
      ,media_url: "/c/user/token/MS4wLjABAAAAAVMD1paW636p2yJxRs0IQcdsRLEBiJpVIz3YrCFEWkc/"
      ,middle_image: "http://p1.pstatp.com/list/tos-cn-i-0004/2a595c688a6a427c9a0c34fa7937d0fe"
      ,middle_mode: true
      ,more_mode: false
      ,single_mode: true
      ,source: "阿甘体验"
      ,source_url: "/group/6942048940804014624/"
      ,tag: "video_digital"
      ,tag_url: "video"
      ,title: "拆解iQOO原装120W充电器，对比小米120W，两者有多大的差别？"
      ,video_duration_str: "05:37"
      ,video_id: "v020040f0000c1bh0d8rfj5rec8jbp50"
      ,video_play_count: 4989
      }
    ]
  })
  
    
}
