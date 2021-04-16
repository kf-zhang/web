import Head from 'next/head'
import Top from '../component/top'
import Single from '../component/single' 
import NoPic from '../component/noPic'
import CardContainer from '../component/cardContainer'
import Labels from '../component/labels'
import React,{useEffect,useState} from 'react'

const data={
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
}
export default function Home() {
  const [state,setState]=useState({
    list:[]
  })

  // useEffect( ()=>{
  //   fetch("/api/news").then(
  //     async (res)=>{
  //       const resp=await res.json();
  //       setState({
  //         list:resp.data,
  //       });
  //     }
  //   ).catch(()=>{})
  // },[]
  // );
  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
      console.log("data")
      console.log(resp.data)
      console.log("list")
      console.log(state.list)
      console.log("html")
      console.log(state.list.map((data)=>NoPic(data)))
    });
  }, []);
  return (
    <div>
      {Top()}
      {Labels()}
      {CardContainer(
        // [NoPic(state.list[0]),NoPic(state.list[1])]
        // state.list.map(
        //   (data)=>{
        //     NoPic(data)
        //   }
        // )
        state.list.map(
          (data)=>{
            switch(data.single_mode){
              case true:
                return Single(data)
              case false:
                return NoPic(data)
            }
          }
        )
      )}
    </div>
  )
}
